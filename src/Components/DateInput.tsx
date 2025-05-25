import React from "react";

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) 0.75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

type DateInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ id, label, ...props }: DateInputProps) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input style={inputStyle} type="date" name={id} id={id} {...props} />
    </div>
  );
};

export default DateInput;
