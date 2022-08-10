import React from "react";
import styles from "../styles/Button.module.css";

export default function Button({
  onClick,
  children,
  bordered = true,
  style,
  className,
}) {
  return (
    <button
      className={`${bordered ? styles.btnBordered : styles.btn} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
