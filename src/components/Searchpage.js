import React,{ useState } from 'react';
import "../css/Searchpage.css"
const searchIcon=require('../images/searchicon.png')
function Searchpage() {
    const [location, setLocation] = useState(''); // Initialize state for location input
    const [locationsList, setLocationsList] = useState(['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']); // List of options for dropdown menu
  
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    }
  
    const handleLocationSelect = (location) => {
      setLocation(location);
    }
  return (
    <div className="search-page">
     <div className="search-bar">
     <div className="location">
        <select value={location} onChange={handleLocationChange}>
          <option value="">Select location</option>
          {locationsList.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div className="search-field">
        <input type="text" placeholder="Search" />
      </div>
      <img src={searchIcon} alt="Search" />
    </div>
    </div>
  );
}

export default Searchpage;
