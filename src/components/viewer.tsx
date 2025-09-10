import React, { useState } from "react";
import Button from "./button";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";

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
    {
      title: "YouTube",
      url: "https://www.youtube.com",
      description: "Video sharing platform",
      tag: "Entertainment",
    },
     
  ]);

  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div key={index} className="card">
          <div className="card-content">
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

          <div className="button-container">
            <Button
              color="#ffffff"
              backgroundColor="red"
              className="square-button"
              icon={<FaTrash />}
            />
            <Button
              color="#000000"
              backgroundColor="#89F3FF"
              className="square-button"
              icon={<FaEdit />}
            />
          </div>
        </div>
      ))}
      <div className="button-container">
        <Button
          color="#000000"
          backgroundColor="#C5C6C7"
          className="button"
          icon={<FaPlus />}
        />
      </div>
    </div>
  );
}