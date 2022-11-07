//import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate rating avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);

  let averRate = (average / feedback.length).toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averRate) ? 0 : averRate}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStats;
