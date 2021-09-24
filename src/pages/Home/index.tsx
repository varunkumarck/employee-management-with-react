import PublicNavBar from "../../components/PublicNavigation";
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

export default function Home() {
  return (
    <div>
      <PublicNavBar />

      <Container>
        <Row>
          <Col sm={9}>
            <h4 className={classNames('text-primary')}>
              <img src="home.jpg" width="100%" height="700px" />
            </h4>
          </Col>

          <Col sm={3}>
            <br />
            <Row>
              <Col sm={3}>
                <img src="manage.svg" />
              </Col>
              <Col >
                <Row>
                  <Col sm={9}>
                    <b>Manage Employees</b><br />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Add, edit and view employees
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={3}>
                <img src="activities.svg" />
              </Col>
              <Col >
                <Row>
                  <Col sm={9}>
                    <b>Activities Tracking</b><br />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Review active and idle time,
                    or manual activities
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={3}>
                <img src="monitoring.svg" />
              </Col>
              <Col >
                <Row>
                  <Col sm={9}>
                    <b>Real-Time Monitoring</b><br />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    See which tasks your employees are handling
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={3}>
                <img src="productivity.svg" />
              </Col>
              <Col >
                <Row>
                  <Col sm={9}>
                    <b>Productivity Tracking</b><br />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Measure and improve team's productivity
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </div>
  );
}