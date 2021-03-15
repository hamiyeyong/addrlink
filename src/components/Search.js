import React from "react";
import { MdSearch } from "react-icons/md";
import "./Search.scss";

function Search() {
  return (
    <>
      <h1>영문 주소 변환</h1>
      <div className="Search">
        <input placeholder="주소입력" />
        <MdSearch className="icon" />
      </div>
    </>
  );
}

export default Search;
