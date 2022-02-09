import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AuthProvider from "./contexts/Auth";
import CustomRoutes from "./components/CustomRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <>
          <Navbar />

          <CustomRoutes />

          <Footer />
        </>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
