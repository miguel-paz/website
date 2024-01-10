import Banner from "../components/Home/Banner";
import ButtonList from "../components/Home/ButtonList";

const Home = () => {
  return (
    <div className="App">
      <div className="main">
        <div className="main-content">
          <Banner movableLight={true}></Banner>
          <ButtonList
            buttons={[
              {
                text: "Projects",
                href: "/projects",
                spotlight: "bottom-light spotlight-left",
              },
              {
                text: "About Me",
                href: "/about",
                spotlight: "bottom-light spotlight-right",
              },
            ]}
          ></ButtonList>
        </div>
      </div>
    </div>
  );
};

export default Home;
