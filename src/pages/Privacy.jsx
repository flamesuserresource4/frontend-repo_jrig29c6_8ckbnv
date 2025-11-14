import { useEffect } from 'react'

export default function Privacy(){
  useEffect(()=>{ window.scrollTo(0,0) },[])
  return (
    <main className="container py-5">
      <div className="mb-4">
        <h1 className="fw-bold">Privacy Policy</h1>
        <p className="text-muted">We respect your privacy and are committed to protecting your personal data.</p>
      </div>
      <section className="mb-4">
        <h5>Information We Collect</h5>
        <p className="text-muted">Contact details, payment information, and usage data when you browse the website.</p>
      </section>
      <section className="mb-4">
        <h5>How We Use Your Data</h5>
        <p className="text-muted">To process orders, provide support, improve our services, and comply with legal obligations.</p>
      </section>
      <section className="mb-4">
        <h5>Data Sharing</h5>
        <p className="text-muted">We do not sell your data. We may share it with trusted partners to complete transactions and provide services.</p>
      </section>
      <section className="mb-4">
        <h5>Your Rights</h5>
        <p className="text-muted">Access, correction, deletion, and portability, subject to applicable laws.</p>
      </section>
      <section>
        <h5>Contact</h5>
        <p className="text-muted">For privacy requests, contact privacy@sportifygear.example</p>
      </section>
    </main>
  )
}
