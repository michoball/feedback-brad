import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeed, editFeed } = useContext(FeedbackContext);

  const handleDelete = (id) => {
    deleteFeed(id);
  };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <button
        onClick={() => {
          editFeed(item);
        }}
        className="edit"
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
