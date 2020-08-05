import { useState } from 'react';
const useCounter = (initialState = 10) => {
    const [count, setstate] = useState(initialState);

    const reset = () => {
        setstate(count);
    }
    const increment = () => {
        setstate(count + 1);
    }
    const decrement = () => {
      setstate(count - 1);
    };
    return {
      count,
      reset,
      increment,
      decrement,
    };
}
 
export default useCounter;