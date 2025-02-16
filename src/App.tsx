import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Heatmap from "./routes/Heatmap";
import About from "./routes/About";
import Locations from "./routes/Locations";
import { AppProvider } from "./context/AppContext";

const App = () => {

  const routes = [
    {
      element: Home,
      path: '/'
    },
    {
      element: About,
      path: '/about'
    }
  ]
  return (
    <Router>
      <AppProvider>
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
      </AppProvider>
    </Router>
  );
};

export default App;
