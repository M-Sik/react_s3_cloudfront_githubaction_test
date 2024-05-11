import { Suspense } from "react";
import "./App.css";
import Router from "./router";

function App() {
  return (
    <>
      <Suspense>
        <Router />
      </Suspense>
    </>
  );
}

export default App;
