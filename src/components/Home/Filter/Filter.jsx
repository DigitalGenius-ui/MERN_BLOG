import React from "react";
import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const Filter = () => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Container>
      <FormControl sx={{ minWidth: 155 }} size="small">
        <InputLabel sx ={{fontSize : "1rem"}} id="demo-select-small">CATEGORIES</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={category}
          label="CATEGORIES"
          onChange={handleChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Nature">Nature</MenuItem>
          <MenuItem value="Blog">Blog</MenuItem>
          <MenuItem value="Post">Post</MenuItem>
        </Select>
      </FormControl>
      <h1 className="title">newest articles</h1>
      <div className="search-bar">
        <TextField
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15 } }}
          sx={{ minWidth: 250 }}
          label="search"
          size="small"
        />
      </div>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    margin: 2rem auto;

    h1{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1rem;
        letter-spacing: 2px;
    }
`;
