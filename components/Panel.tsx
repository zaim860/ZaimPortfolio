import type { ReactNode } from "react";
import Fx, { type FxType } from "./Fx";

type Props = {
  children: ReactNode;
  color?: "white" | "yellow" | "red" | "blue" | "ink";
  tilt?: "left" | "right" | "none";
  className?: string;
  fx?: FxType; // hover effect: "lightning" | "fist" | "hammer" | "impact"
  fxText?: string; // text for the "impact" burst, e.g. "BAM!"
};

// The basic comic "panel": thick border + hard shadow. Everything is built from this.
export default function Panel({ children, color = "white", tilt = "none", className = "", fx, fxText }: Props) {
  return (
    <div className={`panel panel--${color} tilt--${tilt} ${className}`} data-fx={fx}>
      {fx && <Fx type={fx} text={fxText} />}
      {children}
    </div>
  );
}