import React, { useState } from 'react';
import axios from 'axios';

function UnsplashImage(props) {

    const searchTerm = props.eng;

    const [photo, setPhoto] = useState("");
    const [clientId] = useState("p_GGropTesmOciCX4HEH55tpZEKmBghvoVtefKSgxzA");

    const [result, setResult] = useState([]);

    function handleChange(event) {
        setPhoto(event.target.value);
    };

    function handleSubmit(event) {
        const url = "https://api.unsplash.com/search/photos/?page=1&query=" + searchTerm + "&client_id=" + clientId;

        axios.get(url).then(response => {
            console.log(response);
            setResult(response.data.results);
        });
    };
    
    return (
        <div>
            <input onChange={handleChange} type="text" name="photo" />
            <button onClick={handleSubmit} type="submit">Search</button>
            {result.map((photo) => (
                <img src={photo.urls.small} alt=""/>
            ))}
            <h1>{searchTerm}</h1>
        </div>
    )
}

export default UnsplashImage;