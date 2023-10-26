import Cursor from "./components/UI/Cursor";
import ScrollToTop from "./components/UI/ScrollToTop";

function AppLayout({ children }) {
  return (
    <div>
      <ScrollToTop />
      <Cursor />
      <main className="App bg-blue-950 min-h-screen">{children}</main>
    </div>
  );
}

export default AppLayout;
