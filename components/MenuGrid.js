"use client";

import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './MenuGrid.module.css';

const menuCategories = [
    {
        name: "Starters",
        items: [
            {
                id: 101,
                name: 'Pan-Seared Scallops',
                description: 'Fresh Atlantic scallops with gold leaf garnish and citrus reduction.',
                price: '$45',
                image: '/images/scallops.png',
            },
            {
                id: 102,
                name: 'Truffle Arancini',
                description: 'Crispy risotto balls infused with black truffle oil and parmesan.',
                price: '$24',
                image: '/images/arancini.png',
            },
            {
                id: 103,
                name: 'Lobster Bisque',
                description: 'Creamy soup with chunks of Maine lobster and cognac.',
                price: '$32',
                image: '/images/bisque.png',
            }
        ]
    },
    {
        name: "Mains",
        items: [
            {
                id: 201,
                name: 'Wagyu Ribeye Steak',
                description: 'A5 Wagyu beef served with truffle mashed potatoes and asparagus.',
                price: '$120',
                image: '/images/steak.png',
            },
            {
                id: 202,
                name: 'Miso Glazed Black Cod',
                description: 'Sustainably sourced cod marinated in sweet miso and sake.',
                price: '$55',
                image: '/images/cod.png',
            },
            {
                id: 203,
                name: 'Lamb Chops',
                description: 'Herb-crusted rack of lamb with rosemary jus and roasted vegetables.',
                price: '$65',
                image: '/images/lamb.png',
            },
            {
                id: 204,
                name: 'Wild Mushroom Risotto',
                description: 'Arborio rice with porcini mushrooms, parmesan, and white truffle oil.',
                price: '$38',
                image: '/images/risotto.png',
            }
        ]
    },
    {
        name: "Desserts",
        items: [
            {
                id: 301,
                name: 'Chocolate Molten Cake',
                description: 'Warm dark chocolate fondant with Madagascar vanilla bean ice cream.',
                price: '$28',
                image: '/images/dessert.png',
            },
            {
                id: 302,
                name: 'Gold Leaf Macarons',
                description: 'Assortment of premium macarons dusted with 24k edible gold.',
                price: '$22',
                image: '/images/macarons.png',
            },
            {
                id: 303,
                name: 'Berry Tart',
                description: 'Fresh seasonal berries on a vanilla custard and butter pastry.',
                price: '$20',
                image: '/images/tart.png',
            }
        ]
    }
];

export default function MenuGrid({ category }) {
    const { addToCart } = useCart();

    const displayCategories = category
        ? menuCategories.filter(c => c.name.toLowerCase() === category.toLowerCase())
        : menuCategories;

    return (
        <div className={styles.menuContainer}>
            {displayCategories.map((cat) => (
                <div key={cat.name} className={styles.categorySection}>
                    <h2 className="text-3d mb-4 text-center">{cat.name}</h2>
                    <div className={styles.grid}>
                        {cat.items.map((item) => (
                            <div key={item.id} className={`card-3d ${styles.card}`}>
                                <div className={styles.imageContainer}>
                                    {/* Using a placeholder for items without specific images if needed, 
                                        but sticking to the ones referenced or generic 3d placeholders could be good. 
                                        For now, assuming Next/Image handling handles missing images gracefully or we need to add them. 
                                        Since I can't generate images right this second without user prompt, I will assume these paths exist or user adds them.
                                    */}
                                    <div className={styles.placeholderImg} style={{ background: '#222', width: '100%', height: '100%' }}></div>
                                    {/* 
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    */}
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.header}>
                                        <h3 className={styles.cardTitle}>{item.name}</h3>
                                        <p className={styles.price}>{item.price}</p>
                                    </div>
                                    <p className={styles.description}>{item.description}</p>
                                    <button
                                        className={styles.addBtn}
                                        onClick={() => addToCart(item)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
