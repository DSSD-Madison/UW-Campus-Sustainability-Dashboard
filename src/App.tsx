"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import Layout from "./layout/Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

export default function App() {

  const routeArr = [
    {
      path: "/",
      element: <Home />
    }
    ,
    {
      path: "/about",
      element: <About />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]
  return (
      <Router basename={import.meta.env.BASE_URL}>
        <AppProvider>
          <Routes>
            {
              routeArr.map((route, index) => {
                return(
                  <Route key = {index} path={route.path} element={
                    <Layout>
                      {route.element}
                    </Layout>
                  } />
                )
            })
            }
          </Routes>
        </AppProvider>
      </Router>
  );
}
