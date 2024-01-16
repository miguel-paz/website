import Button from "../components/Home/Button";

const About = (props) => {
    const description =
    "I have a passion for learning, having created\n a variety of solutions from precision apiculture systems,\n to applications for institution management.";

  return (
    <div className="main">
      <div className="main-content">
        <div style={{ float: "right", margin: "70px" }}>
          <Button
            key="Back"
            text="Back"
            href="/"
            spotlight="bottom-light spotlight-right"
          ></Button>
        </div>
        <div className="banner">
          <div className="banner-title center-hor"></div>
          <div id="lamp">
            <div id="light" className="lamp center-hor">
              <div className="lamp-elipse center-hor"></div>
              <div className="major-light center-hor">
                <div className="major-light-container">
                  <div className="header">About</div>
                  <div className="description">{description}</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
