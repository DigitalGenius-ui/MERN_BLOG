import React, { useState } from "react";
import styled from "styled-components";
import FileBase64 from "react-file-base64";

const Forms = () => {
  const [formChange, setFormChange] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: [],
    imageFile: "",
  });

  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <Form>
      <h1>{formData ? "Login Page" : "SignUp Page"}</h1>
      {formChange && (
        <>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="title"
            name="title"
          />
          <textarea
            onChange={(e) => handleChange(e)}
            name="description"
            placeholder="description..."
            cols="30"
            rows="10"
          ></textarea>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="tags"
            placeholder="tags..."
          />
          <FileBase64
            type="file"
            multiple={false}
            onDone={(base64) => setFormData({ ...formData, imageFile: base64 })}
          />
        </>
      )}
    </Form>
  );
};

export default Forms;

const Form = styled.form``;
