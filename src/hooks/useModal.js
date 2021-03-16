import { useState } from 'react';
import analytics from '../helpers/analytics';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
    analytics("gaEvent", "Home_B2B_ED", "Click", "Home_B2B_EDUCACION_ver_video" )
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;