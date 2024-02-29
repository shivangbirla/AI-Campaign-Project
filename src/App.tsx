import { Route, Routes } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import { CompanyProvider } from "./ThemeContext";

const App = () => {
  return (
    <CompanyProvider>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/page2" element={<PageTwo />} />
        <Route path="/page3" element={<PageThree />} />
      </Routes>
    </CompanyProvider>
  );
};

export default App;
