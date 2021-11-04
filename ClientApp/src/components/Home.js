import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap"; //this line here is the solution.

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Form>
          <Row form>
            <Col md={5}>
              <FormGroup>
                <Label for="UserEmail">Email</Label>
                <Input
                  id="UserEmail"
                  name="email"
                  placeholder="Email address"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={5}>
              <FormGroup>
                <Label for="UserPassword">Password</Label>
                <Input
                  id="UserPassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Sign in</Button>
        </Form>
      </div>
    );
  }
}
