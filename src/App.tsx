import React from "react";
import Summary from "./Pages/Summary";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import { DataContextProvider } from "./Context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
