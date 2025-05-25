import React from "react";
import DateRange from "./DateRange";
import Months from "./Month";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (pathname === "/sales") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [pathname]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg3">{title}</h1>
      </div>

      <Months />
    </header>
  );
};

export default Header;
