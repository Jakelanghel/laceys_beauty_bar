import { GlobalStyles } from "./shared/Global";
import { useSetView } from "./hooks/useSetView";
import Router from "./router/Router";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  const isMobile = useSetView();

  return (
    <>
      <GlobalStyles />
      <div className="app">
        <Nav isMobile={isMobile} />
        <Router isMobile={isMobile} />
        <Footer />
      </div>
    </>
  );
}

export default App;
