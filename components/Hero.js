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
                <p className={styles.subtitle}>Challenge Yourself</p>
                <h1 className={styles.title}>Earn Rewards from Quizzes</h1>
                <p className="mb-4" style={{ fontSize: '1.2rem', color: '#ccc' }}>
                    Test your knowledge about UK and US cities and earn points for every correct answer.
                </p>
                <div className={styles.buttons}>
                    <Link href="/quizzes" className="btn-primary">
                        Start Quiz
                    </Link>
                    <Link href="/tasks" className="btn-outline">
                        View Tasks
                    </Link>
                </div>
            </div>
        </section>
    );
}
