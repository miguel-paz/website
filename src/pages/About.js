import Button from "../components/Home/Button";
import AboutList from "../components/About/AboutList";

const About = (props) => {
  const description =
    "I have a passion for learning, having created\n a variety of solutions from precision apiculture systems,\n to applications for institution management.";

  const about = [
    {
      name: "Work Experience",
      description: "",
      image: "hivekind_apiary.jpg",
      contents: [
        {
          date: "May 2023 - Present",
          institution: "- University of Aveiro (DEM)",
          jobTitle: "Research Fellow",
          description:
            "Design and development of eBike embedded control and monitoring systems, from its electrical circuit to the user interface.",
          techs: [
            "react_icon.png",
            "python_icon.png",
            "postgresql_icon.png",
            "arduino_icon.png",
          ],
        },
        {
          date: "May 2022 - Nov 2022",
          institution: "- University of Aveiro (IEETA)",
          jobTitle: "Research Fellow",
          description:
            "Reworking and development of algorithms for outdoors navigation of an autonomous wheelchair.",
          techs: ["python_icon.png", "ros_icon.png", "opencv_icon.png"],
        },
        {
          date: "Feb 2020 - Dec 2021",
          institution: "- Zenithwings, Lda (Ubiwhere)",
          jobTitle: "Software Developer",
          description:
            "Revision, design and development of a university's academic portal and associated services, in both frontend and backend related tasks, for student and staff management, successfully assisting over 15.000 users with university related procedures.",
          techs: [
            "aws_icon.png",
            "docker_icon.png",
            "wso2_icon.png",
            "django_icon.png",
            "python_icon.png",
            "c_icon.png",
            "netcore_icon.png",
            "mss_icon.png",
          ],
        },
        {
          date: "July 2019 - Jan 2020",
          institution: "- University of Aveiro (IEETA)",
          jobTitle: "Research Fellow",
          description:
            "Technical requirement research and prototype design of multiple university related platforms.",
          techs: [
            "webqda_icon_small.png",
            "python_icon.png",
            "c_icon.png",
            "netcore_icon.png",
            "mss_icon.png",
          ],
        },
      ],
    },
    {
      name: "Skills",
      description: "",
      image: "amica_2.png",
      contents: [
        {
          title: "Back End",
          techs: [
            "python_icon.png",
            "c_icon.png",
            "java_icon.png",
            "postgresql_icon.png",
            "mss_icon.png",
          ],
        },
        {
          title: "Front End",
          techs: [
            "react_icon.png",
            "js_icon.png",
            "html_icon.png",
            "css_icon.png",
          ],
        },
        {
          title: "Miscellaneous",
          techs: [
            "aws_icon.png",
            "docker_icon.png",
            "django_icon.png",
            "arduino_icon.png",
            "ros_icon.png",
            "git_icon.png",
            "netcore_icon.png",
            "wso2_icon.png",
          ],
        },
      ],
    },
    {
      name: "Education",
      description:
        "​",
      image: "amica_2.png",
      contents: [
        {
          date: "2021 - 2023",
          institution: "University of Aveiro",
          jobTitle: "MSc in Robotics and Intelligent Systems.",
        },
        {
          date: "2015 - 2021",
          institution: "University of Aveiro",
          jobTitle: "MSc and BSc in Computer and Telematics Engineering.",
        },
      ],
    },
  ];

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
                  <AboutList about={about}></AboutList>
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
