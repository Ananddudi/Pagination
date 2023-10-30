import React from "react";

export const Paginate = ({ setPrev, setNext }) => {
  const numbershowlimit = 5;
  return (
    <ul>
      <li>
        <button onClick={setPrev}>Prev</button>
      </li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>
        <button onClick={setNext}>Next</button>
      </li>
    </ul>
  );
};
