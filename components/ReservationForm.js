"use client";
import { useState } from 'react';
import styles from './ReservationForm.module.css';

export default function ReservationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your table for ${formData.guests} on ${formData.date} at ${formData.time} has been requested.`);
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label className={styles.label}>Date</label>
                        <input
                            type="date"
                            name="date"
                            required
                            className={styles.input}
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className={styles.label}>Time</label>
                        <input
                            type="time"
                            name="time"
                            required
                            className={styles.input}
                            value={formData.time}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Number of Guests</label>
                    <select
                        name="guests"
                        className={styles.select}
                        value={formData.guests}
                        onChange={handleChange}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>{num} People</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className={styles.submitBtn}>
                    Request Reservation
                </button>
            </form>
        </div>
    );
}
