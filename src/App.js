import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Welcome1 from "./pages/Welcome1";
import Welcome2 from "./pages/Welcome2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/welcome":
        title = "";
        metaDescription = "";
        break;
      case "/welcome1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome1 />} />
      <Route path="/welcome1" element={<Welcome2 />} />
    </Routes>
  );
}
export default App;
