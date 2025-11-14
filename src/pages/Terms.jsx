import { useEffect } from 'react'

export default function Terms(){
  useEffect(()=>{ window.scrollTo(0,0) },[])
  return (
    <main className="container py-5">
      <h1 className="fw-bold mb-3">Terms & Conditions</h1>
      <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
      <hr/>
      <h5>1. Introduction</h5>
      <p className="text-muted">By accessing this website, you agree to be bound by these terms. If you do not agree, please discontinue use.</p>
      <h5>2. Orders & Payments</h5>
      <p className="text-muted">All prices are listed in USD. Orders are confirmed upon payment. We reserve the right to cancel any order.</p>
      <h5>3. Shipping & Delivery</h5>
      <p className="text-muted">We aim to dispatch orders promptly. Delivery times may vary based on location and availability.</p>
      <h5>4. Returns & Refunds</h5>
      <p className="text-muted">Items can be returned within 14 days if unused and in original packaging. Refunds are processed to the original payment method.</p>
      <h5>5. Warranty</h5>
      <p className="text-muted">Most products include a limited manufacturer warranty against defects under normal use.</p>
      <h5>6. Liability</h5>
      <p className="text-muted">We are not liable for indirect, incidental or consequential damages resulting from the use of our products.</p>
      <h5>7. Governing Law</h5>
      <p className="text-muted">These terms are governed by the laws of your jurisdiction. Disputes will be subject to competent courts.</p>
      <div className="mt-4">
        <a href="#top" className="btn btn-outline-dark rounded-pill">Scroll to top</a>
      </div>
    </main>
  )
}
