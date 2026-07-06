"use strict"

async function getRandomColorScheme() {
    const endpoint = "http://localhost:8080/api/v1/getRandomColorScheme";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        return console.log(response)
        // const receivedScheme = returnedData.data;
        // console.log(receivedScheme)
        // console.log(response)
        // const imgDiv = document.querySelector(".background-img");
        // imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error(error);
    }
}



getRandomColorScheme();