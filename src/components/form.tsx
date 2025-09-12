import React, { useState, useEffect } from "react";
import Button from "./button";

interface FormProps {
  initialData?: {
    name: string;
    url: string;
    description: string;
    tag: string;
  };
  onSave: (data: {
    name: string;
    url: string;
    description: string;
    tag: string;
  }) => void;
}

export default function Form({ initialData, onSave }: FormProps) {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.url || !formData.description) {
      alert("Please fill in all required fields!!");
      return;
    }
    onSave(formData);

    if (!initialData) {
      setFormData({ name: "", url: "", description: "", tag: "" });
    }
  };

  return (
    <div className="form-container">
      <p>Enter link details</p>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter the link name..."
        required
      />

      <label>URL:</label>
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
        placeholder="Enter the link url..."
        required
      />

      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter the link description..."
        required
      />

      <label>Tag:</label>
      <input
        type="text"
        name="tag"
        value={formData.tag}
        onChange={handleChange}
        placeholder="Enter the link tag..."
      />

      <Button
        name={initialData ? "Update" : "Save"}
        color="#000000"
        backgroundColor="#3FF32F"
        className="btn"
        onClick={handleSave}
      />
    </div>
  );
}

