import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddrList from "../components/AddrList";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { setPageCounts, setPageLink } from "../modules/Pagination";
import { setResults } from "../modules/Search";

function SearchContainer() {
  const { addrlist, page } = useSelector((state) => ({
    addrlist: state.search.data,
    page: state.pagination,
  }));
  const dispatch = useDispatch();

  const onSearch = (data) => dispatch(setResults(data));
  const setPage = (cp, total) => dispatch(setPageCounts(cp, total));
  const setLink = (link) => dispatch(setPageLink(link));

  return (
    <>
      <Search onSearch={onSearch} setPage={setPage} setLink={setLink} page={page} />
      <AddrList list={addrlist} />
      <Pagination page={page} />
    </>
  );
}

export default SearchContainer;
