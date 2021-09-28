import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { Input, Space } from "antd";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const { Search } = Input;
  const [search, setSearch] = useState("cat");
  const [input, setInput] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/collections?page=${input}&limit=10&query=${search}&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`
    )
      .then((res) => res.json())
      .then((res) => setData(res.results));
  }, [input, search]);
  const onSearch = (value) => {
    setSearch(value);
  };
  return (
    <div className="App">
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      <div></div>
      {data.map((e) => {
        return (
          <img
            src={e.cover_photo.urls.small}
            alt="img"
            style={{ width: "100", height: "100px" }}
          />
        );
      })}
      <div/>
      <Pagination input={input} onChange={setInput} total={50} />
    </div>
  );
}

export default App;
