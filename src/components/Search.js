import React, { useState } from "react";
import axios from "axios";
import { MdSearch } from "react-icons/md";
import "./Search.scss";

function Search({ onSearch }) {
  const apikey = process.env.REACT_APP_ADDR_KEY;
  const searchLink = `https://www.juso.go.kr/addrlink/addrLinkApi.do?resultType=json&currentPage=1&countPerPage=10&confmKey=${apikey}&keyword=`;
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    const searchAddr = async () => {
      try {
        const response = await axios.get(searchLink + text);
        const jusos = response.data.results.juso || [];
        onSearch(jusos);
      } catch (e) {
        console.log("@@ERROR");
        console.log(e);
      }
    };
    searchAddr();
  };

  return (
    <>
      <h1>영문 주소 변환</h1>
      <form onSubmit={onSubmit}>
        <div className="Search">
          <input name="text" placeholder="주소입력" onChange={onChange} vlue={text} />
          <MdSearch className="icon" onClick={onSubmit} />
        </div>
      </form>
    </>
  );
}

export default React.memo(Search);
