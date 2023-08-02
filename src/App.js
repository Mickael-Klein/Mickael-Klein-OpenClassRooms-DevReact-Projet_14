import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./Page/Index/Index";
import AddEmployee from "./Page/AddEmployee/AddEmployee";
import NotFound from "./Page/NotFound/NotFound";
import Header from "./Component/Header/Header";
import { useSelector } from "react-redux";

function App() {
  document.title = useSelector((state) => state.userInteraction.pageTitle);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
