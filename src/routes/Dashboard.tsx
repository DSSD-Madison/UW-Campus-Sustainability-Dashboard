const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Dashboard</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">
            <a href="/" className="text-lg">
              Home
            </a>
          </li>
          <li className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">
            <span className="text-lg">Profile</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 cursor-pointer">
            <span className="text-lg">Settings</span>
          </li>
          <li className="flex items-center gap-3 px-4 py-2 rounded hover:bg-red-600 cursor-pointer">
            <span className="text-lg">Logout</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome Back!
        </h1>
        <p className="text-lg text-gray-700">
          Manage your profile, track progress, and customize settings.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
