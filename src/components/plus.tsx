import { useState } from 'react'
import Model from 'react-modal'
import Form from './form';

export default function Plus() {
    const [visible, setvisible] = useState(false);

  return (
    <div>
      <button onClick={() => setvisible(true)}>open modal</button>
      <Model isOpen={visible}>
        <Form />
        <button onClick={() => setvisible(false)}>Back</button>
      </Model>
    </div>
  );
}
