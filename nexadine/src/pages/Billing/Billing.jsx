import "./Billing.css";

function Billing() {
  const bills = [
    {
      id: "B001",
      customer: "Rahul Sharma",
      items: 3,
      amount: 850,
      payment: "UPI",
      status: "Paid",
    },
    {
      id: "B002",
      customer: "Priya Reddy",
      items: 2,
      amount: 450,
      payment: "Cash",
      status: "Paid",
    },
    {
      id: "B003",
      customer: "Arjun Kumar",
      items: 5,
      amount: 1200,
      payment: "Card",
      status: "Pending",
    },
  ];

  return (
    <div className="billing-container">
      <h1>Billing Management</h1>

      <table className="billing-table">
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total Amount</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.customer}</td>
              <td>{bill.items}</td>
              <td>₹{bill.amount}</td>
              <td>{bill.payment}</td>
              <td>{bill.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <h2>Today's Summary</h2>
        <p>Total Bills: 3</p>
        <p>Total Revenue: ₹2500</p>
      </div>
    </div>
  );
}

export default Billing;