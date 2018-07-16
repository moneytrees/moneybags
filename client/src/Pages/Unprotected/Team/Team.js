import React, { Component } from "react";
import "./team.css";
import Footer from "../../../components/Footer"
import addis from "../../../imgs/teamPotraits/addis.jpg";
import brant from "../../../imgs/teamPotraits/brant.jpg";
import caro from "../../../imgs/teamPotraits/caro.jpg";
import chad from "../../../imgs/teamPotraits/chad.jpg";
import chris from "../../../imgs/teamPotraits/chris.jpg";
import connor from "../../../imgs/teamPotraits/connor.jpg";
import david from "../../../imgs/teamPotraits/david.jpg";
import ejime from "../../../imgs/teamPotraits/ejime.jpg";
import juhi from "../../../imgs/teamPotraits/juhi.jpg";
import marilyn from "../../../imgs/teamPotraits/marilyn.jpg";
import molly from "../../../imgs/teamPotraits/molly.jpg";
import natalie from "../../../imgs/teamPotraits/natalie.jpg";
import rohan from "../../../imgs/teamPotraits/rohan.jpg";
import sneha from "../../../imgs/teamPotraits/sneha.jpg";
import thais from "../../../imgs/teamPotraits/thais.jpg";
import vinanti from "../../../imgs/teamPotraits/vinanti.jpg";
import wesley from "../../../imgs/teamPotraits/wesley.jpg";
import will from "../../../imgs/teamPotraits/will.jpg";
import yuta from "../../../imgs/teamPotraits/yuta.jpg";
import sergey from "../../../imgs/teamPotraits/sergey.jpg";
import christian from "../../../imgs/teamPotraits/christian.jpg";

const team = [
  {
    name: "Addis Casco",
    github: "https://github.com/addiscasco",
    linkedin: "https://www.linkedin.com/in/addisstephaniecasco/",
    picture: addis,
    title: "Brand Manager/Front-End"
  },
  {
    name: "Brant Cam",
    github: "https://github.com/bmcampodonico",
    linkedin: "https://www.linkedin.com/in/brantcampodonico/",
    picture: brant,
    title: "DBA/Full-Stack"
  },
  {
    name: "Caro Ramirez",
    github: "https://github.com/rmzcaro",
    linkedin: "https://www.linkedin.com/in/caroramirezc/",
    picture: caro,
    title: "Brand Manager - QA/QC"
  },
  {
    name: "Sneha Dama",
    github: "https://github.com/sneha3103",
    linkedin: "https://www.linkedin.com/in/snehadama/",
    picture: sneha,
    title: "Brand Manager/Front-End"
  },
  {
    name: "Natalie Hoben",
    github: "https://github.com/nhoben",
    linkedin: "https://www.linkedin.com/in/natalie-hoben-48061545/",
    picture: natalie,
    title: "PM/Front-End"
  },
  {
    name: "Thais Cailet",
    github: "https://github.com/thaiscmky",
    linkedin: "https://www.linkedin.com/in/thaisdecoded/",
    picture: thais,
    title: "Flex Deployment Manager/Back-End"
  },
  {
    name: "Chad Alessi",
    github: "https://github.com/midstreamer",
    linkedin: "https://www.linkedin.com/in/chad-j-alessi-b00a012/",
    picture: chad,
    title: "SCRUM Master/Full-Stack"
  },
  {
    name: "Yuta Tamura",
    github: "https://github.com/yutaatamura",
    linkedin: "https://www.linkedin.com/in/yuta-tamura-67453091/",
    picture: yuta,
    title: "DBA/Back-End"
  },
  {
    name: "Molly Cougill",
    github: "https://github.com/mcougill",
    linkedin: "https://www.linkedin.com/in/mcougill/",
    picture: molly,
    title: "Flex-PM/Full-Stack"
  },
  {
    name: "Sergey Nikitin",
    github: "https://github.com/sernikitin",
    linkedin: "https://www.linkedin.com/in/sergey-nikitin-10791b85/",
    picture: sergey,
    title: "Deployment Manager/Full-Stack"
  },
  {
    name: "Wesley Jackson",
    github: "https://github.com/Rovch",
    linkedin: "https://www.linkedin.com/in/wesley-jackson-6a842014a/",
    picture: wesley,
    title: "DBA/Full-Stack"
  },
  {
    name: "Ejeme Ogedengbe",
    github: "https://github.com/ejeme",
    linkedin: "https://www.linkedin.com/in/ejeme-ogedengbe-995533157/",
    picture: ejime,
    title: "SCRUM Master - QA/QC"
  },
  {
    name: "Juhi Patel",
    github: "https://github.com/juhipatel608",
    linkedin: "https://www.linkedin.com/in/juhipatel608/",
    picture: juhi,
    title: "SCRUM Master - QA/QC"
  },
  {
    name: "Marilyn Blythe",
    github: "https://github.com/m-blythe",
    linkedin: "www.linkedin.com/in/marilyn-blythe-6a5999166",
    picture: marilyn,
    title: "Deployment Manager/Full-Stack"
  },
  {
    name: "Vinanti Naik",
    github: "https://github.com/vinantinaik",
    linkedin: "https://www.linkedin.com/in/vinanti-naik-5167aa2a/",
    picture: vinanti,
    title: "Deployment Manager/Full-Stack"
  },
  {
    name: "Rohan Menon",
    github: "https://github.com/Rohan-Menon",
    linkedin: "https://www.linkedin.com/in/rohanmenon222/",
    picture: rohan,
    title: "Feature Owner/Back-End"
  },
  {
    name: "Will Abernathy",
    github: "https://github.com/wabernathy96",
    linkedin: "https://www.linkedin.com/in/wabernathy96/",
    picture: will,
    title: "Flex-PM/Full-Stack"
  },
  {
    name: "Chris Jones",
    github: "https://github.com/chrisjones0517",
    linkedin: "https://www.linkedin.com/in/chris-jones-a876a2144/",
    picture: chris,
    title: "Feature Owner/Back-End"
  },
  {
    name: "David Vizena",
    github: "https://github.com/DavidVizena",
    linkedin: "https://www.linkedin.com/in/davidvizena/",
    picture: david,
    title: "Brand Manager/Front-End"
  },
  {
    name: "Connor Thomas",
    github: "https://github.com/theconnorthomas",
    linkedin: "https://www.linkedin.com/in/connor-thomas-731387b8/",
    picture: connor,
    title: "Feature Owner/Full-Stack"
  },
  {
    name: "Christian Ngo",
    github: "https://github.com/cngo23",
    linkedin: "https://www.linkedin.com/in/christian-ngo/",
    picture: christian,
    title: "QA/QC Front-End"
  }
];

class Team extends Component {
  render() {
    return (
      <div className="team">
        <div className="d-flex flex-row flex-wrap rowWrap">
          {team.map(team => (
            <div className="wrapperTeam">
              <div className="box">
                <div className="imgBox">
                  <img className="teamPic" src={team.picture} alt={team.name} />
                  <ul className="socialIcons">
                    <li className="liTeam">
                      <a className="aTeam" href={team.linkedin} target="_blank">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="liTeam">
                      <a className="aTeam" href={team.github} target="_blank">
                        <i className="fa fa-github" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                  <div className="details">
                    <h2 className="h2Team">
                      {team.name} <br />
                      <span>{team.title}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Team;
