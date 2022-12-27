import logo from "./logo.svg";
import "./App.css";
import Header from "./frontend/shared/Header";
import Footer from "./frontend/shared/Footer";
import AppRouting from "./frontend/AppRouting";

function App() {
  return (
    <>
      <Header />
      <AppRouting />
      {/* <Outlet > */}

      <Footer />
    </>
  );
}

export default App;
