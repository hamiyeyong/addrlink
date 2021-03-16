import React, { useState, useReducer } from "react";
import axios from "axios";
import search, { SET_SEARCH_DATA } from "../modules/Search";
import { MdSearch } from "react-icons/md";
import "./Search.scss";

function Search() {
  const apikey = process.env.REACT_APP_ADDR_KEY;
  const searchLink = `https://www.juso.go.kr/addrlink/addrLinkApi.do?resultType=json&currentPage=1&countPerPage=10&confmKey=${apikey}&keyword=`;
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(search, {
    data: {},
  });

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    const searchAddr = async () => {
      try {
        const response = await axios.get(searchLink + text);
        dispatch({ type: SET_SEARCH_DATA, data: response.data.results });
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
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </>
  );
}

export default React.memo(Search);
