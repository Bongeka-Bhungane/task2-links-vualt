// import React from 'react'


// // Interface: object with 4 strings
// interface CardItem {
//   title: string;
//   url: string;
//   description: string;
//   tag?: string;
// }

// // Array with 2 objects
// const data: CardItem[] = [
//   {
//     title: "Google",
//     url: "https://www.google.com",
//     description: "Search engine giant",
//     tag: "Search",
//   },
//   {
//     title: "YouTube",
//     url: "https://www.youtube.com",
//     description: "Video sharing platform",
//     tag: "Entertainment",
//   },
// ];

// export default function Viewer({title, url, description, tag}: data) {
//   return (
//     <div className="viewer-card">
//       <h3>{title}</h3>
//     </div>
//   );
// }

import React, { useState } from "react";

// Interface: object with 4 strings
interface CardItem {
  title: string;
  url: string;
  description: string;
  tag: string;
}

export default function Viewer() {
  // State holding 2 objects
  const [data] = useState<CardItem[]>([
    {
      title: "Google",
      url: "https://www.google.com",
      description: "Search engine giant",
      tag: "Search",
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com",
      description: "Video sharing platform",
      tag: "Entertainment",
    },
  ]);

  return (
    <div className="viewer-card">
      {data.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.title}</h3>
          <p>
            <strong>URL:</strong> {item.url}
          </p>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
          <p>
            <strong>Tag:</strong> {item.tag}
          </p>
        </div>
      ))}
    </div>
  );
}