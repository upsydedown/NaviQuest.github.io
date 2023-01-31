import React, { useState, useEffect } from 'react';
import "./Searchbox.css"
import { polygon } from 'leaflet';

const MAP_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const params = {
    q: '',
    format: 'json',
    addressdetails: 'addressdetails',

}

const Searchbox = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const [filteredHistory, setFilteredHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        const history = localStorage.getItem('searchHistory');
        if (history) {
            setSearchHistory(JSON.parse(history));
        }
    }, []);

    const handleSearch = event => {
        setSearchValue(event.target.value);
        if (!searchValue) {
            setFilteredHistory(searchHistory);
        } else { //Add link here
            setFilteredHistory(
                searchHistory.filter(item =>
                    item.toLowerCase().includes(searchValue.toLowerCase())
                )
            );
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        const updatedSearchHistory = [...searchHistory, searchValue];
        localStorage.setItem('searchHistory', JSON.stringify(updatedSearchHistory));
        setSearchHistory(updatedSearchHistory);
        setFilteredHistory(updatedSearchHistory);
        setSearchValue('');
    };

    const handleInputFocus = () => {
        setShowHistory(true);
    };

    const handleInputBlur = () => {
        setShowHistory(false);
    };


    return (
        <>
            <div className="Searchbox">
                <form onSubmit={handleSubmit}>
                    <div className="Searchbar" >
                        <input type="text"
                            placeholder='Search Here'
                            value={searchValue}
                            onChange={handleSearch}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur} />
                        
                        <span id='Search_btn'><button onClick={() => {
                            
                            const params = {
                                q: searchValue,
                                format: 'json',
                                addressdetails: '1',
                                polygon_geojson: 1,
                            };
                           
                            const queryString = new URLSearchParams(params).toString();
                            
                            const requestOptions = {
                                method: 'GET',
                                redirect: 'follow',
                            };
                            
                            fetch(`${MAP_BASE_URL}${queryString}`, requestOptions)
                                .then((response) => response.text())
                                .then((result) => {
                                    console.log(JSON.parse(result));
                                }).catch((error) => console.log("error: ", error));
                        }}>Search</button></span>
                    
                    </div>
                    
                    <div className="Search_list">
                        {filteredHistory.length > 0 && (
                            <ul>
                                {filteredHistory.reverse().map((item, index) => (
                                    <li key={index}><img style={{ width: '1.1rem' }} src="./images/list.gif" alt="" srcset="" /> {item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}

export default Searchbox;

