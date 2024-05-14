import Article from "../Component/Article";
import Help from "../Component/Element/Help";
import Footer from "../Component/Footer";
import Jumbotron from "../Component/Jumbotron";
import Navigation from "../Component/Navigation";

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <Jumbotron />
      <Article />
      <Footer />
      <Help />
    </div>
  );
};

export default MainPage;
