import { BsArrowRight } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const ArticleList = ({ image, title, paragraph }) => {
  return (
    <div className="article-list">
      <img src={image} alt={title} />
      <div className="right-article">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <span className="learn-more">
          <p>Learn More</p>
          <BsArrowRight />
        </span>
      </div>
    </div>
  );
};

export default ArticleList;
