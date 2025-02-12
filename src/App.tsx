import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./routes/Home";
// import Dorms from "./routes/Dorms";


const App = () => {

  const routes = [
    {
      element: Home,
      path: '/'
    }
  ]
  return (
    <Router>
      <>
        <Routes>
          {
            routes.map(route => (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <route.element />
                </Layout>
              } />
            ))
          }
        </Routes>
      </>
    </Router>
  );
};

export default App;
