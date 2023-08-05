import React, { useContext } from "react";
import classes from "../styles/AboutMePage.module.css";
import { useNightModeContext } from "../context/nightModeContext";
import { Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Chart from "../components/Chart";
import { certificates } from "../assets/certificates";
const AboutMePage = () => {
  const { color, backgroundColor, nightMode } = useNightModeContext();
  return (
    <div
      className={classes.fullscreen}
      style={{
        color: color,
        backgroundColor: backgroundColor,
      }}
    >
      <div className={classes.left}>
        <div
          className={classes.summary}
          style={nightMode ? { backgroundColor: "rgba(85,95,80,0.4)" } : null}
        >
          <Heading as="h1" size="2xl" p="1rem" textAlign="center">
            Amir Haghighi
          </Heading>
          <img
            src={require("../images/me3.jpg")}
            className={classes.avatar}
          ></img>
          <table className={classes.table}>
            <tbody>
              <tr>
                <th>Age</th>
                <td>28</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>male</td>
              </tr>
              <tr>
                <th>Occupation</th>
                <td>student</td>
              </tr>
              <tr>
                <th>marital status</th>
                <td>single</td>
              </tr>
              <tr>
                <th>work Experince </th>
                <td> none </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={classes.bio}
          style={nightMode ? { backgroundColor: "rgba(85,95,80,0.4)" } : null}
        >
          <p>
            <FontAwesomeIcon icon={faQuoteLeft} /> "Front end developer who
            writes clean , elegant and efficient code. "
          </p>
        </div>
      </div>

      <div
        className={classes.skills}
        style={nightMode ? { backgroundColor: "rgba(185,190,180,.4)" } : null}
      >
        <div style={{ height: "600px" }}>
          <Chart
            style={{ border: "3px solid red" }}
            color={nightMode ? "white" : null}
          />
        </div>
      </div>

      <div
        className={classes.certificates}
        style={nightMode ? { backgroundColor: "rgba(85,95,80,.4)" } : null}
      >
        <Heading as="h2" size={"lg"} p="2rem">
          Certificates
        </Heading>
        <div className={classes.img}>
          {certificates.map((cert, i) => {
            return (
              <a href={cert.linkUrl} target="_blank" key={cert.name}>
                <img src={cert.imgUrl} alt={cert.name} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AboutMePage;
