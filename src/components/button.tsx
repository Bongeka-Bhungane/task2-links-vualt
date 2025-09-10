import React, { ReactNode } from "react";

interface Btn {
  name?: string;
  color: string;
  backgroundColor?: string;
  className?: string;
  icon?: ReactNode; 
}

export default function Button({ name, color, className, icon, backgroundColor }: Btn) {
  return (
    <div>
      <button
        style={{
          background: backgroundColor,
          color: color,
          fontSize: "100%",
        }}
        className={className}
      >
        {icon && <span>{icon}</span>}
        {name}
      </button>
    </div>
  );
}
