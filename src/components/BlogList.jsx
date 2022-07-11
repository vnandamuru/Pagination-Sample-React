import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useState } from "react";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [pageSize,setpageSize] = useState(15)
  const [currentPage,setcurrentPage] = useState(1)
  const [currentPaginationData,setcurrentPaginationData] = useState(blogs.posts.slice(0, 15))
  const updateRowsPerPage = (val) => {
    val = parseInt(val)
    setcurrentPage(1)
    setpageSize(val)
    setcurrentPaginationData(blogs.posts.slice(0, val))
  };
  const updatePage = (currentPage) => {
    const final = parseInt(blogs.posts.length/pageSize);
    if(currentPage >= 1 && currentPage <= final){
      setcurrentPage(currentPage)
      setcurrentPaginationData(blogs.posts.slice(pageSize*(currentPage-1), pageSize*currentPage))
    }
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
