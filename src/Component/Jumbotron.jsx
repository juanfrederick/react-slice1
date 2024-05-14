import { BsArrowRight } from "react-icons/bs";

const Jumbotron = () => {
  return (
    <div className="jumbotron-container">
      <h1>How can we help?</h1>
      <div className="jumbotron-input-container">
        <input type="text" placeholder="Search" />
        <BsArrowRight className="arrow-right" />
      </div>
    </div>
  );
};

export default Jumbotron;
