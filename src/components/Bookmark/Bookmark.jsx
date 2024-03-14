import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {

    const {title} = bookmark

    return (
        <div className="rounded-3xl bg-white p-4 m-4">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
  };
export default Bookmark;