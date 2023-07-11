import { v4 } from 'uuid';
import Values from 'values.js';

import SingleColor from '../SingleColor/SingleColor';
import styles from './colorList.module.css';

interface IColorListProps {
  colors: Values[];
}

const ColorList = ({ colors }: IColorListProps) => {
  return (
    <section className={styles.colors}>
      {colors.map((color, index) => {
        return <SingleColor color={color} key={v4()} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
