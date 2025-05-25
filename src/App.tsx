import React from "react";
import Summary from "./Pages/Summary";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import { DataContextProvider } from "./Context/DataContext";
import Sales from "./Pages/Sales";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
