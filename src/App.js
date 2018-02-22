import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class App extends Component {
  render() {
    const lists = ['Chelsea vs. Manu', 'Chelsea vs. Manu', 'Chelsea vs. Manu', 'Chelsea vs. Manu']
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="4" className="border">
              <div>
                <Form>
                  <FormGroup row>
                    <Label sm={5}>Select game</Label>
                    <Col sm={7}>
                      <i className="fa fa-search"></i>
                      <Input type="text" className="search" placeholder="search" size="sm" style={{paddingLeft: 30}}/>
                    </Col>
                  </FormGroup>
                </Form>
                <hr />
                { lists.map(function (list, index) {
                  return (
                    <div>
                      <h6 className="list" key={index}>{list}</h6>
                      <hr />
                    </div>
                  )
                })}
              </div>
            </Col>
            <Col sm="8">
              <div className="first-line">
                <Row>
                  <Col sm="6">
                    <div className="first-team"></div>
                    <div className="middle">Chelsea</div>
                  </Col>
                  <Col sm="6">
                    <div className="second-team"></div>
                    <div className="middle">ManU</div>
                  </Col>
                </Row>
              </div>
              <div className="second-line">
                <Row>
                  <Col sm="6">
                    <div className="under-team">
                      <h3>Chelsea</h3>
                      <Input type="text" />
                      <Button outline color="secondary" size="sm" className="manchester">Bet on Chelsea</Button>
                    </div>
                  </Col>
                  {/* <Col sm="2">
                    <div className="line"></div>
                  </Col> */}
                  <Col sm="6">
                    <div className="under-team">
                      <h3>Manchester</h3>
                      <Input type="text" />
                      <Button outline color="secondary" size="sm" size="sm" className="manchester">Bet on Manchester</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
