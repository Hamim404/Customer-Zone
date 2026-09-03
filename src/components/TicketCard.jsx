import { Calendar } from "lucide-react";

const STATUS_BADGE = {
  Open: "badge-success",
  "In-Progress": "badge-warning",
};

const PRIORITY_TEXT = {
  High: "text-error",
  Medium: "text-warning",
  Low: "text-success",
};

/**
 * Presentational only. Pass an onSelect handler from the parent
 * to hook up "add to Task Status" behavior later.
 */
export default function TicketCard({ ticket, onSelect }) {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  return (
    <div
      onClick={() => onSelect && onSelect(ticket)}
      className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="card-body p-5 gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="card-title text-sm font-semibold text-gray-900">
            {title}
          </h3>
          <span className={`badge gap-1.5 shrink-0 text-white border-none ${STATUS_BADGE[status]}`}>
            {status}
          </span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs pt-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">#{id}</span>
            <span className={`font-semibold ${PRIORITY_TEXT[priority]}`}>
              {priority.toUpperCase()} PRIORITY
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-500">{customer}</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Calendar size={13} />
              {new Date(createdAt).toLocaleDateString("en-US")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
