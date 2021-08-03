const allUrl = "http://localhost:3000/"

const getAll = (directory, min, max) => {
    fetch(`${allUrl}${directory}/${randomId(min, max)}`)
    .then(resp => resp.json())
    .then(char => renderFirstChar(char))
}
const getAllTwo = (directory, min, max) => {
    fetch(`${allUrl}${directory}/${randomId(min, max)}`)
    .then(resp => resp.json())
    .then(char => renderSecondChar(char))
}

const randomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const renderFirstChar = (char) => {
    const imageOne = finder("#char-one-img");
    imageOne.src = char.img;

    const nameOne = finder("#char-one-name");
    nameOne.innerText = char.name;
    
    const votesOne = finder("#char-one-votes")
    votesOne.innerText = `Votes: ${char.votes}`;

    const originOne = finder("#char-one-origin")
    originOne.innerText = char.origin;  
}

const renderSecondChar = (char) => {
    const imageTwo = finder("#char-two-img");
    imageTwo.src = char.img;

    const nameTwo = finder("#char-two-name");
    nameTwo.innerText = char.name;

    const votesTwo = finder("#char-two-votes")
    votesTwo.innerText = `Votes: ${char.votes}`;

    const originTwo = finder("#char-two-origin")
    originTwo.innerText = char.origin;
}

const finder = (type) => {
    return document.querySelector(type)
}

const btnEvents = () => {
    const marvelButton = finder("#marvel");
    marvelButton.addEventListener("click", e => getMarvel())
    
    const dcButton = finder("#dc");
    dcButton.addEventListener("click", e => getDC())
    
    const animeButton = finder("#anime");
    animeButton.addEventListener("click", e => getAnime())

    const moviesButton = finder("#movie");
    moviesButton.addEventListener("click", e => getMovies())

    const vgButton = finder("#video-game");
    vgButton.addEventListener("click", e => getVG())

    const marvelButtonTwo = finder("#marvel-two");
    marvelButtonTwo.addEventListener("click", e => getMarvelTwo())

    const dcButtonTwo = finder("#dc-two");
    dcButtonTwo.addEventListener("click", e => getDCTwo())

    const animeButtonTwo = finder("#anime-two");
    animeButtonTwo.addEventListener("click", e => getAnimeTwo())

    const moviesButtonTwo = finder("#movie-two");
    moviesButtonTwo.addEventListener("click", e => getMoviesTwo())

    const vgButtonTwo = finder("#video-game-two");
    vgButtonTwo.addEventListener("click", e => getVGTwo())

    const randomButton = finder("#random-button")
    randomButton.addEventListener("click", e=> getRandom() )
}
btnEvents();

const getMarvel = () => {
     getAll("marvel","88","128")
}

const getDC = () => {
    getAll("dc","129","144")
}

const getAnime = () => {
    getAll("anime","145","159")
}

const getMovies = () => {
    getAll("movies","1","37")
}

const getVG = () => {
    getAll("videogames","38","87")
}

const getMarvelTwo = () => {
    getAllTwo("marvel","88","128")
}

const getDCTwo = () => {
   getAllTwo("dc","129","144")
}

const getAnimeTwo = () => {
   getAllTwo("anime","145","159")
}

const getMoviesTwo = () => {
   getAllTwo("movies","1","37")
}

const getVGTwo = () => {
   getAllTwo("videogames","38","87")
}

//  const getRandom = () => {
    
//     randomFirst();
//     randomSecond();
     

//    // getAll(`${optionGrabber()}`, "1", "159");
//    //getAllTwo(`${optionGrabber()}`, "1", "159");
//  }

//  const optionGrabber = () => {
//    let options = ["marvel", "dc", "videogames", "movies", "anime"]
//    return options[Math.floor(Math.random() * options.length)];
//  }

// function randomFirst () {
//     const result = optionGrabber();
//     let values = [];
//     if (result.toString() === "marvel") {
//         values.push("marvel", "88", "128");
//     } else if (result.toString() === "dc") {
//         values.push("dc", "129", "144");
//     } else if (result.toString() === "videogames") {
//         values.push("videogames", "38", "87");
//     } else if (result.toString() === "movies") {
//         values.push("movies", "1", "37");
//     } else if (result.toString() === "anime") {
//         values.push("anime", "145", "159");
//     }
//     getAll(`${values[0]}, ${parseInt.values[1]}, ${parseInt.values[2]}`);
// }
// function randomSecond () {
//     const result = optionGrabber();
//     let values = [];
//     if (result.toString() === "marvel") {
//         values.push("marvel", "88", "128");
//     } else if (result.toString() === "dc") {
//         values.push("dc", "129", "144");
//     } else if (result.toString() === "videogames") {
//         values.push("videogames", "38", "87");
//     } else if (result.toString() === "movies") {
//         values.push("movies", "1", "37");
//     } else if (result.toString() === "anime") {
//         values.push("anime", "145", "159");
//     }
//     getAllTwo(`${values[0]},${parseInt.values[1]}, parse${values[2]}`);
//  }


