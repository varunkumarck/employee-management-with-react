import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './nav.module.css'
export default function PublicNavBar() {

    return (
      <div>
        <Navbar className={styles.menuBar}>
          <Container>
            <Navbar.Brand style={{ color: 'white' }}>Web Twinz</Navbar.Brand>
            <Nav className="mr">
              <Link className="menu-item" to="/">Home</Link>
              <Link className="menu-item" to="/about">About</Link>
              <Link className="menu-item" to="/contact">Contact Us</Link>
              <Link className="menu-item" to="/login">Login</Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }