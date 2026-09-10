import "./Orders.css";

function Orders() {
  const orders = [
    {
      id: "#1001",
      customer: "Rahul Sharma",
      table: "T-01",
      item: "Margherita Pizza",
      amount: "₹299",
      status: "Completed",
    },
    {
      id: "#1002",
      customer: "Priya Reddy",
      table: "T-04",
      item: "Chicken Burger",
      amount: "₹199",
      status: "Preparing",
    },
    {
      id: "#1003",
      customer: "Arjun Kumar",
      table: "Take Away",
      item: "White Pasta",
      amount: "₹249",
      status: "Pending",
    },
  ];

  return (
    <div className="orders">
      <h1>Order Management</h1>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Table</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.table}</td>
              <td>{order.item}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;