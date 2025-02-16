import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./routes/Home";
// import Dorms from "./routes/Dorms";
import { AppProvider } from "./context/AppContext";
import About from "@/routes/About.tsx";

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
