import { useEffect } from 'react'

const plans = [
  { name:'Starter', price:19, features:['Basic gear','Email support','3-day delivery'], recommended:false, color:'primary' },
  { name:'Pro', price:49, features:['Popular gear','Priority support','2-day delivery'], recommended:true, color:'success' },
  { name:'Premium', price:99, features:['Elite gear','Dedicated manager','Next-day delivery'], recommended:false, color:'warning' },
  { name:'Enterprise', price:199, features:['Full facility','On-site service','Custom SLAs'], recommended:false, color:'dark' },
]

const useAnim = () => {
  useEffect(()=>{
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('animate__animated', e.target.dataset.animate); io.unobserve(e.target) } })
    },{threshold:0.2})
    document.querySelectorAll('[data-animate]').forEach(el=>io.observe(el))
    return ()=>io.disconnect()
  },[])
}

export default function Pricing(){
  useAnim()
  return (
    <main className="container py-5">
      <div className="text-center mb-4" data-animate="animate__fadeInUp">
        <h1 className="fw-bold">Pricing</h1>
        <p className="text-muted">Flexible plans for every level</p>
      </div>
      <div className="row g-4 align-items-stretch">
        {plans.map((p,i)=> (
          <div className="col-12 col-md-6 col-lg-3" key={i} data-animate="animate__fadeInUp">
            <div className={`h-100 p-4 rounded-4 shadow-sm bg-white position-relative ${p.recommended? 'border border-2 border-success':''} hover-lift`}>
              {p.recommended && <span className="badge bg-success position-absolute top-0 start-50 translate-middle rounded-pill">Recommended</span>}
              <h5 className="fw-bold">{p.name}</h5>
              <div className={`display-6 text-${p.color} fw-bold`}>${p.price}<span className="fs-6 text-muted">/mo</span></div>
              <ul className="list-unstyled mt-3 text-muted small">
                {p.features.map((f,idx)=> <li key={idx} className="mb-1"><i className="bi bi-check2-circle text-success me-2"></i>{f}</li>)}
              </ul>
              <button className={`btn btn-${p.color} w-100 rounded-pill`}>Choose {p.name}</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
