import React, { useEffect } from "react";
import styled from "styled-components";
import { BlogContext } from "../../../Context/Context";
import axios from "axios";
import { FaRegTimesCircle } from "react-icons/fa";

const Forms = () => {
  const { formData, setFormData, file, setFile, postId, posts } = BlogContext();

  const post = postId ? posts.find((p) => p._id === postId) : null;

  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (postId) {
      try {
        window.location.replace(`/post/${postId}`);
        await axios.put(
          `http://localhost:5000/api/posts/update/${postId}`,
          formData
        );
      } catch (error) {
        console.log(error.message);
      }
    } else {
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
          setFile("");
          await axios.post("/posts/create", formData);
          window.location.replace("/");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Content>
        <h1>{postId ? "Update" : "Create"} Post</h1>
        <input
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          type="text"
          placeholder="Title"
          value={formData.title}
          name="title"
        />
        <textarea
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          name="description"
          value={formData.description}
          placeholder="Description..."
          cols="30"
          rows="10"
        ></textarea>
        <input
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          value={formData.tags}
          name="tags"
          type="text"
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
        <button>{postId ? "Update" : "Submit"}</button>
      </Content>
    </Form>
  );
};

export default Forms;

const Form = styled.form``;

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
    background-color: rgba(0, 0, 0, 0.5);
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
