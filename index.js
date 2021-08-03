// const apiUrl = "https://www.superheroapi.com/api.php/2391311497678966/"

// const firstCardData = () => {
//     fetch(`${apiUrl}${randomId(1, 731)}`)
//     .then(resp => resp.json())
//     .then(char => renderFirstChar(char))
// }

// const secondCardData = () => {
//     fetch(`${apiUrl}${randomId(1, 731)}`)
//     .then(resp => resp.json())
//     .then(char => renderSecondChar(char))
// }

const marvelUrl = ""
const dcUrl = ""
const movieUrl = ""
const animeUrl = ""
const videoGameUrl = ""

const getMarvel = () => {

}

const getDc = () => {

}

const getVideoGame = () => {

}

const getMovie = () => {

}

const getAnime = () => {

}

const randomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


const renderFirstChar = (char) => {
    const imageOne = finder("#char-one-img");
    imageOne.src = char.image.url;

    const nameOne = finder("#char-one-name");
    nameOne.innerText = char.name;

    const raceOne = finder("#char-one-race");
    raceOne.innerText = `Race: ${char.appearance.race}`;
    
    const genderOne = finder("#char-one-gender");
    genderOne.innerText = `Gender: ${char.appearance.gender}`;
    
    const heightOne = finder("#char-one-height");
    heightOne.innerText = `Height: ${char.appearance.height[0]}`;
    
    const weightOne = finder("#char-one-weight");
    weightOne.innerText = `Weight: ${char.appearance.weight[0]}`;
    
    const originOne = finder("#char-one-publisher");
    originOne.innerText = `Origin: ${char.biography.publisher}`;
}

const renderSecondChar = (char) => {
    const imageTwo = finder("#char-two-img");
    imageTwo.src = char.image.url;

    const nameTwo = finder("#char-two-name");
    nameTwo.innerText = char.name;

    const raceTwo = finder("#char-two-race");
    raceTwo.innerText = `Race: ${char.appearance.race}`;
    
    const genderTwo = finder("#char-two-gender");
    genderTwo.innerText = `Gender: ${char.appearance.gender}`;
    
    const heightTwo = finder("#char-two-height");
    heightTwo.innerText = `Height: ${char.appearance.height[0]}`;
    
    const weightTwo = finder("#char-two-weight");
    weightTwo.innerText = `Weight: ${char.appearance.weight[0]}`;
    
    const originTwo = finder("#char-two-publisher");
    originTwo.innerText = `Origin: ${char.biography.publisher}`;
}

const init = () => {
    firstCardData();
    secondCardData();
}


const finder = (type) => {
    return document.querySelector(type)
}