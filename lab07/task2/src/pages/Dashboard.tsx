const Dashboard = () => {
  return (
    <div className="page">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <div style={{ marginTop: '20px' }}>
        <h3>Statistics</h3>
        <ul>
          <li>Total Users: 1,234</li>
          <li>Active Sessions: 56</li>
          <li>Revenue: $12,345</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard