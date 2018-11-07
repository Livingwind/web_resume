import React, {Component} from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import './columns.css'

export default class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const width = this.props.width;
   return (
     <Card>
       <CardHeader><b>Education</b></CardHeader>
       <CardBody>
         <b>Colorado State University - Fort Collins, CO</b><br/>
         <b>Bachelor of Science in Computer Science,</b> est. Dec 2018<br/>
         <b>Cumulative GPA:</b> 3.1/4.0 <br/>
         <ul>
           <li>Team based assignments including:</li>
           <ul>
             <li>Raspberry PI integrated Kinect Platformer using self-implemented
             computer vision algorithms and OpenGL</li>
             <li>Scrum-based web development project in Java Spark and ReactJS</li>
           </ul>
           <li>UTA for the 300 level Software Engineering course</li>
           <li>Developed a P2P network overlay to route messages over
             a distribution of machines</li>
           <li>Constructed data visualizations for global political climates in
             Apache Spark using ~10 million records of the GDELT event database</li>
           <li>Utilized OpenMP, Cuda, and MPI to parallelize various C programs</li>
           <li>Privately worked on developing a TCP server in C++17 and Boost ASIO</li>
         </ul>
         Relevant Coursework:
         <ul className={width < 768 ? '':'col2'}>
           <li>Software Development (C++)</li>
           <li>Operating Systems (Java, C, C++)</li>
           <li>Computer Organization (Assembly, C)</li>
           <li>Algorithms I (Java)</li>
           <li>Algorithms II (Python)</li>
           <li>Analysis of Algorithms</li>
           <li>Linear Algebra</li>
           <li>Object-Oriented Problem Solving (Java)</li>
           <li>Software Engineering (Java/JS)</li>
           <li>Object Oriented Design (Java)</li>
           <li>Distributed Systems (Java)</li>
           <li>Parallel Computing (C)</li>
         </ul>
       </CardBody>
     </Card>
   );
  }
}