import React from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";

const FormfacadePopup = ({ showForm, handleFormClose }) => {
  if (!showForm) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxHeight: '700px', overflowY: 'auto' }}>
        <button onClick={handleFormClose} style={{ position: 'absolute', color:'#87311b', top: '10px', right: '10px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '40px', zIndex: 1000 }}>X</button>
        <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/118153640554420840284/form/1FAIpQLSe-UAAW-KeVdPdCWbYec2usddrOSzVdq6RORFMDOJDjzubtfQ/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log('Form submitted')}
        />

      </div>
    </div>
  );
};

export default FormfacadePopup;
