import { Route, Routes } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/page2" element={<PageTwo />} />
      <Route path="/page3" element={<PageThree />} />
    </Routes>
  );
};

export default App;
