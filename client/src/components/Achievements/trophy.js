// import React, { Component } from "react";
// import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CardTitle, CardText, Card, Row, Col } from 'reactstrap';
// import classnames from 'classnames';
// import Achievements from "../../components/UserDashboard/Achievements";


// export default class AchieveCard extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       activeTab: '1'
//     };
//   }

//   toggle(tab) {
//     if (this.state.activeTab !== tab) {
//       this.setState({
//         activeTab: tab
//       });
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Nav tabs>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '1' })}
//               onClick={() => { this.toggle('1'); }}
//             >
//               Tab1
//               </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '2' })}
//               onClick={() => { this.toggle('2'); }}
//             >
//               Moar Tabs
//               </NavLink>
//           </NavItem>
//         </Nav>
//         <TabContent activeTab={this.state.activeTab}>
//           <TabPane tabId="1">
//             <Row>
//               <Col sm="12">

//                 <Achievements />


//               </Col>
//             </Row>
//           </TabPane>
//           <TabPane tabId="2">
//             <Row>
//               <Col sm="8">
//                 <Card body>
//                   <CardTitle>TEST</CardTitle>
//                   <CardText><Achievements/></CardText>
                  
//                 </Card>
//               </Col>
//             </Row>
//           </TabPane>
//         </TabContent>
//       </div>
//     );
//   }
// }