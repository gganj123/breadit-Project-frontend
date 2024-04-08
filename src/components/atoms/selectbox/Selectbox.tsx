import React from 'react';

interface Props {
  options: { value: string; name: string }[];
}

const SelectBox: React.FC<Props> = (props) => {
  return (
    <select>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
