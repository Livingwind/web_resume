import React, {Component} from 'react'
import { Container, Jumbotron, Row, Col } from 'reactstrap'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      window_width: window.innerWidth
    };

    this.windowSizeChange = this.windowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.windowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.windowSizeChange);
  }
  windowSizeChange() {
    this.setState({window_width:window.innerWidth});
  }

  render() {
    const width = this.state.window_width;

    return (
      <Container>
        <Jumbotron className='text-center'>
          <h4>Christopher William Westerman</h4>
          <h5>Phone: (970)237-0725 - Email: Westerman.Christopher@gmail.com</h5>
          <a href={"https://github.com/Livingwind/"}>https://github.com/Livingwind</a>
        </Jumbotron>
        <Row>
          <Col md={12} lg={12}>
            <Education/>
          </Col>
          <Col className={width > 768 ? "pr-0":""} md={12} lg={6}>
            <Experience/>
          </Col>
          <Col className={width > 768 ? "pl-0":""} md={12} lg={6}>
            <Skills/>
          </Col>
        </Row>
      </Container>
    );
  }
}
