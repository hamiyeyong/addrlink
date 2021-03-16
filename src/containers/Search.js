import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddrList from "../components/AddrList";
import Search from "../components/Search";
import { setResults } from "../modules/Search";

function SearchContainer() {
  const addrlist = useSelector((state) => state.search.data);
  const dispatch = useDispatch();

  const onSearch = (data) => dispatch(setResults(data));

  return (
    <>
      <Search onSearch={onSearch} />
      <AddrList list={addrlist} />
    </>
  );
}

export default SearchContainer;
