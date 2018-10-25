import React, {Component} from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const width = this.props.width;
    const sm_break = (seperator) => {return width < 768 ? <br/> : seperator};
    return (
      <Card>
        <CardHeader><b>Experience</b></CardHeader>
        <CardBody>
          Echostar - Cheyenne, WY<br/>
          <b>Software engineering Intern</b> {sm_break(' - ')}June - August 2017<br/>
          <ul>
            <li>Developed an alternative to legacy networking software in Python</li>
            <li>Created an Active Directory front-end web page for internal use</li>
          </ul>
          Colorado State University{sm_break(' - ')}Fort Collins, CO<br/>
          <b>Software Engineering UTA</b>{sm_break(', ')}Jan - Dec 2018
          <ul>
            <li>Developed infrastructure for students to expand upon over the duration of the course</li>
            <li>Assisted students with learning the design principles surrounding the Agile (Scrum)
              development methodology</li>
            <li>Handled the integration of communication system (Slack) and version control (GitHub)
              for each team</li>
          </ul>
        </CardBody>
      </Card>
    );
  }
}