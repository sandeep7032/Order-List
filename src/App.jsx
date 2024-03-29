import "./App.css";
import { Suspense } from "react";
import { Topbar, Navbar } from "./components/layout/index";
import { Page } from "./app/Page";

function App() {
  return (
    <Suspense>
      <Suspense>
        <Topbar />
      </Suspense>
      <Suspense>
        <Navbar />
      </Suspense>
      <Suspense>
        <Page />
      </Suspense>
    </Suspense>
  );
}

export default App;
