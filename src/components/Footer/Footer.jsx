import "./Footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>

          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>

          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div> */}
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* COMPANY */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase title">
                Walker <br />
                <div className="subtitle">Used Cars</div>
              </h6>

              {/* <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p> */}
            </div>

            {/* PRODUCTS */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase mb-4 innerTitles">Brands</h6>

              <p>
                <a href="#" className="text-reset">
                  Lamborghini
                </a>
              </p>

              <p>
                <a href="#" className="text-reset">
                  Bucatti
                </a>
              </p>

              <p>
                <a href="#" className="text-reset">
                  Ferrari
                </a>
              </p>

              <p>
                <a href="#" className="text-reset">
                  BMW
                </a>
              </p>
            </div>

            {/* USEFUL LINKS */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase mb-4 innerTitles">Useful links</h6>

              <p>
                <a href="#" className="text-reset">
                  Pricing
                </a>
              </p>

              <p>
                <a href="#" className="text-reset">
                  Settings
                </a>
              </p>

              <p>
                <a href="#" className="text-reset">
                  Orders
                </a>
              </p>

              <p>
                <a href="#" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            {/* CONTACT */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact">
              <h6 className="text-uppercase mb-4 innerTitles">Contact</h6>

              <p>Athens, Palaio Faliro</p>

              <p>irene.mar276@gmail.com</p>

              <p>6943104607</p>
            </div>
          </div>
        </div>
      </section>

      {/* COPYRIGHT */}
      <div className="text-center p-4 copyright">
        © 2026 Copyright: Irene G. Skliri
      </div>
    </footer>
  );
}

export default Footer;
