import '../Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </aside>
      <main className="content">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </main>
    </div>
  );
};

export default Dashboard;