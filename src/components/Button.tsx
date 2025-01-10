import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Button({ children, setCount }: ButtonProps) {
  return <button className="">{children}</button>;
}
