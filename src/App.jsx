import { Route } from "react-router-dom";
// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Components
// import Temp from "./components/temp";
// Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieHOC from "./HOC/Movie.HOC";

function App() {
  return (
    <>
      {/* <DefaultHOC path="/" exact component={Temp} /> */}
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
    </>
  );
}
export default App;