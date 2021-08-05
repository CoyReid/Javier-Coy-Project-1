const allUrl = "http://localhost:3000/";
const charForm = document.getElementById("submission-form");

document.addEventListener("DOMContentLoaded", function() {
    btnEvents();
    charForm.addEventListener("submit", e => addChar(e));
})

const btnEvents = () => {
    const marvelButton = finder("#marvel");
    marvelButton.addEventListener("click", e => getAll("marvel","88","128"));
    
    const dcButton = finder("#dc");
    dcButton.addEventListener("click", e => getAll("dc","129","144"));
    
    const animeButton = finder("#anime");
    animeButton.addEventListener("click", e => getAll("anime","145","159"));

    const moviesButton = finder("#movie");
    moviesButton.addEventListener("click", e => getAll("movies","1","37"));

    const vgButton = finder("#video-game");
    vgButton.addEventListener("click", e => getAll("videogames","38","87"));

    const marvelButtonTwo = finder("#marvel-two");
    marvelButtonTwo.addEventListener("click", e => getAllTwo("marvel","88","128"));

    const dcButtonTwo = finder("#dc-two");
    dcButtonTwo.addEventListener("click", e => getAllTwo("dc","129","144"));

    const animeButtonTwo = finder("#anime-two");
    animeButtonTwo.addEventListener("click", e => getAllTwo("anime","145","159"));

    const moviesButtonTwo = finder("#movie-two");
    moviesButtonTwo.addEventListener("click", e => getAllTwo("movies","1","37"));

    const vgButtonTwo = finder("#video-game-two");
    vgButtonTwo.addEventListener("click", e => getAllTwo("videogames","38","87"));

    const voteButtonOne = finder("#vote-button-one");
    voteButtonOne.addEventListener("click", e => showVotes());

    const voteButtonTwo = finder("#vote-button-two");
    voteButtonTwo.addEventListener("click", e => showVotes());
    
    const randomButton = finder("#random-button");
    randomButton.addEventListener("click", e=> getRandom());
}

const getAll = (directory, min, max) => {
    fetch(`${allUrl}${directory}/${randomId(min, max)}`)
    .then(resp => resp.json())
    .then(char => renderFirstChar(char))
    hideVotes();
}

const getAllTwo = (directory, min, max) => {
    fetch(`${allUrl}${directory}/${randomId(min, max)}`)
    .then(resp => resp.json())
    .then(char => renderSecondChar(char))
    hideVotes();
}

const hideVotes = () => {
    const votesOne = finder("#char-one-votes")
    votesOne.style.display = "none"
    const votesTwo = finder("#char-two-votes")
    votesTwo.style.display = "none"
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
    originOne.value = char.id;  

    if (char.id < 38) {
        nameOne.value = "movies";
    } else if (char.id > 37 && char.id < 88) {
        nameOne.value = "videogames";
    } else if (char.id > 87 && char.id < 129) {
        nameOne.value = "marvel";
    } else if (char.id > 128 && char.id < 145) {
        nameOne.value = "dc";
    } else if (char.id > 144 && char.id < 160) {
        nameOne.value = "anime";
    }
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
    originTwo.value = char.id;

    if (char.id < 38) {
        nameTwo.value = "movies";
    } else if (char.id > 37 && char.id < 88) {
        nameTwo.value = "videogames";
    } else if (char.id > 87 && char.id < 129) {
        nameTwo.value = "marvel";
    } else if (char.id > 128 && char.id < 145) {
        nameTwo.value = "dc";
    } else if (char.id > 144 && char.id < 160) {
        nameTwo.value = "anime";
    }
}

const showVotes = () => {
    const votesOne = finder("#char-one-votes")
    votesOne.style.display = "block"
    const votesTwo = finder("#char-two-votes")
    votesTwo.style.display = "block"
    updateVotes();
}

const updateVotes = () => {
    const votesEl = event.target.previousElementSibling;
    const votes = votesEl.innerText.split(" ");
    const newVotes = parseInt(votes[1]) + 1;
    votesEl.innerText = `Votes: ${newVotes}`

    const destination = event.target.previousElementSibling.previousElementSibling.previousElementSibling;
    const destName = destination.value;
    const idNum = event.target.previousElementSibling.previousElementSibling;
    const idValue = idNum.value;

    fetch(`${allUrl}${destName}/${idValue}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({votes: newVotes})
    })
    setTimeout(()=> winnerCheck()), 3000;
}

const winnerCheck = () => {
    const charOne = finder("#char-one-votes");
    const charTwo = finder("#char-two-votes");
    const charOneVotes = charOne.innerText.split(" ");
    const charTwoVotes = charTwo.innerText.split(" ");
    parseInt(charOneVotes[1]) > parseInt(charTwoVotes[1]) ? alert("Red Side Wins!!!") : alert("Blue Side Wins!!!");
}

const getRandom = () => {
    randomFirst();
    randomSecond();
}

const randomFirst = () => {
    const result = optionGrabber();
    let values = [];
    if (result === "marvel") {
        values.push("marvel", "88", "128");
    } else if (result === "dc") {
        values.push("dc", "129", "144");
    } else if (result === "videogames") {
        values.push("videogames", "38", "87");
    } else if (result === "movies") {
        values.push("movies", "1", "37");
    } else if (result === "anime") {
        values.push("anime", "145", "159");
    }
    const directory = values[0];
    const min = values[1];
    const max = values[2];
    getAll(directory, min, max);
}

const randomSecond = () => {
    const result = optionGrabber();
    let values = [];
    if (result === "marvel") {
        values.push("marvel", "88", "128");
    } else if (result === "dc") {
        values.push("dc", "129", "144");
    } else if (result === "videogames") {
        values.push("videogames", "38", "87");
    } else if (result === "movies") {
        values.push("movies", "1", "37");
    } else if (result === "anime") {
        values.push("anime", "145", "159");
    }
    const directory = values[0];
    const min = values[1];
    const max = values[2];
    getAllTwo(directory, min, max);
}

const optionGrabber = () => {
    let options = ["marvel", "dc", "videogames", "movies", "anime"]
    return options[Math.floor(Math.random() * options.length)];
}

const addChar = (e) => {
    e.preventDefault();
    const cForm = e.target;
    const charName = cForm.querySelector("#name-input").value;
    const charImg = cForm.querySelector("#image-input").value;
    const charOrigin = cForm.querySelector("#origin-input").value;

    if (charName !== "" && charImg !== "" && charOrigin != "") {
        const char = {
            name: charName,
            img: charImg,
            origin: charOrigin,
            votes: 0,
        };
        fetch(`${allUrl}extra`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(char)
        })
    } else {
        alert("Please fill out the form fully!");
    }
    charForm.reset();
}

const randomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const finder = (type) => {
    return document.querySelector(type)
}


//this function is for testing the rendering of characters to the screen
const test = (direct, id) => {
    fetch(`http://localhost:3000/${direct}/${id}`)
    .then(res=> res.json())
    .then(char=> renderFirstChar(char))
}