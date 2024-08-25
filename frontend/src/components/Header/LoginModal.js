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
  Input
} from "reactstrap";
import classnames from "classnames";

const LoginModal = ({ isOpen, toggle }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      centered
      size="md"
      className="rounded-modal"
    >
      <ModalHeader toggle={toggle} className="bg-success text-white">
        Login
      </ModalHeader>
      <ModalBody className="px-4 py-3">
        <Nav tabs className="justify-content-center">
          <NavItem className="w-50 text-center">
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => toggleTab("1")}
            >
              Sign In
            </NavLink>
          </NavItem>
          <NavItem className="w-50 text-center">
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => toggleTab("2")}
            >
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="mt-3">
          <TabPane tabId="1">
            <Form>
              <FormGroup>
                <Label for="signInEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="signInEmail"
                  placeholder="Email"
                />
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
            </Form>
          </TabPane>
          <TabPane tabId="2">
            <Form>
              <FormGroup>
                <Label for="signUpEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="signUpEmail"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="signUpPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="signUpPassword"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </FormGroup>
            </Form>
          </TabPane>
        </TabContent>
        <div className="mt-4 d-flex justify-content-between">
          {activeTab === "1" ? (
            <Button color="success" className="btn-sm mr-2">
              Sign In
            </Button>
          ) : (
            confirmPassword && password && confirmPassword === password ? (
              <Button color="success" className="btn-sm mr-2">
                Sign Up
              </Button>
            ) : (
              <Button color="success" className="btn-sm mr-2" disabled>
                Sign Up
              </Button>
            )
          )}
          <Button color="danger" onClick={toggle} className="btn-sm">
            Logout
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;