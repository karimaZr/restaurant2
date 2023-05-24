import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Home = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyDrZw-Dx95OTIhPBqcO14HU8ptHXhwBxpc",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return(

 
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
 );
}


export default Home;
