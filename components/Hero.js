import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}>
                <Image
                    src="/images/hero.png"
                    alt="Luxury Dining Hall"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    priority
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <p className={styles.subtitle}>Welcome to</p>
                <h1 className={styles.title}>Hader Five Star Hotel</h1>
                <p className="mb-4" style={{ fontSize: '1.2rem', color: '#ccc' }}>
                    Where culinary art meets timeless elegance.
                </p>
                <div className={styles.buttons}>
                    <Link href="/menu" className="btn-primary">
                        View Menu
                    </Link>
                    <Link href="/reservations" className="btn-outline">
                        Book a Table
                    </Link>
                </div>
            </div>
        </section>
    );
}
