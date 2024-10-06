import React, { useEffect } from "react";

const MapComponent = ({ paths = [0, 0] }) => {
  const GoogleMapKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY;

  useEffect(() => {
    const loadGoogleMapsScript = (callback) => {
      const existingScript = document.getElementById("google-maps-script");
      if (!window.google && !existingScript) {
        const script = document.createElement("script");
        script.id = "google-maps-script";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GoogleMapKey}`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
          callback();
        };
      } else if (window.google && existingScript) {
        callback();
      }
    };

    const initMap = () => {
      const google = window.google;
      const grayscaleStyle = [
        {
          elementType: "geometry",
          stylers: [{ color: "#000000" }],
        },
        {
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#FFFFFF" }],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#555555" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [{ color: "#222222" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#222222" }],
        },
      ];

      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 10.3, lng: 123.5 },
        zoom: 8,
        styles: grayscaleStyle,
        disableDefaultUI: true,
      });
    };

    loadGoogleMapsScript(initMap);
  });

  return <div id="map" style={{ height: "400px", width: "100%" }} />;
};

export default MapComponent;
