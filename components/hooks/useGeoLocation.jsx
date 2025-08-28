import React, { useState, useEffect } from "react";
import axios from "axios";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    location: "",
    area: "",
    error: null,
  });

  const onSuccess = (location) => {
    const { latitude, longitude } = location.coords;

    setLocation((prevState) => ({
      ...prevState,
      loaded: true,
      coordinates: { lat: latitude, lng: longitude },
    }));

    fetchAreaName(latitude, longitude);
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      coordinates: { lat: "", lng: "" },
      location: "",
      area: "",
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  const fetchAreaName = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCYjQseoBgnu7Le5t9vRp-bZ1oBq7x39vM`
      );
      const address = response.data.results[0].formatted_address;

      setLocation((prevState) => ({
        ...prevState,
        area: address,
      }));
    } catch (error) {
      console.error("Error fetching area name:", error);
      setLocation((prevState) => ({
        ...prevState,
        area: "Unable to fetch area name",
      }));
    }
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
