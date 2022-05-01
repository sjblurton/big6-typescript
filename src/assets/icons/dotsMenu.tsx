import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setToggle: Dispatch<SetStateAction<boolean>>;
};

function DotsMenu({ setToggle }: Props) {
  return (
    <svg
      style={{ cursor: "pointer" }}
      onClick={() => setToggle(true)}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
    >
      <g data-name="20x20/three-dots--grey" transform="rotate(90 12 12)">
        <path fill="none" d="M0 0H24V24H0z"></path>
        <circle
          cx="21"
          cy="0"
          r="4"
          stroke="#fff"
          fill="#fff"
          strokeMiterlimit="10"
          strokeWidth="0.5"
          transform="translate(-12 0)"
        ></circle>
        <circle
          cx="21"
          cy="0"
          r="4"
          stroke="#fff"
          fill="#fff"
          strokeMiterlimit="10"
          strokeWidth="0.5"
        ></circle>
        <circle
          cx="21"
          cy="0"
          r="4"
          stroke="#fff"
          fill="#fff"
          strokeMiterlimit="10"
          strokeWidth="0.5"
          transform="translate(12 0)"
        ></circle>
      </g>
    </svg>
  );
}

export default DotsMenu;
