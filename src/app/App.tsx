import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Values from 'values.js';

import ColorList from '../features/ColorList/ColorList';
import Form from '../features/Form/Form';

const App = () => {
  const [colors, setColors] = useState<Values[]>(new Values('#f15025').all(10));

  const addColor = (color: string) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position={'top-center'} />
    </main>
  );
};

export default App;
