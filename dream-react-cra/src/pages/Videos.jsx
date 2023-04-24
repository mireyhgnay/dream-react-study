import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const [text, setText] = useState("");
  const navigate = useNavigate(); // React Hook - useNavigate
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(""); // 초기화
    navigate(`/videos/${text}`);
  };
  return (
    <div>
      VIDEOS🎥
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="video id: "
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
