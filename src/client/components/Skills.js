import React, {Component} from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'

export default class Skills extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const width = this.props.width;
    return (
      <Card>
        <CardHeader><b>Skills</b></CardHeader>
        <CardBody>
          <b>Languages:</b>
          <ul className={"col2"}>
            <li>C</li>
            <li>Modern C++</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
          <b>Utilities:</b>
          <ul className={width < 768 ? 'col2' : 'col3'}>
            <li>Git</li>
            <li>DockerIO</li>
            <li>Jira/Zenhub</li>
            <li>C++ Boost</li>
            <li>Apache Spark/Storm</li>
            <li>CMake</li>
            <li>Unix Terminal</li>
            <li>ReactJS</li>
            <li>Hadoop</li>
            <li>Cuda</li>
            <li>OpenMP</li>
            <li>MPI</li>
          </ul>
        </CardBody>
      </Card>
    );
  }
}