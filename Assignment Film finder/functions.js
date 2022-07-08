import {movies} from './database.js'

// Clear document in case full. Get ul element, create li a img elements, set attributes, 
// connect the elements and add them to the DOM.

function addMoviesToDom(allMoviesList) {
    
    document.getElementById("movie-wall").innerHTML = "";

    const parent = document.getElementById("movie-wall")
    allMoviesList.map(movie => {
        let newLi = document.createElement("li");
        let newImg = document.createElement("img");
        let newA = document.createElement("a");
        newImg.setAttribute("src", movie.poster);
        newA.setAttribute("target", "_blank");
        newA.setAttribute("href", "http://www.imdb.com/title/" + movie.imdbID + "/" );
        parent.append(newLi);
        newLi.append(newA);
        newA.append(newImg);
    })
}

addMoviesToDom(movies);

// Get buttons and turn them into an array, iterate over buttons array and make a switch statement 
// that activates a function when the buttons are clicked.

function addEventListeners() {
    const radioButtons = Array.from(document.querySelectorAll('[name]'));
    
    radioButtons.forEach(element => element.addEventListener('change', function(event) {
    
        switch (event.target.id) {
            case "newMovies":
                filterLatestMovies();
                break;
            case "avenger":
                filterMovies("Avengers");
                break;
            case "x-Men":
                filterMovies("X-Men")
                break;
            case "princess":
                filterMovies("Princess")
                break;
            case "batman":
                filterMovies("Batman");
                break;
        }
    }))
}

addEventListeners()

// Function that gets called when a named radio button is clicked with a certain argument,
// which adds a filtered movie list to the addMoviesToDom function.

function filterMovies(wordInMovie) {
    const filteredMovies = movies.filter(movie => movie.title.includes(wordInMovie))
    addMoviesToDom(filteredMovies);
}
   
// Function that gets called when the latest movies radio button is clicked, 
// which adds a filtered movie list to the addMoviesToDom function.

function filterLatestMovies() {
    const latestMovies = movies.filter(movie => movie.year >= 2014)
    addMoviesToDom(latestMovies);
}
