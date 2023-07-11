import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import Values from 'values.js';

import styles from './singleColor.module.css';

interface ISingleColorProps {
  color: Values;
  index: number;
}

const SingleColor = ({ color, index }: ISingleColorProps) => {
  const { weight, hex } = color;

  const handleEvent = useCallback(
    async (event: React.MouseEvent | React.KeyboardEvent) => {
      if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') {
        return;
      }
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(`#${hex}`);
          toast.success('Copied');
        } catch (error) {
          toast.error('Failed to copy');
        }
      } else {
        toast.error('Clipboard not available');
      }
    },
    [hex],
  );

  return (
    <div
      onKeyDown={handleEvent}
      tabIndex={0}
      role="button"
      className={index < 10 ? styles.color : styles.colorLight}
      style={{ backgroundColor: `#${hex}` }}
      onClick={handleEvent}
    >
      <p className={styles.percentValue}>{weight}%</p>
      <p className={styles.colorValue}>#{hex}</p>
    </div>
  );
};

export default SingleColor;
