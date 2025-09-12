import React, { useState, useEffect } from "react";
import Button from "./button";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import Form from "./form";
import Model from "react-modal";

interface CardItem {
  name: string;
  url: string;
  description: string;
  tag: string;
}

export default function Viewer() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<CardItem[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("links") || "[]");
    setData(stored);
  }, [visible]); 

   const saveToStorage = (newData: CardItem[]) => {
     setData(newData);
     localStorage.setItem("links", JSON.stringify(newData));
   };

  const handleDelete = (index: number) => {
    if (window.confirm("are you sure you want to delete this link?")){
      const updated = data.filter((_, i) => i !== index);
    setData(updated);
    localStorage.setItem("links", JSON.stringify(updated));
    alert("Link deleted successfully!");
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setVisible(true);
  }

  const handleSave = (formData: cardItem) => {
    let updated: CardItem[];
    if (editIndex !== null) {
      updated = [...data];
      updated[editIndex] = formData;
      setEditIndex(null);
      alert("successfully updated link");
      
    } else {
      updated = [...data, formData];
      alert("successfully saved link");
    }
    saveToStorage(updated);
    setVisible(false)
  }

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
                onClick={() => handleEdit(index)}
              />
            </div>
          </div>
        ))
      )}

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
              background: "#818D92",
            },
            content: {
              width: "50%",
              height: "50%",
              margin: "auto",
            },
          }}
        >
          <Form
            initialData={editIndex !== null ? data[editIndex] : undefined}
            onSave={handleSave}
          />
        </Model>
      </div>
    </div>
  );
}
