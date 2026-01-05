import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.brand}>
                        <h2>HADER</h2>
                        <p>Five Star Luxury</p>
                    </div>
                    <div className={styles.info}>
                        <p>123 Luxury Avenue, Beverly Hills, CA 90210</p>
                        <p>+1 (555) 123-4567 | info@haderhotel.com</p>
                        <p>Mon - Sun: 5:00 PM - 11:00 PM</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Hader Five Star Hotel. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
