export default function Footer(){
  return (
    <footer className="bg-white border-top mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold">SportifyGear</h5>
            <p className="text-muted">Premium sports equipment for athletes, clubs, and fitness enthusiasts.</p>
          </div>
          <div className="col-md-4">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled text-muted">
              <li><a className="link-dark text-decoration-none" href="/services">Services</a></li>
              <li><a className="link-dark text-decoration-none" href="/products">Products</a></li>
              <li><a className="link-dark text-decoration-none" href="/pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="fw-semibold">Follow Us</h6>
            <div className="d-flex gap-3">
              <a className="btn btn-outline-dark btn-sm rounded-circle" href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
              <a className="btn btn-outline-dark btn-sm rounded-circle" href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a className="btn btn-outline-dark btn-sm rounded-circle" href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-4 border-top d-flex justify-content-between text-muted small">
          <span>© {new Date().getFullYear()} SportifyGear. All rights reserved.</span>
          <a href="#top" className="link-secondary">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
