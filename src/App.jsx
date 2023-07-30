import Router from "./router/Router";
import { GlobalStyles } from "./shared/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="app">
        <Router />
      </div>
    </>
  );
}

export default App;
