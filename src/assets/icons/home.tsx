import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IsPage } from "../../interfaces";

const HomeIcon = ({ isPage }: IsPage) => {
  const [open, setOpen] = useState(isPage === "home");
  const router = useRouter();

  useEffect(() => setOpen(isPage === "home"), [isPage]);

  return (
    <svg
      onClick={() => router.push("/profile")}
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      fill="none"
      viewBox="0 0 43 43"
    >
      <path
        stroke={open ? "#fff" : "#8C8CA2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.542"
        d="M5.563 16.188L21.5 3.791l15.938 12.396v19.479a3.542 3.542 0 01-3.542 3.541H9.104a3.542 3.542 0 01-3.541-3.541v-19.48z"
      ></path>
      <path
        stroke={open ? "#fff" : "#8C8CA2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.542"
        d="M16.188 39.208V21.5h10.625v17.708"
      ></path>
    </svg>
  );
};

export default HomeIcon;
