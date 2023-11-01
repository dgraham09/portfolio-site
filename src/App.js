import { use } from "i18next";
import Cursor from "./components/UI/Cursor";
import ScrollToTop from "./components/UI/ScrollToTop";
import { useTranslation } from "react-i18next";
import "animate.css";

function AppLayout({ children }) {
  const { t } = useTranslation();
  return (
    <div>
      <ScrollToTop />
      <Cursor />
      <main className="App bg-blue-950 min-h-screen">{children}</main>
    </div>
  );
}

export default AppLayout;
