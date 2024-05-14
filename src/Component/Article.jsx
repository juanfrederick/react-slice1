import ArticleList from "./Element/ArticleList";
import { article } from "../data";

const Article = () => {
  return (
    <div className="article-container">
      {article.map((val, index) => {
        return <ArticleList {...val} key={index} />;
      })}
    </div>
  );
};

export default Article;
