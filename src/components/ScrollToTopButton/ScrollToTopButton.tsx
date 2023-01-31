/* eslint-disable @next/next/no-img-element */
'use client';

import { memo, useEffect, useState } from 'react';
import './styles.css';

/**
 *
 * @todo:
 * - The button should always be at the right bottom of the page
 * - The button should be hidden and should only appear when we scroll for a certain height eg: ~200px
 * - On clicking it, we should be smoothly taken to the top of the page
 *
 *
 */
function ScrollToTopButton() {
  const [buttonVisible, setButtonVisible] = useState(false)

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scroll = () => {
    setButtonVisible(window.scrollY >= 200)
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  })

  return (
    <div>
      {
        buttonVisible && 
      <button className="btn right-bottom-btn" onClick={handleGoToTop}>Go to Top</button>
      }
    </div>
  );
}

export default memo(ScrollToTopButton);
