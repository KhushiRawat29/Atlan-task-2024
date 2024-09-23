import React from 'react';

const MapSection = ({ location }) => {
  return (
    <div className="  rounded-2xl ml-8 md:mb-0" style={{ flex: 3 }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0, height: '500px', borderRadius: '1rem' }}
        src={`https://maps.gomaps.pro/maps/embed/v1/place?key=AlzaSyPVfHNGE4baFSmoqSUM5FWXl2KuybKnf_K&q=${encodeURIComponent(location)}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapSection;