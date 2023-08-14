import { GlobalStyles } from "./global-styles/GlobalStyles";
import { useSetView } from "./hooks/useSetView";
import Nav from "./components/nav/Nav";
import Router from "./router/Router";
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
