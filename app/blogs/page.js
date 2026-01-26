"use client";
import { useState } from 'react';
import Link from 'next/link';

const BLOGS = [
    {
        id: 1,
        title: "The Ultimate Guide to London's Hidden Gems",
        category: "UK Travel",
        excerpt: "Beyond the Big Ben and Buckingham Palace, London holds secret spots that only locals know...",
        author: "James Wilson",
        date: "Jan 20, 2026",
        content: `London is more than its iconic landmarks. While millions flock to see Big Ben and Buckingham Palace, the city's true magic lies in its hidden corners.

**Secret Gardens**: Tucked away in Clerkenwell, the Postman's Park offers a peaceful retreat with its touching memorial to heroic self-sacrifice. Meanwhile, the Kyoto Garden in Holland Park brings a slice of Japan to West London.

**Underground Bars**: Beneath the bustling streets, speakeasy-style bars like Evans & Peel Detective Agency require you to solve a "case" before entry. The Cahoots bar recreates a 1940s underground station with incredible attention to detail.

**Local Markets**: Skip Camden for the more authentic Maltby Street Market in Bermondsey, where local artisans and food vendors create a genuine community atmosphere every weekend.

**Historic Pubs**: The Ye Olde Cheshire Cheese on Fleet Street has been serving since 1538, with a maze of rooms and a resident parrot in the 19th century.

These hidden gems offer authentic London experiences away from tourist crowds, revealing the city's true character and charm.`
    },
    {
        id: 2,
        title: "NYC's Evolving Tech Scene in 2026",
        category: "US Business",
        excerpt: "How Silicon Alley is challenging the West Coast for tech dominance this year...",
        author: "Sarah Jenkins",
        date: "Jan 18, 2026",
        content: `New York City's tech ecosystem has reached a tipping point in 2026, with Silicon Alley now rivaling Silicon Valley in innovation and investment.

**The Numbers**: NYC tech companies raised over $40 billion in 2025, with fintech, AI, and healthcare tech leading the charge. Companies like Datadog, MongoDB, and emerging AI startups are choosing NYC over California.

**Why NYC?**: The convergence of finance, media, fashion, and healthcare creates unique opportunities. Tech companies can partner with Wall Street for fintech, Madison Avenue for adtech, and world-class hospitals for healthtech.

**Talent Pool**: Columbia, NYU, and Cornell Tech produce thousands of engineering graduates annually. The city's diversity attracts global talent, with over 800 languages spoken.

**Infrastructure**: Hudson Yards and Brooklyn Navy Yard have transformed into tech hubs. Co-working spaces and accelerators like Techstars NYC and ERA provide support for startups.

**Challenges**: High costs remain a barrier, but remote work has made NYC more accessible. The city's 24/7 culture and density foster collaboration and rapid iteration.

Silicon Alley is no longer just an alternative—it's becoming the first choice for many tech entrepreneurs.`
    },
    {
        id: 3,
        title: "Top 10 High-CPM Areas in Manchester",
        category: "Finance",
        excerpt: "Analyzing the residential zones attracting major advertising investments in the North...",
        author: "David Beck",
        date: "Jan 15, 2026",
        content: `Manchester's advertising market has exploded, with certain postcodes commanding premium CPM rates that rival London.

**The Top Areas**:
1. **Spinningfields (M3)**: The financial district attracts luxury brands with CPMs averaging £15-18.
2. **Deansgate (M3)**: High-end retail and dining drive premium ad rates.
3. **Northern Quarter (M4)**: Creative professionals and tech workers make this a goldmine for lifestyle brands.
4. **Ancoats (M4)**: The city's trendiest neighborhood attracts millennials and Gen Z.
5. **Castlefield (M15)**: Waterside living appeals to affluent professionals.

**Why Manchester?**: The city's population grew 15% in five years, with high-earning professionals relocating from London. Media City in Salford houses BBC and ITV, creating a media ecosystem.

**Investment Trends**: Property developers are targeting these areas, knowing advertising revenue follows affluent residents. Digital billboards in Spinningfields command £50+ CPM during peak hours.

**Future Outlook**: As HS2 connects Manchester to London in under 90 minutes, expect CPM rates to climb further. Smart advertisers are investing now before rates peak.

Manchester is proving that premium advertising markets exist beyond the capital, offering better ROI for brands willing to look north.`
    }
];

export default function BlogsPage() {
    const [expandedBlog, setExpandedBlog] = useState(null);

    return (
        <main className="section-padding container" style={{ marginTop: '80px' }}>
            <h1 className="text-center mb-4">City Insights & Blogs</h1>
            <p className="text-center mb-4" style={{ color: 'var(--color-gray-soft)' }}>
                Stay informed with the latest trends and stories from major UK and US cities.
            </p>

            <div style={{ maxWidth: '900px', margin: '40px auto', display: 'grid', gap: '30px' }}>
                {BLOGS.map(blog => (
                    <div key={blog.id} className="social-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                            <span className="stat-badge" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--color-primary)' }}>
                                {blog.category}
                            </span>
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-soft)' }}>{blog.date}</span>
                        </div>

                        <h2 className="mb-2" style={{ fontSize: '1.8rem' }}>{blog.title}</h2>

                        <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-soft)', marginBottom: '20px' }}>
                            By {blog.author} • {expandedBlog === blog.id ? '5 min read' : blog.excerpt}
                        </div>

                        {expandedBlog === blog.id && (
                            <div style={{
                                marginTop: '20px',
                                paddingTop: '20px',
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                lineHeight: '1.8',
                                color: 'var(--color-gray-soft)',
                                whiteSpace: 'pre-line'
                            }}>
                                {blog.content}
                            </div>
                        )}

                        <button
                            onClick={() => setExpandedBlog(expandedBlog === blog.id ? null : blog.id)}
                            className="btn-primary"
                            style={{ marginTop: '20px' }}
                        >
                            {expandedBlog === blog.id ? 'Show Less' : 'Read Full Article'}
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}
