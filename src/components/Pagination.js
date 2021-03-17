import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.scss";

function Pagination({ page }) {
  const pageNumbers = [];
  // 마지막 페이지 설정
  let lastPageNumber = page.total / page.countPerPage;
  if (lastPageNumber < 1) lastPageNumber = page.total == 0 ? page.total : 1;

  // 현재 페이지 validation
  if (page.currentPage <= 0) return <></>;
  if (page.currentPage > lastPageNumber) page.currentPage = lastPageNumber;

  // 시작페이지 설정
  const half = page.countPerPage / 2;
  let startNumber = 1;
  if (page.currentPage - half > 0) {
    startNumber = page.currentPage - half;
  }
  for (let i = startNumber; i < startNumber + page.countPerPage; i++) {
    if (lastPageNumber < i) {
      let number = startNumber - (i - lastPageNumber);
      if (number < 1) continue;
      pageNumbers.unshift(startNumber - (i - lastPageNumber));
      continue;
    }
    pageNumbers.push(i);
  }

  console.log(page);

  return (
    <div className="pagination">
      <Link to={page.link + "first"}>{"<"}</Link>
      {pageNumbers.map((number) => (
        <Link key={page.link + number} to={page.link + number} className={page.currentPage === number ? "active" : ""}>
          {number}
        </Link>
      ))}
      <Link to={page.link + "last"}>{">"}</Link>
    </div>
  );
}

export default Pagination;
