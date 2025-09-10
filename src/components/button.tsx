import React, { ReactNode } from "react";

interface Btn {
  name?: string;
  color: string;
  className?: string;
  icon?: ReactNode; 
}

export default function Button({ name, color, className, icon }: Btn) {
  return (
    <div>
      <button
        style={{ background: color, color: "black", fontSize: '100%'}}
        className= {className}
      >
        {icon && <span>{icon}</span>}
        {name}
      </button>
    </div>
  );
}
