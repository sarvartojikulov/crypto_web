import React from 'react';

// made in https://maps-website.com/

// };
const Map = () => {
  return (
    <div className="p-4 col-span-full bg-base-300 rounded-xl lg:col-span-5 shadow-lg">
      <iframe
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Aleja%20Solidarno%C5%9Bci%20117%20lokal%20Warsaw+(KRYPTO%20SWAP)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="450"
        style={{ borderRadius: '12px' }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=6bc63d52f96c124a02dd197bd3a8d582f122ef13"
      ></script>
    </div>
  );
};

export default Map;
