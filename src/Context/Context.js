import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const CreateBlogContext = createContext();

const Context = (props) => {
  // upload files
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: [],
    imageFile: "",
  });
  const [file, setFile] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postId, setPostId] = useState("");
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("auth"))
  );

  useEffect(() => {
    const fetchAllPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/posts");
        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <CreateBlogContext.Provider
      value={{
        formData,
        setFormData,
        file,
        setFile,
        posts,
        setPosts,
        loading,
        setLoading,
        postId,
        setPostId,
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </CreateBlogContext.Provider>
  );
};

export default Context;

export const BlogContext = () => useContext(CreateBlogContext);
