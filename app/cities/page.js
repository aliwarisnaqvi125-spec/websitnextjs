export default function CitiesPage() {
    const CITY_STATS = [
        { city: "London", country: "UK", cpm: "$12.50", engagement: "88%", rank: 1 },
        { city: "New York", country: "US", cpm: "$11.80", engagement: "85%", rank: 2 },
        { city: "Manchester", country: "UK", cpm: "$10.20", engagement: "82%", rank: 3 },
        { city: "Los Angeles", country: "US", cpm: "$9.90", engagement: "80%", rank: 4 },
        { city: "San Francisco", country: "US", cpm: "$9.50", engagement: "78%", rank: 5 },
    ];

    return (
        <main className="section-padding container" style={{ marginTop: '80px' }}>
            <h1 className="text-center mb-4">Top Cities Ranking</h1>
            <p className="text-center mb-4" style={{ color: 'var(--color-gray-soft)' }}>
                Performance metrics and CPM rankings for major UK and US hubs.
            </p>

            <div className="social-card" style={{ marginTop: '40px', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <th style={{ padding: '15px' }}>Rank</th>
                            <th style={{ padding: '15px' }}>City</th>
                            <th style={{ padding: '15px' }}>Country</th>
                            <th style={{ padding: '15px' }}>Avg. CPM</th>
                            <th style={{ padding: '15px' }}>Engagement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CITY_STATS.map((stat) => (
                            <tr key={stat.rank} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px', fontWeight: 'bold', color: stat.rank <= 3 ? 'var(--color-primary)' : 'inherit' }}>#{stat.rank}</td>
                                <td style={{ padding: '15px' }}>{stat.city}</td>
                                <td style={{ padding: '15px' }}>{stat.country}</td>
                                <td style={{ padding: '15px' }}><span className="stat-badge">{stat.cpm}</span></td>
                                <td style={{ padding: '15px' }}>{stat.engagement}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                <div className="social-card" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--color-gray-soft)' }}>Average US CPM</h4>
                    <h2 style={{ color: 'var(--color-secondary)' }}>$10.30</h2>
                </div>
                <div className="social-card" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--color-gray-soft)' }}>Average UK CPM</h4>
                    <h2 style={{ color: 'var(--color-primary)' }}>$11.10</h2>
                </div>
                <div className="social-card" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--color-gray-soft)' }}>Total Engagement</h4>
                    <h2 style={{ color: 'var(--color-accent)' }}>83.4%</h2>
                </div>
            </div>

            {/* Bottom Ad Script */}
            <section style={{ padding: '40px 0', textAlign: 'center' }}>
                <script async data-cfasync="false" src="https://pl28573155.effectivegatecpm.com/bf60bec2f0f2dd882966e7f011321553/invoke.js"></script>
                <div id="container-bf60bec2f0f2dd882966e7f011321553"></div>
            </section>
        </main>
    );
}
