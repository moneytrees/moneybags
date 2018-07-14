import React, { Component } from "react";
import "./team.css";
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

class Team extends Component {
  render() {
    // Names and positions:

    // Addis Casco: Brand Manager/Front-End
    // Sneha Dama: Brand Manager/Front-End
    // Molly Cougill: Flex-PM/Full-Stack
    // Caro Ramirez: Brand Manager/QA/QC
    // Natalie Hoben: PM/Front-End
    // Thais Cailet: Flex-Deployment Manager/Back-End
    // Chad Alessi: SCRUM Master/Full-Stack
    // Yuta Tamura: DBA/Back-End
    // Sergey Nikitin: Deployment Manager/Full-Stack
    // Wesley Jackson: DBA/Full-Stack
    // Brant Campodonico: DBA/Full-Stack
    // Ejeme Ogedengbe: SCRUM Master/QA/QC
    // Juhi Patel: SCRUM Master/QA/QC
    // Marilyn Blythe: DBA/Full-Stack
    // Vinanti Naik: Deployment Manager/Full-Stack
    // Rohan Menon: Feature Owner/Back-End
    // Will Abernathy: Flex-PM/Full-Stack
    // Chris Jones: Feature Owner/Back-End
    // David Vizena: Brand Manager/Front-End
    // Connor Thomas: Feature Owner/Full-Stack
    // Christian Ngo: QA/QC/Front-End

    return (
      <div>
        <div className="d-flex flex-row flex-wrap rowWrap">
          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={addis} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/addisstephaniecasco/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/addiscasco" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Addis Casco <br />
                    <span>Brand Manager/Front-End</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={brant} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/brantcampodonico/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/bmcampodonico" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Brant Cam <br />
                    <span>DBA/Full-Stack</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={caro} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/caroramirezc/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/rmzcaro" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Caro Ramirez <br />
                    <span>Brand Manager - QA/QC</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={natalie} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/natalie-hoben-48061545/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/nhoben" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Natalie Hoben <br />
                    <span>PM/Front-End</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={thais} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/thaisdecoded/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/thaiscmky" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Thais Cailet <br />
                    <span>Flex Deployment Manager/Back-End</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={chad} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/chad-j-alessi-b00a012/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/midstreamer" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Chad Alessi <br />
                    <span>SCRUM Master/Full-Stack</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={yuta} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/yuta-tamura-67453091/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/yutaatamura" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Yuta Tamura <br />
                    <span>DBA/Back-End</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={sergey} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sergey-nikitin-10791b85/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/sernikitin" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Sergey Nikitin <br />
                    <span>Deployment Manager/Full-Stack</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={wesley} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/wesley-jackson-6a842014a/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Rovch" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Wesley Jackson <br />
                    <span>DBA/Full-Stack</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={ejime} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ejeme-ogedengbe-995533157/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="hhttps://github.com/ejeme" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Ejeme Ogedengbe <br />
                    <span>SCRUM Master - QA/QC</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={juhi} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/juhipatel608/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/juhipatel608" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Juhi Patel <br />
                    <span>SCRUM Master - QA/QC</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={marilyn} />
                <ul className="socialIcons">
                  <li>
                    <a href="https://github.com/m-blythe" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Marilyn Blythe <br />
                    <span>DBA/Full-Stack</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={vinanti} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vinanti-naik-5167aa2a/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/vinantinaik" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>

                <div className="details">
                  <h2>
                    Vinanti Naik <br />
                    <span>Deployment Manager/Full-Stack</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={rohan} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rohanmenon222/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Rohan-Menon" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Rohan Menon <br />
                    <span>Feature Owner/Back-End</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={will} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/wabernathy96/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/wabernathy96" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Will Abernathy <br />
                    <span>Flex-PM/Full-Stack</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={chris} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/chris-jones-a876a2144/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/chrisjones0517" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Chris Jones <br />
                    <span>Feature Owner/Back-End</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={david} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/davidvizena/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/DavidVizena" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    David Vizena <br />
                    <span>Brand Manager/Front-End</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={connor} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/connor-thomas-731387b8/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/theconnorthomas"
                      target="_blank"
                    >
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Connor Thomas <br />
                    <span>Feature Owner/Full-Stack</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="box">
              <div className="imgBox">
                <img src={christian} />
                <ul className="socialIcons">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/christian-ngo/"
                      target="_blank"
                    >
                      <i class="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/cngo23" target="_blank">
                      <i class="fa fa-github" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                <div className="details">
                  <h2>
                    Christian Ngo <br />
                    <span>QA/QC Front-End</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Team;
