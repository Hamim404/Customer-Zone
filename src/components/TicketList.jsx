import TicketCard from "./TicketCard";

/**
 * Renders the "Customer Tickets" heading + grid.
 * `tickets` is passed in from App.jsx (currently just the raw
 * tickets.json data — filtering out completed ones is left for you).
 */
export default function TicketList({ tickets = [], onSelectTicket}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onSelectTicket={onSelectTicket}
          />
        ))}
      </div>
    </div>
  );
}
