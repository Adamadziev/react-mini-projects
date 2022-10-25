import React from "react";

export const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const totalPages = [];
  for (let i = 1; i <= pages; i++) {
    totalPages.push(i);
  }

  return (
    <ul className="pagination">
      {totalPages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "active" : null}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};
