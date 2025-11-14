import { useEffect } from 'react'

const useScrollAnimations = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          el.classList.add('animate__animated', el.dataset.animate)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.2 })

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home(){
  useScrollAnimations()
  return (
    <main>
      {/* Hero */}
      <section className="position-relative overflow-hidden" style={{background: 'linear-gradient(135deg, #f8fbff, #f7fff8)'}}>
        <div className="container py-5" id="top">
          <div className="row align-items-center gy-4 py-lg-5">
            <div className="col-lg-6" data-animate="animate__fadeInUp">
              <span className="badge bg-primary-subtle text-primary rounded-pill mb-3">Premium Sports Gear</span>
              <h1 className="display-5 fw-bold lh-tight">Equip Your Game with Elite-Grade, Performance-Driven Products</h1>
              <p className="text-muted mt-3">From footballs to full gym setups — we supply, customize, and support equipment for athletes, clubs, schools, and fitness centers.</p>
              <div className="d-flex gap-3 mt-4" data-animate="animate__fadeInUp">
                <a href="/products" className="btn btn-primary btn-lg rounded-pill px-4">Shop Products</a>
                <a href="/services" className="btn btn-outline-dark btn-lg rounded-pill px-4">Our Services</a>
              </div>
            </div>
            <div className="col-lg-6" data-animate="animate__zoomIn">
              <div className="ratio ratio-16x9 rounded-4 shadow-sm bg-white d-flex align-items-center justify-content-center">
                <div className="text-center p-4">
                  <i className="bi bi-basket3 text-primary" style={{fontSize: 64}}></i>
                  <i className="bi bi-dribbble text-danger ms-3" style={{fontSize: 64}}></i>
                  <i className="bi bi-trophy text-warning ms-3" style={{fontSize: 64}}></i>
                  <p className="text-muted mt-3">Football • Cricket • Badminton • Fitness • Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 translate-middle opacity-25" aria-hidden="true">
          <div className="rounded-circle bg-primary" style={{width: 200, height: 200, filter: 'blur(80px)'}}></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-5">
        <div className="text-center mb-4" data-animate="animate__fadeInUp">
          <span className="badge bg-success-subtle text-success rounded-pill">Featured</span>
          <h2 className="fw-bold mt-2">Best Sellers</h2>
          <p className="text-muted">Hand-picked equipment trusted by top performers</p>
        </div>
        <div className="row g-4">
          {[1,2,3,4].map((i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={i} data-animate="animate__fadeInUp">
              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden hover-lift">
                <div className="ratio ratio-4x3 bg-light d-flex align-items-center justify-content-center">
                  <i className="bi bi-box-seam text-dark opacity-75" style={{fontSize: 40}}></i>
                </div>
                <div className="card-body">
                  <h6 className="card-title mb-1">Product {i}</h6>
                  <p className="card-text text-muted small">Premium quality, durable and performance-ready.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">$ {(i*30).toFixed(0)}</span>
                    <a href="/products" className="btn btn-sm btn-primary rounded-pill">View</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="py-5" style={{background: 'linear-gradient(180deg, #ffffff, #f7fbff)'}}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-5" data-animate="animate__fadeInLeft">
              <h2 className="fw-bold">We do more than sell gear</h2>
              <p className="text-muted">Setup gyms, repair equipment, customize sports kits, and manage bulk supplies for institutions.</p>
              <a href="/services" className="btn btn-dark rounded-pill px-4">Explore Services</a>
            </div>
            <div className="col-lg-7" data-animate="animate__fadeInRight">
              <div className="row g-3">
                {[
                  {icon:'bi-tools', title:'Repairs'},
                  {icon:'bi-bag-check', title:'Bulk Supply'},
                  {icon:'bi-person-workspace', title:'Gym Setup'},
                  {icon:'bi-brush', title:'Customization'},
                ].map((s,idx) => (
                  <div className="col-6" key={idx}>
                    <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-lift">
                      <i className={`bi ${s.icon} text-primary`} style={{fontSize: 28}}></i>
                      <h6 className="mt-2 mb-0">{s.title}</h6>
                      <p className="text-muted small mb-0">Fast turnaround, expert team.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials slider */}
      <section className="container py-5">
        <div className="text-center mb-4" data-animate="animate__fadeInUp">
          <span className="badge bg-warning-subtle text-warning rounded-pill">Loved by Athletes</span>
          <h2 className="fw-bold mt-2">What Our Clients Say</h2>
        </div>
        <div id="testi" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {[1,2,3].map((i) => (
              <div className={`carousel-item ${i===1?'active':''}`} key={i}>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm text-center">
                      <i className="bi bi-quote text-primary" style={{fontSize: 40}}></i>
                      <p className="lead mt-3">“Top-notch quality and swift delivery. Our team loves the new kits!”</p>
                      <span className="fw-semibold">Coach Alex</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testi" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testi" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5" style={{background:'linear-gradient(135deg,#e6f0ff,#eaffea)'}}>
        <div className="container" data-animate="animate__fadeInUp">
          <div className="d-lg-flex align-items-center justify-content-between p-4 p-lg-5 bg-white rounded-4 shadow-sm">
            <div>
              <h3 className="fw-bold mb-1">Ready to elevate performance?</h3>
              <p className="text-muted mb-0">Get custom quotes for your club, school, or gym.</p>
            </div>
            <a href="/pricing" className="btn btn-primary rounded-pill px-4 mt-3 mt-lg-0">Get a Quote</a>
          </div>
        </div>
      </section>
    </main>
  )
}
