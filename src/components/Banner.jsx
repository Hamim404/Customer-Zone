import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";

/**
 * Banner shows the two ticket-status stat cards, built on daisyUI's
 * `stat` component with a custom gradient background layered on top.
 * NOTE: counts are passed in as props (static for now) — wire these
 * up to real state in the parent (App.jsx) later.
 */
export default function Banner({ inProgressCount = 0, resolvedCount = 0 }) {
  return (
    <section className="w-full bg-base-200 px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* In-Progress card */}
        <div className="stat relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-primary-content place-items-center py-10 shadow-sm">
          <img
            src={vector1}
            alt=""
            className="pointer-events-none select-none absolute top-0 left-0 w-40 opacity-60"
          />
          <div className="stat-title relative text-white/90">In-Progress</div>
          <div className="stat-value relative text-white">{inProgressCount}</div>
        </div>

        {/* Resolved card */}
        <div className="stat relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-green-500 text-secondary-content place-items-center py-10 shadow-sm">
          <img
            src={vector2}
            alt=""
            className="pointer-events-none select-none absolute bottom-0 right-0 w-40 opacity-60 rotate-180"
          />
          <div className="stat-title relative text-white/90">Resolved</div>
          <div className="stat-value relative text-white">{resolvedCount}</div>
        </div>
      </div>
    </section>
  );
}
