// useShake.js
import {useMotion} from 'react-use';
import {useEffect, useState} from 'react';

const useShake = (threshold = 15) => {
  const {acceleration} = useMotion();
  const [shake, setShake] = useState(false);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;
    let shakeCount = 0;

    if (acceleration) {
      const {x, y, z} = acceleration;

      if (lastX !== null && lastY !== null && lastZ !== null) {
        const deltaX = Math.abs(lastX - x);
        const deltaY = Math.abs(lastY - y);
        const deltaZ = Math.abs(lastZ - z);

        if (deltaX > threshold || deltaY > threshold || deltaZ > threshold) {
          shakeCount += 1;
        } else {
          shakeCount = Math.max(0, shakeCount - 1);
        }

        if (shakeCount > 2) {
          setShake(true);
          shakeCount = 0;
        }
      }

      lastX = x;
      lastY = y;
      lastZ = z;
    }
  }, [acceleration, threshold]);

  return shake;
};

export default useShake;
