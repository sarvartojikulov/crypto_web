import React from 'react';

// made in https://maps-website.com/

// TODO: Change to link to google maps

const Map = () => {
  return (
    <div className="p-4 col-span-full bg-base-300 rounded-xl lg:col-span-5 shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41999.41634495697!2d2.31192984720446!3d48.85890599146447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z0J_QsNGA0LjQtiwg0KTRgNCw0L3RhtC40Y8!5e0!3m2!1sru!2sde!4v1663851396099!5m2!1sru!2sde"
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
