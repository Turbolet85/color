import React, { useState } from 'react';

import styles from './form.module.css';

interface IForm {
  addColor: (param: string) => void;
}

const Form = ({ addColor }: IForm) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className={styles.container}>
      <h4>color generator</h4>
      <form className={styles.colorForm} onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          placeholder={'#f15025'}
        />
        <button type={'submit'} className={'btn'} style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
