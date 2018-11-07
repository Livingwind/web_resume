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
    const sm_break = (seperator) => {return width < 768 ? <br/> : seperator};

    return (
      <Container>
        <Jumbotron className='text-center'>
          <h4>Christopher William Westerman</h4>
          <h5 style={width < 550 ? {fontSize:'5vw'}:{}}>
            Phone: (970)237-0725{sm_break(' - ')}Email: Westerman.Christopher@gmail.com
          </h5>
          <a href={"https://github.com/Livingwind/"}>https://github.com/Livingwind</a>
        </Jumbotron>
        <Row>
          <Col md={12} lg={12}>
            <Education width={width}/>
          </Col>
          <Col className={(width > 991 ? "pr-0":"")} md={12} lg={6}>
            <Experience width={width}/>
          </Col>
          <Col className={(width > 991 ? "pl-0":"")} md={12} lg={6}>
            <Skills width={width}/>
          </Col>
        </Row>
      </Container>
    );
  }
}
