import '../Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>University Sustainability Dashboard</h1>
        <p>Tracking our progress towards a greener future.</p>
        <a className="cta-button" href="/dashboard">Go To Dashboard</a>
      </header>
    </div>
  );
};

export default Home;