import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.1891670347864!2d10.235599975304753!3d36.83794536557183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3540a495547b%3A0xaa9a8b03476f73fd!2sLac%201%20Mosque!5e0!3m2!1sen!2stn!4v1753698183771!5m2!1sen!2stn"
        width="600"
        height="450"
        style={{ border: 0, margin: "auto" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>  
    </div>
  );
};

export default Map;
