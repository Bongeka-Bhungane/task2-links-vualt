import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

interface CardItem {
  name: string;
  url: string;
  description: string;
  tag: string;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [links, setLinks] = useState<CardItem[]>([]);
  const [filtered, setFiltered] = useState<CardItem[]>([]);

  // 🔥 IMPORTANT: read localStorage EVERY TIME query changes
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("links") || "[]");
    setLinks(stored);
  }, [query]);

  useEffect(() => {
    if (!query.trim()) {
      setFiltered([]);
      return;
    }

    const lower = query.toLowerCase();

    const results = links.filter((item) =>
      `${item.name} ${item.url} ${item.description} ${item.tag}`
        .toLowerCase()
        .includes(lower)
    );

    setFiltered(results);
  }, [query, links]);

  return (
    <div className="search-wrapper">
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Find link..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="clear-btn" onClick={() => setQuery("")}>
            ✕
          </button>
        )}
      </div>

      {query && (
        <div className="fullscreen-results">
          {filtered.length === 0 ? (
            <p className="no-results">No matches found.</p>
          ) : (
            <div className="search-results">
              {filtered.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="search-card"
                >
                  <h3>{item.name}</h3>
                  <h4><span>#{item.url}</span></h4>
                  <p>{item.description}</p>
                  <span>#{item.tag}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
