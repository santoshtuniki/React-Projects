import React, { useEffect, useState } from 'react';

function App() {
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        const getUserLocation = () => {
            // if geolocation is supported by the users browser
            if ("geolocation" in navigator) {
                // get the current users location
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        console.log(position)
                        const { latitude, longitude } = position.coords;
                        setUserLocation({ latitude, longitude });
                    },
                    // if there was an error getting the users location
                    (error) => {
                        console.error('Error getting user location:', error);
                    }
                );
            }
            // if geolocation is not supported by the users browser
            else {
                console.error('Geolocation is not supported by this browser.');
            }
        };
        getUserLocation()
    }, [])

    return (
        <div>
            <h1>Geolocation App</h1>
            {
                userLocation &&
                <div>
                    <h2>User Location</h2>
                    <p>Latitude: {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                </div>
            }
        </div>
    );
}

export default App;