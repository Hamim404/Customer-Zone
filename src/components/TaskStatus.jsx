/**
 * Right-hand sidebar, built on daisyUI's `card` component.
 * `activeTasks` and `resolvedTasks` are just arrays of ticket objects
 * passed down as props — no state is managed here. Wire `onComplete`
 * up to your own logic later:
 *   1. remove the ticket from Task Status
 *   2. add it to the resolved list
 *   3. decrement In-Progress count / increment Resolved count
 *   4. remove it from Customer Tickets
 */
export default function TaskStatus({
  activeTasks = [],
  resolvedTasks = [],
  onComplete,
}) {
  return (
    <aside className="card bg-base-100 border border-base-200 shadow-sm h-fit lg:sticky lg:top-6">
      <div className="card-body p-5">
        <h2 className="card-title text-lg font-bold text-gray-900">
          Task Status
        </h2>

        {activeTasks.length === 0 ? (
          <p className="text-sm text-gray-400">
            Select a ticket to add to Task Status
          </p>
        ) : (
          <ul className="space-y-3">
            {activeTasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between gap-3 border border-base-200 rounded-lg px-3 py-2.5"
              >
                <span className="text-sm text-gray-700 font-medium">
                  {task.title}
                </span>
                <button
                  onClick={() => onComplete && onComplete(task)}
                  className="btn btn-primary btn-xs rounded-lg"
                >
                  Complete
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="divider my-2" />

        <h3 className="text-base font-bold text-gray-900">Resolved Task</h3>

        {resolvedTasks.length === 0 ? (
          <p className="text-sm text-gray-400">No resolved tasks yet.</p>
        ) : (
          <ul className="space-y-2">
            {resolvedTasks.map((task) => (
              <li
                key={task.id}
                className="text-sm text-gray-500 border border-base-200 rounded-lg px-3 py-2.5"
              >
                {task.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
