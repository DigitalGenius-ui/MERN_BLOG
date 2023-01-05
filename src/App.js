import styled from "styled-components";
import Forms from "./components/Home/Forms/Forms";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Home/Navigation/Header"
import SinglePost from "./components/Home/Posts/SinglePost/SinglePost";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/addPost" element={ <Forms/>} />
          <Route path="/post/:id" element={ <SinglePost/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div``;
