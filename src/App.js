// import { v4 as uuidv4 } from "uuid";
// import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
// import FeedbackData from "./components/data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // const feedbackDelete = (feedbackId) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedback(feedback.filter((item) => item.id !== feedbackId));
  //   }
  // };

  // const addFeedbackHandler = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   console.log(newFeedback);
  //   setFeedback([...feedback, newFeedback]);
  // };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Route path="/" exact>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            <AboutIconLink />
          </Route>

          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

// JSX 코드 없이 js 코드로만 쓰는 방법
// JSX로 쓰자
// React.createElement(
//   "div",
//   { className: "container" },
//   React.createElement("h1", {}, "My App")
// );
