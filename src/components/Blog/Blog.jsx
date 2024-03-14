import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const {
    author,
    title,
    cover,
    author_img,
    reading_time,
    post_date,
    hashtags,
  } = blog;
  return (
    <div className="py-12">
      <img
        className="rounded-3xl"
        src={cover}
        alt={`cover picture of the ${title}`}
      />
      <div className="flex justify-between items-center pt-8 pb-4">
        <div className="flex gap-4 items-center">
          <img className="w-16 " src={author_img} alt="" />
          <div>
            <h3 className="text-3xl font-bold">{author}</h3>
            <p className="text-gray-400 text-lg">{post_date}</p>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-2xl pr-">{reading_time}</span>
          <button
            onClick={() => handleBookMark(blog)}
            className="ml-2 text-4xl"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-5xl py-2 font-bold">{title}</h2>
      <p className="py-4">
        {hashtags.map((hash, id) => (
          <span key={id}>
            <a href="" className=" pr-8 text-2xl text-gray-500">
              #{hash}
            </a>
          </span>
        ))}
      </p>

      <p className="pt-4 text-blue-500 text-2xl">
        <button onClick={() => handleMarkAsRead(reading_time)}>
          <u>Read more</u>
        </button>
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMark: PropTypes.function,
  handleMarkAsRead: PropTypes.function,
};

export default Blog;
