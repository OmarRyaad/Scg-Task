import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Hosting } from "./screens/Hosting/Hosting";
import { Servers } from "./screens/Servers/Servers";

function App() {
  const serversLayout = (
    <>
      <Header />
      <Servers />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Home page shows Hosting content */}
        <Route path="/" element={serversLayout} />

        {/* /servers also shows same content */}
        <Route path="/servers" element={serversLayout} />

        {/* hosting page */}
        <Route
          path="/hosting"
          element={
            <>
              <Header />
              <Hosting />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
