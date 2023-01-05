import React from "react";
import styled from "styled-components";
import { BlogContext } from "../../../Context/Context";
import axios from "axios";
import { FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Forms = () => {
  const { formData, setFormData, file, setFile } = BlogContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const form = new FormData();
      const imageName = Date.now() + file.name;
      form.append("name", imageName);
      form.append("file", file);
      formData.imageFile = imageName;

      try {
        await axios.post("/upload", form);
      } catch (error) {
        console.log(error);
      }

      try {
        navigate("/")
        setFile("")
        await axios.post("/posts/create", formData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Content>
        <h1>Create Post</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
        />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Description..."
          cols="30"
          rows="10"
        ></textarea>
        <input
          onChange={handleChange}
          type="text"
          name="tags"
          placeholder="Tags..."
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        {file && (
          <ImageFile>
            <img
              style={{ width: "6rem" }}
              src={URL.createObjectURL(file)}
              alt=""
            />
            <span onClick={() => setFile(null)}>
              <FaRegTimesCircle />
            </span>
          </ImageFile>
        )}
        <button>submit</button>
      </Content>
    </Form>
  );
};

export default Forms;

const Form = styled.form`
`;

const Content = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  gap: 0.5rem;
  width: 30rem;
  margin: 2rem auto;
  box-shadow: 0px 0px 10px grey;
  padding: 0.8rem;

  h1 {
    text-align: center;
    font-size: 1.1rem;
    padding-bottom: 0.9rem;
  }

  input {
    padding: 0.6rem;
    outline: none;
  }

  textarea {
    padding: 0.6rem;
    outline: none;
    resize: none;
  }

  button {
    cursor: pointer;
    padding: 0.7rem;
  }
`;

const ImageFile = styled.div`
  position: relative;
  display: inline-block;
  span {
    position: absolute;
    top: -0.5rem;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    border-radius: 50px;
    color: #fff;
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
