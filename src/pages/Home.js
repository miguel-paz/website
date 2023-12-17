import Banner from "../components/Home/Banner";
import ButtonList from "../components/Home/ButtonList";

const Home = () => {
  return (
    <div className="App">
      <div className="main">
        <div className="main-content">
          <Banner></Banner>
          <ButtonList></ButtonList>
        </div>
      </div>
    </div>
  );
};

export default Home;
