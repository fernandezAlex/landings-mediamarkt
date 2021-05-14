import { useState } from 'react';
import analytics from '../helpers/analytics';
import Modal from '../components/modal/Modal';

const useModal = (data) => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;