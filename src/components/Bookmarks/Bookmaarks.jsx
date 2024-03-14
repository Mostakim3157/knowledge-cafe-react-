import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3 m-4 bg-gray-200 rounded-3xl mt-10">
      <div>
        <h3 className="text-4xl">Reading time: {readingTime}</h3>
      </div>
      <h2 className="text-2xl font-bold text-center pt-4">
        Bookmarked Blogs: {bookMarks.length}
      </h2>
      {bookMarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
