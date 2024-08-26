import React, { useState } from "react";
import {
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
  Spinner,
} from "reactstrap";
import axios from "axios";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/login", { email, password });
      console.log("Login successful", response.data);
    } catch (error) {
      console.error("Login error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/register", { email, password });
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/forgot-password", { email });
      console.log("Password reset email sent", response.data);
    } catch (error) {
      console.error("Forgot password error", error);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const pageStyle = {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
  };

  const iconStyle = {
    fontSize: '2.5rem', // Adjust icon size as needed
    marginRight: '10px',
    color: '#17bf9e', // Updated icon color
  };

  const textStyle = {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  };

  const tabLinkStyle = {
    fontWeight: '600',
    transition: 'color 0.3s ease-in-out',
    color: '#343a40',
  };

  const activeTabStyle = {
    color: '#007bff',
    borderBottom: '3px solid #007bff',
  };

  const formContainerStyle = {
    maxWidth: '450px',
    width: '100%',
    background: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  };

  const formGroupStyle = {
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    color: '#495057',
    fontWeight: '500',
    marginBottom: '0.5rem',
  };

  const inputGroupStyle = {
    position: 'relative',
  };

  const inputStyle = {
    borderRadius: '5px',
    borderColor: '#ced4da',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  };

  const buttonStyle = {
    borderRadius: '50px',
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderColor: '#007bff',
    color: '#fff',
    backgroundColor: '#007bff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyleHover = {
    backgroundColor: '#0056b3',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  };

  const eyeIconStyle = {
    cursor: 'pointer',
    color: '#343a40', // Dark color for eye icons
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <i className="ri-pantone-line" style={iconStyle}></i>
        <span style={textStyle}>Technerds</span>
      </div>
      <div style={formContainerStyle}>
        <Nav tabs className="justify-content-center">
          <NavItem className="w-33 text-center">
            <NavLink
              style={{ ...tabLinkStyle, ...(activeTab === "1" ? activeTabStyle : {}) }}
              onClick={() => toggleTab("1")}
            >
              Sign In
            </NavLink>
          </NavItem>
          <NavItem className="w-33 text-center">
            <NavLink
              style={{ ...tabLinkStyle, ...(activeTab === "2" ? activeTabStyle : {}) }}
              onClick={() => toggleTab("2")}
            >
              Sign Up
            </NavLink>
          </NavItem>
          <NavItem className="w-33 text-center">
            <NavLink
              style={{ ...tabLinkStyle, ...(activeTab === "3" ? activeTabStyle : {}) }}
              onClick={() => toggleTab("3")}
            >
              Forgot Password
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="mt-4">
          <TabPane tabId="1">
            <Form>
              <FormGroup style={formGroupStyle}>
                <Label for="signInEmail" style={labelStyle}>
                  Email
                </Label>
                <InputGroup style={inputGroupStyle}>
                  <InputGroupText>
                    <AiOutlineMail size={20} />
                  </InputGroupText>
                  <Input
                    type="email"
                    name="email"
                    id="signInEmail"
                    placeholder="Enter your email"
                    style={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup style={formGroupStyle}>
                <Label for="signInPassword" style={labelStyle}>
                  Password
                </Label>
                <InputGroup style={inputGroupStyle}>
                  <InputGroupText>
                    <AiOutlineLock size={20} />
                  </InputGroupText>
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="signInPassword"
                    placeholder="Enter your password"
                    style={inputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroupText style={eyeIconStyle} onClick={togglePasswordVisibility}>
                    {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
              <div style={buttonContainerStyle}>
                <Button
                  style={buttonStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = buttonStyleHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                  }
                  onClick={handleLogin}
                >
                  {loading ? <Spinner size="sm" color="light" /> : "Sign In"}
                </Button>
                <Button
                  style={cancelButtonStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = '#c82333')
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = cancelButtonStyle.backgroundColor)
                  }
                  onClick={() => setActiveTab("2")}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </TabPane>
          <TabPane tabId="2">
            <Form>
              <FormGroup style={formGroupStyle}>
                <Label for="registerEmail" style={labelStyle}>
                  Email
                </Label>
                <InputGroup style={inputGroupStyle}>
                  <InputGroupText>
                    <AiOutlineMail size={20} />
                  </InputGroupText>
                  <Input
                    type="email"
                    name="email"
                    id="registerEmail"
                    placeholder="Enter your email"
                    style={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup style={formGroupStyle}>
                <Label for="registerPassword" style={labelStyle}>
                  Password
                </Label>
                <InputGroup style={inputGroupStyle}>
                  <InputGroupText>
                    <AiOutlineLock size={20} />
                  </InputGroupText>
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="registerPassword"
                    placeholder="Enter your password"
                    style={inputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroupText style={eyeIconStyle} onClick={togglePasswordVisibility}>
                    {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
              <FormGroup style={formGroupStyle}>
                <Label for="confirmPassword" style={labelStyle}>
                  Confirm Password
                </Label>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  style={inputStyle}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormGroup>
              <div style={buttonContainerStyle}>
                <Button
                  style={buttonStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = buttonStyleHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                  }
                  onClick={handleRegister}
                >
                  {loading ? <Spinner size="sm" color="light" /> : "Sign Up"}
                </Button>
                <Button
                  style={cancelButtonStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = '#c82333')
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = cancelButtonStyle.backgroundColor)
                  }
                  onClick={() => setActiveTab("1")}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </TabPane>
          <TabPane tabId="3">
            <Form>
              <FormGroup style={formGroupStyle}>
                <Label for="forgotEmail" style={labelStyle}>
                  Email
                </Label>
                <InputGroup style={inputGroupStyle}>
                  <InputGroupText>
                    <AiOutlineMail size={20} />
                  </InputGroupText>
                  <Input
                    type="email"
                    name="email"
                    id="forgotEmail"
                    placeholder="Enter your email"
                    style={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div style={buttonContainerStyle}>
                <Button
                  style={buttonStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = buttonStyleHover.backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                  }
                  onClick={handleForgotPassword}
                >
                  {loading ? <Spinner size="sm" color="light" /> : "Send Reset Link"}
                </Button>
                <Button
                  style={cancelButtonStyle}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = '#c82333')
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = cancelButtonStyle.backgroundColor)
                  }
                  onClick={() => setActiveTab("1")}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default LoginPage;
