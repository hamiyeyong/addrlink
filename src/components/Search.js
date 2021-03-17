import React, { useState } from "react";
import axios from "axios";
import { MdSearch } from "react-icons/md";
import "./Search.scss";

function Search({ onSearch, setPage, setLink, page }) {
  const apikey = process.env.REACT_APP_ADDR_KEY;
  const searchBaseLink = `https://www.juso.go.kr/addrlink/addrLinkApi.do?resultType=json&countPerPage=20&confmKey=${apikey}&keyword=`;
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    const searchAddr = async () => {
      try {
        const searchLink = searchBaseLink + text + "&currentPage=";
        const response = await axios.get(searchLink + 1);
        const data = response.data.results;
        const jusos = data.juso || [];
        // 검색 결과 셋팅
        onSearch(jusos);
        // page에 사용될 정보 셋팅
        setPage(data.common.currentPage, data.common.totalCount);
        setLink(searchLink);
        console.log(response.data.results);
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
