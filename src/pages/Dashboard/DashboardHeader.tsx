import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './dashboard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useAppSelector } from '../../redux/hooks';
import { getLoginUserData, User } from '../../components/User/userSlice';

interface Props {
    handleLogout: () => void;
}

export default function DashboardHeader(props: Props) {

    const loggedInUser: User = useAppSelector(getLoginUserData);

    return (
        <header>

            <Row className={(classNames(styles.header, 'text-center'))}>
                <Col sm={12} className={(styles.userGreeting)}>
                    Hello {loggedInUser.id}

                    <span style={{ float: 'right' }}>
                        <Button onClick={props.handleLogout} className="btn btn-danger" >
                            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                        </Button>
                    </span>
                </Col>
            </Row>

        </header>
    );
}

