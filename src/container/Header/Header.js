import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';
import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Card from '../../components/Cards/Card';

const Header = () => {
  const [zones, setZones] = useState([]);
  const [city, setCities] = useState([]);
  const [specialité, setSpecialité] = useState([]);
  const [zoneId, setZoneId] = useState("");
  const [specialiteId, setSpecialiteId] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const getZonesByCity = async (cityId) => {
    try {
      const response = await axios.get(`/api/zones/city/${cityId}`);
      setZones(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getSpecialité = async () => {
    try {
      const response = await axios.get(`/api/specialities`);
      console.log(response);
      setSpecialité(response.data);


    } catch (error) {
      console.error(error);
    }
  };


  const fetchCities = async () => {
    try {
      const response = await axios.get('/api/cities/');
      setCities(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleCountry = (event) => {
    const id = event.target.value;

    getZonesByCity(id);
  };

  useEffect(() => {

    fetchCities();

    getSpecialité();

  }, []);
  const handleZoneChange = (event) => {
    const id = event.target.value;
    setZoneId(id);
  };

  const handleSpecialiteChange = (event) => {
    const id = event.target.value;
    setSpecialiteId(id);
  };

  const getRestaurantsByZoneAndSpecialite = async () => {
    try {
      const response = await axios.get(`/api/restos/zone/${zoneId}/specialites/${specialiteId}`);
      setRestaurants(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEnvoyerClick = () => {
    if (zoneId && specialiteId) {
      getRestaurantsByZoneAndSpecialite();
    }
  };
  useEffect(() => {
    if (zoneId && specialiteId) {
      getRestaurantsByZoneAndSpecialite();
    }
  }, [zoneId, specialiteId]);
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading />
        <h1 className='app__header-h1'>Bienvenue!</h1>
        <div className="row mb-3">
          <div className="form-group-col-md-4">
            <label className="app__header-label">Country</label><tr></tr>
            <select name="city" className="form-control" onChange={(e) => handleCountry(e)}>
              <option>--Selectionnez  ville--</option>
              {city.map((city) => (
                <option key={city._id} value={city._id}> {city.name}</option>
              ))
              }

            </select>
          </div><pre />
          <div className="form-group-col-md-4">
            <label className="app__header-label">Zone</label><br></br>
            <select name="state" id="state" className="form-control" onChange={(e) => handleZoneChange(e)}>
              <option>--Selectionnez Zone--</option>
              {zones.map((zone) => (
                <option key={zone._id} value={zone._id}>{zone.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group-col-md-4">
            <label className="app__header-label">Specialité</label><br></br>
            <select name="specialité" id="specialité" className="form-control" onChange={(e) => handleSpecialiteChange(e)}>
              <option>--Selectionnez Specialité--</option>
              {specialité.map((spécialité) => (
                <option key={spécialité._id} value={spécialité._id}>{spécialité.name}</option>
              ))}
            </select>
            <div className="form-group-col-md-4">
              <label className="app__header-label">Restaurants</label>
              <br />
                {restaurants.map((restaurant) => (
                  <div  key={restaurant._id}>

                    <Card image={restaurant.image} name={restaurant.name} />

                  </div>
                ))}
            
            </div>

          </div>
        </div>

        {/* <button type="button" className='custom__button' >Envoyer</button> */}
      </div>
      {/* <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header img" />
      </div> */}

    </div>


  )
}

export default Header;
