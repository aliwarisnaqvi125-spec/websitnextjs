import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.brand}>
                        <h2>CITYPULSE</h2>
                        <p>Social Quiz Platform</p>
                    </div>
                    <div className={styles.info}>
                        <p>Connecting communities through city knowledge</p>
                        <p>support@citypulse.com | Follow us @CityPulse</p>
                        <p>Available 24/7 • UK & US Content</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} CityPulse. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
