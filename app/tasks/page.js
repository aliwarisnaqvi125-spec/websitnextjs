"use client";

const TASKS = [
    { id: 1, title: "Daily Check-in", reward: "50 Points", description: "Stay consistent and visit CityPulse daily.", status: "Available" },
    { id: 2, title: "Share a Quiz", reward: "100 Points", description: "Invite your friends to challenge them on city trivia.", status: "Available" },
    { id: 3, title: "Refer a Friend", reward: "500 Points", description: "Invite a new user to join the CityPulse community.", status: "Multiple" }
];

export default function TasksPage() {
    return (
        <main className="section-padding container" style={{ marginTop: '80px' }}>
            <h1 className="text-center mb-4">Social Tasks</h1>
            <p className="text-center mb-4" style={{ color: 'var(--color-gray-soft)' }}>
                Complete simple tasks to earn rewards and unlock exclusive platform features.
            </p>

            <div style={{ maxWidth: '800px', margin: '40px auto', display: 'grid', gap: '20px' }}>
                {TASKS.map(task => (
                    <div key={task.id} className="social-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 className="mb-2">{task.title}</h3>
                            <p style={{ color: 'var(--color-gray-soft)', fontSize: '0.9rem' }}>{task.description}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div className="stat-badge mb-2" style={{ display: 'inline-block' }}>{task.reward}</div>
                            <button className="btn-primary" style={{ display: 'block', padding: '8px 20px', fontSize: '0.8rem' }}>Complete</button>
                        </div>
                    </div>
                ))}
            </div>

            <section className="text-center" style={{ marginTop: '60px', padding: '40px', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '20px' }}>
                <h2 className="mb-2">Redeem Your Points</h2>
                <p className="mb-4" style={{ color: 'var(--color-gray-soft)' }}>Points can be used to unlock premium content, ad-free experience, and special badges.</p>
                <button className="btn-outline">Coming Soon</button>
            </section>
        </main>
    );
}
