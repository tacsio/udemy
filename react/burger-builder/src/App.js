import React from "react";

import Layout from "./components/Layout";
import BugerBuilder from "./pages/BurgerBuilder";

function App() {
  return (
    <div>
      <Layout>
        <BugerBuilder />
      </Layout>
    </div>
  );
}

export default App;
