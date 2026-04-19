'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { createBooking } from '@/lib/api';
import styles from './BookingForm.module.css';

interface Props {
  camperId: string;
}

export default function BookingForm({ camperId }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email');
      return;
    }

    setIsLoading(true);

    try {
      await createBooking(camperId, { name, email });
      toast.success('Booking request sent successfully!');
      setName('');
      setEmail('');
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.wrapper}>
      <Toaster position="top-right" />
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

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
