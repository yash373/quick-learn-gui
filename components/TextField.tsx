import React from "react";

interface TextFieldProps {
  value: string,
  placeholder?: string,
  onChange: (val: string) => void
}

const TextField = ({ value, onChange, placeholder }: TextFieldProps) => {
  return (
    <input
      style={{ width: "300px" }}
      className="border px-3 py-2 rounded-md"
      placeholder={placeholder}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    />
  );
};

export default TextField;