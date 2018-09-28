import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Welcome to PATIPAT</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="https://www.facebook.com/patipat.pongpan"
                    target="_blank"
                  >
                    view profild 
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;