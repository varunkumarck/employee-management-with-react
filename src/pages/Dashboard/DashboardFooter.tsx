import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './dashboard.module.css'
import classNames from "classnames";

export default function DashboardFooter() {

    return (
        <footer>
            <Row>
                <Col className={classNames(styles.footer, 'text-center')}>
                    Privacy statement
                </Col>
            </Row>
        </footer>
    );
}