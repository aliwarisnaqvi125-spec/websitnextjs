"use client";

import { useCart } from '@/context/CartContext';
import styles from './CartModal.module.css';

export default function CartModal() {
    const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

    if (!isCartOpen) return null;

    const handleCheckout = () => {
        alert("Thank you for your order! This is a demo checkout.");
        clearCart();
        setIsCartOpen(false);
    };

    return (
        <div className={styles.overlay} onClick={() => setIsCartOpen(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>Your Order</h2>
                    <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>×</button>
                </div>

                <div className={styles.body}>
                    {cartItems.length === 0 ? (
                        <p className={styles.empty}>Your cart is empty.</p>
                    ) : (
                        <ul className={styles.list}>
                            {cartItems.map((item) => (
                                <li key={item.id} className={styles.item}>
                                    <div className={styles.info}>
                                        <span className={styles.name}>{item.name}</span>
                                        <span className={styles.price}>{item.price}</span>
                                    </div>
                                    <div className={styles.controls}>
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        <button className={styles.remove} onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className={styles.footer}>
                    <div className={styles.total}>
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                        className={styles.checkoutBtn}
                        disabled={cartItems.length === 0}
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
