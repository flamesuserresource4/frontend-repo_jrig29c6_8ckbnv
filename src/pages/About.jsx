import { useEffect } from 'react'

const useAnimate = () => {
  useEffect(()=>{
    const els = document.querySelectorAll('[data-animate]')
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('animate__animated', e.target.dataset.animate); io.unobserve(e.target) } })
    },{threshold:0.2})
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect()
  },[])
}

export default function About(){
  useAnimate()
  return (
    <main className="bg-light">
      <section className="container py-5">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6" data-animate="animate__fadeInLeft">
            <h1 className="fw-bold">Our Story</h1>
            <p className="text-muted">Born from a passion for sports, we set out to craft reliable, performance-first equipment that helps athletes play better and safer. Today, we serve thousands of players, coaches, and organizations worldwide.</p>
          </div>
          <div className="col-lg-6" data-animate="animate__fadeInRight">
            <div className="ratio ratio-16x9 bg-white rounded-4 shadow-sm"></div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{background:'#fff'}}>
        <div className="container">
          <div className="row g-4">
            {[
              {title:'Mission', text:'Enable peak performance with accessible, elite-grade gear.'},
              {title:'Vision', text:'Be the most trusted global partner for sports equipment.'},
              {title:'Values', text:'Integrity, innovation, sustainability, and customer obsession.'},
            ].map((b, i)=> (
              <div className="col-md-4" key={i} data-animate="animate__fadeInUp">
                <div className="p-4 bg-light rounded-4 h-100 shadow-sm">
                  <h5 className="fw-semibold">{b.title}</h5>
                  <p className="text-muted mb-0">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-4" data-animate="animate__fadeInUp">
          <h2 className="fw-bold">Team</h2>
          <p className="text-muted">A small team of athletes, engineers and designers</p>
        </div>
        <div className="row g-4">
          {[1,2,3,4].map((i)=> (
            <div className="col-6 col-md-3" key={i}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden team-card">
                <div className="ratio ratio-1x1 bg-light"></div>
                <div className="card-body">
                  <h6 className="mb-1">Member {i}</h6>
                  <p className="text-muted small">Role</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5" style={{background:'linear-gradient(180deg,#f8fbff,#fff)'}}>
        <div className="container" data-animate="animate__fadeInUp">
          <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm text-center">
            <h3 className="fw-bold">Join our journey</h3>
            <p className="text-muted mb-0">Partner with us for your next tournament or gym setup.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
