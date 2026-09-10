import WaiterSidebar from "../WaiterSidebar/WaiterSidebar";
import "./WaiterLayout.css";

function WaiterLayout({ children }) {
  return (
    <div className="waiter-layout">
      <WaiterSidebar />

      <main className="waiter-main">
        {children}
      </main>
    </div>
  );
}

export default WaiterLayout;