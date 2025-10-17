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

  const [urlError, setUrlError] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // ✅ URL validation function
  const isValidURL = (url: string): boolean => {
    const pattern = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/i;
    return pattern.test(url);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "url") {
      if (value.trim() === "") {
        setUrlError("");
      } else if (!isValidURL(value)) {
        setUrlError("Please enter a valid URL (e.g. https://example.com)");
      } else {
        setUrlError("");
      }
    }
  };

  const handleSave = () => {
    if (!formData.name || !formData.url || !formData.description) {
      alert("Please fill in all required fields!!");
      return;
    }

    if (!isValidURL(formData.url)) {
      setUrlError("Please enter a valid URL (e.g. https://example.com)");
      return;
    }

    setUrlError("");
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
        placeholder="Enter the link URL..."
        required
      />
      {urlError && <p className="error-message">{urlError}</p>}

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
