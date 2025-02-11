import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
// import Dorms from "./routes/Dorms";


const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/hm" element={<Heatmap />} />
          <Route path="/dorms" element={<Dorms />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </>
    </Router>
  );
};

export default App;
