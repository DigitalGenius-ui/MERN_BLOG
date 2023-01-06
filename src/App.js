import styled from "styled-components";
import Forms from "./components/Home/Forms/Forms";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Home/Navigation/Header";
import SinglePost from "./components/Home/Posts/SinglePost/SinglePost";
import Footer from "./components/Home/Footer/Footer";
import { BlogContext } from "./Context/Context";
import Auth from "./components/Auth/Auth";

function App() {
  const { isAuth, setIsAuth } = BlogContext();

  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuth && <Route path="/addPost" element={<Forms />} />}
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to={isAuth ? "/" : "/auth"}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div``;
