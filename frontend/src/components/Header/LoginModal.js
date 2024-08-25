import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import classnames from "classnames";

const LoginModal = ({ isOpen, toggle }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Login</ModalHeader>
      <ModalBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => toggleTab("1")}
            >
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => toggleTab("2")}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Form>
              <FormGroup>
                <Label for="signInEmail">Email</Label>
                <Input type="email" name="email" id="signInEmail" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="signInPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="signInPassword"
                  placeholder="Password"
                />
              </FormGroup>
              <Button color="primary">Sign In</Button>
            </Form>
          </TabPane>
          <TabPane tabId="2">
            <Form>
              <FormGroup>
                <Label for="signUpEmail">Email</Label>
                <Input type="email" name="email" id="signUpEmail" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="signUpPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="signUpPassword"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
              </FormGroup>
              <Button color="primary">Sign Up</Button>
            </Form>
          </TabPane>
        </TabContent>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;
