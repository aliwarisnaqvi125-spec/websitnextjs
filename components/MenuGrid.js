import Image from 'next/image';
import styles from './MenuGrid.module.css';

const menuItems = [
    {
        id: 1,
        name: 'Pan-Seared Scallops',
        description: 'Fresh Atlantic scallops with gold leaf garnish and citrus reduction.',
        price: '$45',
        image: '/images/scallops.png',
    },
    {
        id: 2,
        name: 'Wagyu Ribeye Steak',
        description: 'A5 Wagyu beef served with truffle mashed potatoes and asparagus.',
        price: '$120',
        image: '/images/steak.png',
    },
    {
        id: 3,
        name: 'Chocolate Molten Cake',
        description: 'Warm dark chocolate fondant with Madagascar vanilla bean ice cream.',
        price: '$28',
        image: '/images/dessert.png',
    },
];

export default function MenuGrid() {
    return (
        <div className={styles.grid}>
            {menuItems.map((item) => (
                <div key={item.id} className={styles.card}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{item.name}</h3>
                        <p className={styles.description}>{item.description}</p>
                        <p className={styles.price}>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
