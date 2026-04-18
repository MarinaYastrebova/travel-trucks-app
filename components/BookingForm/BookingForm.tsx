'use client';

import { useState } from 'react';
import { createBooking } from '@/lib/api';
import styles from './BookingForm.module.css';

interface Props {
  camperId: string;
}

export default function BookingForm({ camperId }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await createBooking(camperId, { name, email });
      setSuccess(true);
      setName('');
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

      {success && (
        <div className={styles.success}>
          ✅ Booking request sent successfully!
          <button className={styles.closeBtn} onClick={() => setSuccess(false)}>
            ✕
          </button>
        </div>
      )}

      {error && (
        <div className={styles.error}>
          {error}
          <button className={styles.closeBtn} onClick={() => setError('')}>
            ✕
          </button>
        </div>
      )}

      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name*"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email*"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className={styles.btn} onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
