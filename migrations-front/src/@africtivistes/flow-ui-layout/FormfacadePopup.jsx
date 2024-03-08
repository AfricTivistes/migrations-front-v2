import React, { useEffect, useRef } from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";

const FormfacadePopup = ({ showForm, handleFormClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleFormClose(); // Fermer le pop-up si le clic est en dehors de sa zone
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleFormClose]);

  if (!showForm) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div ref={popupRef} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxHeight: '700px', overflowY: 'auto' }}>
        <button onClick={handleFormClose} style={{ position: 'absolute', color: '#87311b', top: '10px', right: '10px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '40px', zIndex: 1000 }}>X</button>
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/118153640554420840284/form/1FAIpQLSe-UAAW-KeVdPdCWbYec2usddrOSzVdq6RORFMDOJDjzubtfQ/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log('Form submitted')}
        />

      </div>
    </div>
  );
};

export default FormfacadePopup;
