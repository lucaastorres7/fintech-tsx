import React from "react";

type DateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ id, label, ...props }: DateInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="date" name={id} id={id} {...props} />
    </div>
  );
};

export default DateInput;
