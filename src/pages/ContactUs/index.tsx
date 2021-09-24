
import PublicNavBar from "../../components/PublicNavigation";

export default function ContactUs() {
  return (
    <>
      <PublicNavBar />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <section className="mb-4">

          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          <p className="text-center w-responsive mx-auto mb-5">Please reach us, our support team will contact you shortly</p>

          <div className="row">

            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name">Your name</label>
                      <input type="text" id="name" name="name" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email">Your email</label>
                      <input type="text" id="email" name="email" className="form-control" />
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" id="subject" name="subject" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="row">

                  <div className="col-md-12">

                    <div className="md-form">
                      <label htmlFor="message">Your message</label>
                      <textarea rows={5} id="message" name="message" className="form-control md-textarea"></textarea>
                    </div>

                  </div>
                </div>

              </form>

              <div style={{ paddingTop: '30px' }} className="text-center text-md-left">
                <a className="btn btn-primary">Send</a>
              </div>

              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li><h5 style={{ fontStyle: 'italic' }}>Address of Communication</h5></li>
                <br />
                <li>#</li>
                <li>Building Name</li>
                <li>City</li><br/>
                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@webtwinz.com</p>
                </li>
              </ul>
            </div>

          </div>

        </section>
      </div>
    </>
  );
}