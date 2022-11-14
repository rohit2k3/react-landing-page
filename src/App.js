import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style/App.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/contact.scss";
import "./style/footer.scss";
import "./style/mediaquery.scss";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
