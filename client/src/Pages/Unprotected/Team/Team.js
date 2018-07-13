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
                <div className="details">
                  <h2>
                    BrantCampodonico <br />
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
