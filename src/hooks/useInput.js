import { useState } from "react";

const useInput = (initialState) => {
  const [val, setVal] = useState(initialState);

  const handleChange = (event) => {
    const { value } = event.target;
    setVal(value);
  };

  return [val, handleChange];
};

export default useInput;
