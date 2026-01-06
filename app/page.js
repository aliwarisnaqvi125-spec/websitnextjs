import Hero from "@/components/Hero";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="section-padding container">
        <div className="card-3d" style={{ padding: '40px', borderRadius: '12px', background: 'rgba(20,20,20,0.6)' }}>
          <h2 className="text-center mb-4 text-3d" style={{ fontSize: '2.5rem' }}>Our Story</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', lineHeight: '1.8', color: '#ccc' }}>
            <p className="mb-4">
              Established in 1985, Hader Dhaba has been the epitome of luxury dining.
              Our chefs use only the finest ingredients, sourced locally and globally, to create
              masterpieces that delight both the palate and the eye.
            </p>
            <p>
              Whether you are joining us for a romantic dinner, a business lunch, or a family celebration,
              we promise an experience that is nothing short of extraordinary.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'transparent' }}>
        <div className="container text-center">
          <h2 className="mb-4 text-3d" style={{ fontSize: '2.5rem' }}>Exquisite Cuisine</h2>
          <p className="mb-4" style={{ color: '#aaa' }}>Explore our seasonal menu featuring world-class dishes.</p>
          <div style={{ marginTop: '40px' }}>
            <Link href="/menu" className="btn-primary">View Full Menu</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
