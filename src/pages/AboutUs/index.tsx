import PublicNavBar from "../../components/PublicNavigation";

export default function About() {
  return (
    <div>
      <PublicNavBar />

      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">Future Group</h1>
              <p className="lead text-muted mb-0">Founded in 2021, Future group helps organizations to manage their employees</p>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Vision</h2>
              <p className="font-italic text-muted mb-4">Empower organizations to manage their employees. An employee management system consists of crucial work-related and important personal information about an employee. In a nutshell, it is an online inventory of all employees of an organization. Employees are the strength of any organization, and it is more so in case of a growing business</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto"></div>
            <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">What we do?</h2>
              <p className="font-italic text-muted mb-4">We provide a platform for managing the employees. You can onboard new employees, manage their compensation details.
                It provides a view of all the employees. Categorize employees on different basis like department, place, etc. It also offers a simplified resignation flow</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our Minds</h2>
            </div>
          </div>

          <div className="row text-center">

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <h5 className="mb-0">Revathy</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <h5 className="mb-0">Uthara</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <h5 className="mb-0">Gopa Kumar </h5><span className="small text-uppercase text-muted">Delivery Head</span>
              </div>
            </div>


            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <h5 className="mb-0">Varun Kumar</h5><span className="small text-uppercase text-muted">CTO</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}