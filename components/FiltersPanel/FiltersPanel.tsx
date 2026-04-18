'use client';

import { useState } from 'react';
import { FiltersType, CamperForm, Engine, Transmission } from '@/types/camper';
import { IoLocationOutline, IoCloseOutline } from 'react-icons/io5';
import styles from './FiltersPanel.module.css';

interface Props {
  onFilter: (filters: FiltersType) => void;
}

export default function Filters({ onFilter }: Props) {
  const [location, setLocation] = useState('');
  const [form, setForm] = useState<CamperForm | ''>('');
  const [engine, setEngine] = useState<Engine | ''>('');
  const [transmission, setTransmission] = useState<Transmission | ''>('');

  const handleSearch = () => {
    onFilter({
      location: location || undefined,
      form: form || undefined,
      engine: engine || undefined,
      transmission: transmission || undefined,
    });
  };

  const handleClear = () => {
    setLocation('');
    setForm('');
    setEngine('');
    setTransmission('');
    onFilter({});
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.group}>
        <label className={styles.label}>Location</label>
        <div className={styles.inputWrapper}>
          <IoLocationOutline className={styles.inputIcon} />
          <input
            className={styles.input}
            type="text"
            placeholder="City"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>
      </div>

      <p className={styles.filtersTitle}>Filters</p>

      <div className={styles.group}>
        <p className={styles.groupTitle}>Camper form</p>
        {(['alcove', 'panel_van', 'integrated', 'semi_integrated'] as CamperForm[]).map(type => (
          <label key={type} className={styles.radioLabel}>
            <input
              type="radio"
              name="form"
              value={type}
              checked={form === type}
              onChange={() => setForm(type)}
            />
            {type.replace('_', ' ')}
          </label>
        ))}
      </div>

      <div className={styles.group}>
        <p className={styles.groupTitle}>Engine</p>
        {(['diesel', 'petrol', 'hybrid', 'electric'] as Engine[]).map(type => (
          <label key={type} className={styles.radioLabel}>
            <input
              type="radio"
              name="engine"
              value={type}
              checked={engine === type}
              onChange={() => setEngine(type)}
            />
            {type}
          </label>
        ))}
      </div>

      <div className={styles.group}>
        <p className={styles.groupTitle}>Transmission</p>
        {(['automatic', 'manual'] as Transmission[]).map(type => (
          <label key={type} className={styles.radioLabel}>
            <input
              type="radio"
              name="transmission"
              value={type}
              checked={transmission === type}
              onChange={() => setTransmission(type)}
            />
            {type}
          </label>
        ))}
      </div>

      <button className={styles.btnSearch} onClick={handleSearch}>
        Search
      </button>
      <button className={styles.btnClear} onClick={handleClear}>
        <IoCloseOutline />
        Clear filters
      </button>
    </aside>
  );
}
