import "./Customers.css";

function Customers() {
  const customers = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      email: "rahul@gmail.com",
      visits: 12,
    },
    {
      id: 2,
      name: "Priya Reddy",
      phone: "9123456789",
      email: "priya@gmail.com",
      visits: 8,
    },
    {
      id: 3,
      name: "Arjun Kumar",
      phone: "9012345678",
      email: "arjun@gmail.com",
      visits: 15,
    },
  ];

  return (
    <div className="customers">
      <h1>Customer Management</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Total Visits</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.visits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;