import { useEffect } from 'react'

const useAnim = () => {
  useEffect(()=>{
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('animate__animated', e.target.dataset.animate); io.unobserve(e.target) } })
    },{threshold:0.2})
    document.querySelectorAll('[data-animate]').forEach(el=>io.observe(el))
    return ()=>io.disconnect()
  },[])
}

export default function Services(){
  useAnim()
  const cards = [
    { icon:'bi-person-workspace', title:'Gym Setup', text:'End-to-end commercial & home gym installations.' },
    { icon:'bi-tools', title:'Equipment Repair', text:'Certified technicians for maintenance and fixes.' },
    { icon:'bi-brush', title:'Gear Customization', text:'Branding, colors, numbering, and logos.' },
    { icon:'bi-bag-check', title:'Bulk Supply', text:'Clubs, schools, and institutions at scale.' },
  ]
  return (
    <main className="container py-5">
      <div className="text-center mb-4" data-animate="animate__fadeInUp">
        <h1 className="fw-bold">Our Services</h1>
        <p className="text-muted">Everything you need to outfit your team or facility</p>
      </div>
      <div className="row g-4">
        {cards.map((c,i)=> (
          <div key={i} className="col-12 col-md-6 col-lg-3" data-animate="animate__fadeInUp">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-lift">
              <i className={`bi ${c.icon} text-success`} style={{fontSize:32}}></i>
              <h6 className="mt-2 mb-1">{c.title}</h6>
              <p className="text-muted small mb-0">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
