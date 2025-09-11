import React, { useState, useEffect } from "react";
import Button from "./button";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import Form from "./form";
import Model from "react-modal";

// Interface: object with 4 strings
interface CardItem {
  name: string;
  url: string;
  description: string;
  tag: string;
}

export default function Viewer() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<CardItem[]>([]);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("links") || "[]");
    setData(stored);
  }, [visible]); // refresh whenever modal closes/opens

  // Delete item
  const handleDelete = (index: number) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      setData(data.filter((_, i) => i !== index));
      alert("Link deleted successfully!");
    }
  };

  // Edit item
  const handleEdit = (index: number) => {
    setEditIndex(index);
    setVisible(true);
  };

  // Save (new or edited)
  const handleSave = (formData: CardItem) => {
    let updated: CardItem[];
    if (editIndex !== null) {
      updated = [...data];
      updated[editIndex] = formData; // replace the item
      setEditIndex(null);
    } else {
      updated = [...data, formData]; // add new item
    }
    saveToStorage(updated);
    setVisible(false);
  };

  return (
    <div className="card-container">
      {data.length === 0 ? (
        <p>No saved links yet.</p>
      ) : (
        data.map((item, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h3>{item.name}</h3>
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
                onClick={() => handleDelete(index)}
              />
              <Button
                color="#000000"
                backgroundColor="#89F3FF"
                className="square-button"
                icon={<FaEdit />}
              />
            </div>
          </div>
        ))
      )}

      {/* Add new item */}
      <div className="button-container">
        <Button
          color="#000000"
          backgroundColor="#C5C6C7"
          className="button"
          icon={<FaPlus />}
          onClick={() => setVisible(true)}
        />
        <Model
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
          style={{
            overlay: {
              background: "rgba(0,0,0,0.5)",
            },
            content: {
              width: "50%",
              height: "50%",
              margin: "auto",
            },
          }}
        >
          <Form />
          <Button
            name="Close"
            color="#fff"
            backgroundColor="gray"
            className="btn"
            onClick={() => setVisible(false)}
          />
        </Model>
      </div>
    </div>
  );
}
