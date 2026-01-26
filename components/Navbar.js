"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    CITYPULSE
                </Link>
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/quizzes" className={styles.navLink}>Quizzes</Link>
                    <Link href="/tasks" className={styles.navLink}>Tasks</Link>
                    <Link href="/cities" className={styles.navLink}>Cities</Link>
                    <Link href="/blogs" className={styles.navLink}>Blogs</Link>
                </div>
            </div>
        </nav>
    );
}
