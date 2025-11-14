import { useEffect, useMemo, useState } from 'react'

const CATEGORIES = ['All','Cricket','Football','Badminton','Fitness','Accessories']

const MOCK = Array.from({length:12}, (_,i)=> ({
  id:i+1,
  name:`Product ${i+1}`,
  price: (20 + i*5),
  cat: CATEGORIES[(i % (CATEGORIES.length-1))+1],
}))

const useAnim = () => {
  useEffect(()=>{
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('animate__animated', e.target.dataset.animate); io.unobserve(e.target) } })
    },{threshold:0.15})
    document.querySelectorAll('[data-animate]').forEach(el=>io.observe(el))
    return ()=>io.disconnect()
  },[])
}

export default function Products(){
  useAnim()
  const [active, setActive] = useState('All')
  const products = useMemo(()=> active==='All'?MOCK:MOCK.filter(p=>p.cat===active), [active])

  return (
    <main className="container py-5">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div>
          <h1 className="fw-bold mb-1">Products</h1>
          <p className="text-muted mb-0">Premium, tested, and ready for game day</p>
        </div>
        <div className="btn-group" role="group" aria-label="Filter products">
          {CATEGORIES.map(c => (
            <button key={c} className={`btn btn-sm ${active===c? 'btn-primary':'btn-outline-dark'}`} onClick={()=>setActive(c)}>{c}</button>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {products.map(p => (
          <div key={p.id} className="col-12 col-sm-6 col-lg-3" data-animate="animate__fadeInUp">
            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden hover-lift">
              <div className="ratio ratio-4x3 bg-light d-flex align-items-center justify-content-center">
                <i className="bi bi-bag text-primary" style={{fontSize:40}}></i>
              </div>
              <div className="card-body">
                <h6 className="card-title mb-1">{p.name}</h6>
                <p className="text-muted small mb-2">{p.cat}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-semibold">${p.price.toFixed(0)}</span>
                  <button className="btn btn-sm btn-success rounded-pill">Add</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
