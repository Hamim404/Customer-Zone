import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";
import { toast, ToastContainer } from "react-toastify";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function App() {
  // Raw data straight from tickets.json — no filtering/logic applied yet.
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  // TODO build this yourself
  // - selecting a ticket card should push it into `activeTasks` and
  //   show a toast, which should bump the In-Progress banner count
  // - clicking "Complete" on a task should:
  //     1. remove it from activeTasks
  //     2. add it to resolvedTasks
  //     3. remove it from the `tickets` list (Customer Tickets)
  //     4. update the Banner counts
  const [activeTasks, setActiveTasks] = useState([]);
  const [resolvedTasks, setResolveTasks] = useState([]);
  const onSelectTicket = (ticket) => {
    setActiveTasks([...activeTasks, ticket]);
    toast("New Task Added!");
  };
  const onComplete = (task) => {
    setResolveTasks([...resolvedTasks, task]);
    console.log("Complete", task);
    toast("Completed the Task!");
  };
  console.log(resolvedTasks);

  return (
    <div data-theme="csticket" className="min-h-screen bg-base-200">
      <Navbar></Navbar>
      <Banner
        inProgressCount={activeTasks.length}
        resolvedCount={resolvedTasks.length}
      />
      <ToastContainer></ToastContainer>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TicketList onSelectTicket={onSelectTicket} tickets={tickets} />
          </div>

          <TaskStatus
            onSelectTicket={onSelectTicket}
            resolvedTasks={resolvedTasks}
            onComplete={onComplete}
            activeTasks={activeTasks}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
