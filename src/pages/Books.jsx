import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Pagination } from "antd";
import { useGlobalContext } from "../context/context";

import getApiData from "../api-service/getdataApi";
import Book from "../components/Book";
import { AlipaySquareFilled } from "@ant-design/icons";

export default function Books() {
  // State to store the fetched books
  const { books, page, setPage, totalBooks, limit, fetchBooks } =
    useGlobalContext();

  useEffect(() => {
    // Call the fetchBooks function when the component mounts
    fetchBooks(page);
  }, [totalBooks, page]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  console.log("tempbooks", books);
  return (
    <div className="list-wrapper">
      <h2>Books</h2>
      {books?.map((item) => (
        <div className="list-item">
          <div className="avatar">
            <Avatar
              icon={<AlipaySquareFilled />}
              style={{
                backgroundColor: "#c9e5fd",
                color: "#1677ff",
              }}
            />
          </div>
          <Link to={`/books/${item._id}`} style={{ display: "block" }}>
            <span>{item.name}</span>
          </Link>
        </div>
      ))}
      <div className="pagination">
        <Pagination
          current={page}
          pageSize={limit}
          total={totalBooks}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
