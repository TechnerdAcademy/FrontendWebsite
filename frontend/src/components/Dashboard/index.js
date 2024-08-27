import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Progress } from "reactstrap";

const Dashboard = () => {
  return (
    <Container>
      <h2 className="my-4">Welcome to Your Dashboard</h2>
      <p className="lead">Here’s an overview of your courses and progress.</p>

      <Row>
        <Col sm="12" md="6" lg="4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Total Courses Enrolled</CardTitle>
              <CardText>You are enrolled in:</CardText>
              <h3>5 Courses</h3>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="6" lg="4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Overall Progress</CardTitle>
              <CardText>Your overall course completion.</CardText>
              <Progress value={70} color="info" />
            </CardBody>
          </Card>
        </Col>


        <Col sm="12" md="6" lg="4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Recent Grades</CardTitle>
              <CardText>Your last 3 grades:</CardText>
              <ul>
                <li>Math Quiz: 85%</li>
                <li>Science Project: 92%</li>
                <li>History Exam: 78%</li>
              </ul>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="6" lg="4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Messages/Announcements</CardTitle>
              <CardText>You have 2 new messages:</CardText>
              <ul>
                <li>New announcement from Math teacher</li>
                <li>Reminder for Science Quiz</li>
              </ul>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="6" lg="4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Next Class/Session</CardTitle>
              <CardText>Your next class is:</CardText>
              <h3>English - Aug 29, 10:00 AM</h3>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
