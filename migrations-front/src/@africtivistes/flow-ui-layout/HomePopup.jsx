import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage } from "gatsby-plugin-react-intl"

const HomePopup = ({ handleFormOpen }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const handleOpenAndClose = () => {
    handleFormOpen();
    handleClose();
  };


  const handleClose = () => {
    setShowPopup(false);
    const isVisited = localStorage.getItem('visited');
    if (!isVisited) {
      localStorage.setItem('visited', 'true');
    }
  };

  useEffect(() => {
    const isVisited = localStorage.getItem('visited');

    if (!isVisited) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3600); // ajustez le délai si nécessaire
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!showPopup) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div ref={popupRef} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxWidth: '400px', overflowY: 'auto' }}>
        <p style={{ marginLeft: '30px' }} >
          <FormattedMessage id="popup_desc" />
        <button onClick={handleOpenAndClose} style={{ color: 'black', background: "#ffd42d" }}>
          <FormattedMessage id='popup_accept'/>
        </button>
        <button onClick={handleClose} style={{ marginLeft: '10px', color: 'white', background: "#87311B" }}>
          <FormattedMessage id='popup_decline'/>
        </button>
      </p>

      </div>
    </div>
  );
};

export default HomePopup;
