import React from 'react'

interface Btn {
  name: string;
  color: string;
  className?: string;
}
export default function Button({ name, color, className }: Btn) {
  return (
    <div>
      <button style={{ background: color }} className={className}>
        {name}
      </button>
    </div>
  );
}