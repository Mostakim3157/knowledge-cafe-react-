import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog handleBookMark={handleBookMark} key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookMark: PropTypes.function,
};
export default Blogs;
