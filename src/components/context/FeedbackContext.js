import { createContext, useState, useEffect } from "react";

//import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext({
  feed: [],
  deleteFeed: (feedbackId) => {},
  addFeed: (newFeed) => {},
  editFeed: (item) => {},
  upFeed: (id, item) => {},
  feedbackEdit: {},
});

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedbak();
  }, []);

  const fetchFeedbak = async () => {
    const res = await fetch("/feedback?_sort=id&_order=desc");
    const data = await res.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const feedbackDelete = async (feedbackId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const res = await fetch(`/feedback/${feedbackId}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((item) => item.id !== feedbackId));
    }
  };

  const addFeedbackHandler = async (newFeedback) => {
    const res = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    // newFeedback.id = uuidv4();
    const data = await res.json();
    setFeedback([data, ...feedback]);
  };

  const updateFeedback = async (id, updItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await res.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const value = {
    feedback,
    isLoading,
    deleteFeed: feedbackDelete,
    addFeed: addFeedbackHandler,
    editFeed: editFeedback,
    upFeed: updateFeedback,
    feedbackEdit,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
