import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

export default function DashboardHome() {

    let { url } = useRouteMatch();

    return (

        <div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center p-2 h4">
                    Employee Management Platform
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Add Employee</h5>
                            <h6 className="card-title">Use this to create a new Employee</h6><br />
                            <Link to={`${url}/add`} className="btn btn-primary">Add</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">View Employees</h5>
                            <h6 className="card-title">Use this to view the Employees</h6><br />
                            <Link to={`${url}/list`} className="btn btn-primary">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}