import React from "react";

interface TextFieldProps {
  value: string;
  onChange: (val: string) => void;
}

const TextField = ({ value, onChange }: TextFieldProps) => {
  return (
    <input
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    />
  );
};

export default TextField;