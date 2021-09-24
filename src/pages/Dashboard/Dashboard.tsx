import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faPlusSquare,
    faList
} from "@fortawesome/free-solid-svg-icons";

import { Nav } from "react-bootstrap";
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import EmployeeList from "../../components/EmployeeList/EmployeeList";

import { history } from "../../utils/history";
import EmployeeView from "../../components/Employee";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../components/User/userSlice";
import ProtectedRoute from "../../components/ProtectedRoute";
import DashboardHome from "./DashboardHome";

function Dashboard() {

    let { path, url } = useRouteMatch();

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout())
        history.push("/login");
    }

    return (
        <ProtectedRoute>
            <div className="container-fluid">
                <DashboardHeader handleLogout={handleLogout} />
                <div className="row flex-nowrap">
                    <div className="col-auto" style={{ backgroundColor: '#88a3ec' }}>
                        <div className="d-flex flex-column align-items-center text-white min-vh-100">
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item" style={{ paddingBottom: '20px' }}>
                                    <Nav.Item>
                                        <Link className="menu-item" to={`${url}`}>
                                            <FontAwesomeIcon icon={faHome} className="mr-2" />&nbsp;&nbsp;&nbsp;Dashboard
                                        </Link>
                                    </Nav.Item>
                                </li>
                                <li className="nav-item" style={{ paddingBottom: '20px' }}>
                                    <Nav.Item>
                                        <Link className="menu-item" to={`${url}/add`} style={{ paddingBottom: '20px' }}>
                                            <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />&nbsp;&nbsp;&nbsp;Add
                                        </Link>
                                    </Nav.Item>
                                </li>
                                <li className="nav-item">
                                    <Nav.Item>
                                        <Link className="menu-item" to={`${url}/list`}>
                                            <FontAwesomeIcon icon={faList} className="mr-2" />&nbsp;&nbsp;&nbsp;List
                                        </Link>
                                    </Nav.Item>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col py-3">
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome />
                            </Route>
                            <Route path={`${path}/view`}>
                                <EmployeeView />
                            </Route>
                            <Route path={`${path}/add`}>
                                <EmployeeView />
                            </Route>
                            <Route path={`${path}/edit`}>
                                <EmployeeView />
                            </Route>
                            <Route path={`${path}/list`}>
                                <EmployeeList />
                            </Route>
                        </Switch>
                    </div>
                </div>
                <DashboardFooter />
            </div>
        </ProtectedRoute>

    );
}

export default Dashboard;
