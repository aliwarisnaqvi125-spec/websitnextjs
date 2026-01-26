import Hero from "@/components/Hero";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />


      <section className="section-padding container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

          <div className="social-card">
            <h3 className="mb-2">Daily Quizzes</h3>
            <p className="mb-4" style={{ color: 'var(--color-gray-soft)' }}>
              Test your knowledge about top UK and US cities. Earn points for every correct answer!
            </p>
            <Link href="/quizzes" className="btn-primary">Play Now</Link>
          </div>

          <div className="social-card">
            <h3 className="mb-2">Social Tasks</h3>
            <p className="mb-4" style={{ color: 'var(--color-gray-soft)' }}>
              Complete simple tasks like sharing or inviting friends to earn exclusive rewards.
            </p>
            <Link href="/tasks" className="btn-primary">View Tasks</Link>
          </div>

          <div className="social-card">
            <h3 className="mb-2">City Insights</h3>
            <p className="mb-4" style={{ color: 'var(--color-gray-soft)' }}>
              Explore CPM rankings and valuable blog content about London, New York, and more.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link href="/cities" className="stat-badge" style={{ textDecoration: 'none' }}>Rankings</Link>
              <Link href="/blogs" className="stat-badge" style={{ textDecoration: 'none', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--color-primary)' }}>Blogs</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Banner Ad Section */}
      <section style={{ textAlign: 'center', padding: '20px 0' }}>
        <div className="container">
          <div id="ad-banner-home">
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  atOptions = {
                    'key' : '1954ac424dfa645cd810a1a5ad5f23a6',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                  };
                `,
              }}
            />
            <script src="https://www.highperformanceformat.com/1954ac424dfa645cd810a1a5ad5f23a6/invoke.js" async></script>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container text-center">
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Why CityPulse?</h2>
          <p className="mb-4" style={{ color: 'var(--color-gray-soft)', maxWidth: '800px', margin: '0 auto' }}>
            We bring you the most engaging content focused on the vibrant life of major cities in the UK and US.
            Join thousands of users competing in quizzes and staying updated with the latest trends.
          </p>
          <div style={{ marginTop: '40px' }}>
            <Link href="/tasks" className="btn-outline">Join the Community</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
