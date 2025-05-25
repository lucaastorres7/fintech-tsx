import React from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        id="start"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        label="Final"
        id="end"
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
    </form>
  );
};

export default DateRange;
