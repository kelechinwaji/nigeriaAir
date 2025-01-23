/* eslint-disable  @typescript-eslint/no-explicit-any*/

"use client";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const center = {
  lat: 6.59669,
  lng: 3.32664,
  //   lat: 6.596691376147706,
  //   lng: 3.3266413769522907,
};

function LocateUs() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
  });
  const [_, setMap] = React.useState(null); //eslint-disable-line

  // const onLoad = React.useCallback(function callback(map: any) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   // map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="py-10 px-5 bg-white lg:py-20 lg:px-24 ">
      <GoogleMap
        mapContainerClassName="w-full h-[25rem]"
        center={center}
        zoom={15}
        // onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          fullscreenControl: false,
          zoomControl: false,
          streetViewControl: false,
        }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
        <div className="size-6 bg-red-10"></div>
        <Marker position={center} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default LocateUs;
