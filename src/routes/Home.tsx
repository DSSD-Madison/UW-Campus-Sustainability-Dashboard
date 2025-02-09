const Home = () => {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-cover bg-center text-white text-center p-5 bg-black" 
           style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,green-energy')" }}>
        <header className="bg-black bg-opacity-70 p-12 rounded-lg max-w-2xl w-11/12 flex flex-col items-center shadow-2xl">
          <h1 className="text-5xl font-extrabold mb-4">University Sustainability Dashboard</h1>
          <p className="text-lg mb-6 opacity-80">Tracking our progress towards a greener future.</p>
          <a href="/dashboard" className="px-6 py-3 text-lg font-semibold bg-green-500 rounded-md shadow-lg transition duration-300 hover:bg-green-600 hover:scale-105">
            Go To Dashboard
          </a>
        </header>
      </div>
    );
  };
  
  export default Home;