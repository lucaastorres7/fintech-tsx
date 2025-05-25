import React from "react";
import { useData } from "../Context/DataContext";

const buttonStyle: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${year}-${month}-${day}`;
}

function monthName(monthsAgo: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + monthsAgo);
  const month = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    date
  );

  return month;
}

const MonthButton = ({ n }: { n: number }) => {
  const { setStart, setEnd } = useData();

  function setMonth(monthsAgo: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + monthsAgo);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setStart(formatDate(firstDay));
    setEnd(formatDate(lastDay));
  }

  return (
    <button style={buttonStyle} onClick={() => setMonth(n)}>
      {monthName(n)}
    </button>
  );
};

export default MonthButton;
