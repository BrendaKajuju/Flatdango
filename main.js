const baseURL = `https://my-json-server.typicode.com/BrendaKajuju/Flatdango/films`
const nowPLayingUl = document.getElementById('now-playing')
const filmsUl = document.getElementById('films'); // Added line to get the films ul element

// Core deliverable 1: See the movie details when page loads
function getNowPlayingMovies() {
    fetch(baseURL)
    .then (response => response.json())
    .then (data => {
       const movies = data;
       let moviesArr = movies.map(movie => {
        let movieObj = {
            id: movie.id, // add an id property to the movie object
            title: movie.title,
            runtime: movie.runtime,
            capacity: movie.capacity,
            showtime: movie.showtime,
            tickets_sold: movie.tickets_sold,
            description: movie.description,
            image: movie.poster
          };
        return movieObj
       }
        )
        //Map through the  movies and use a calback function
    moviesArr.map(displayFilms);    
    moviesArr.map(displayMovies)})
  };

  function displayMovies(movieObj) {
    let HTMLTemplate = `
      <li class="col-md-10 mx-10">
      <div class = "row">
        <div class="card" style="width: 20rem;">
          <img src="${movieObj.image}" class="card-img-top" alt="${movieObj.title}">
          <div class="card-body">
            <h5 class="card-title">${movieObj.title}</h5>
            <p class="card-text">${movieObj.showtime}</p>
            <p class="card-text">${movieObj.runtime} minutes</p>
            <p class="card-text">${movieObj.description}</p>
            <p class="card-text">Available seats: <span id="available-seats-${movieObj.id}">${movieObj.capacity}</span></p>
            <p class="card-text">Tickets Sold: <span id="movie-tickets-${movieObj.id}">${movieObj.tickets_sold}</span></p>
            <button type="button" class="btn btn-primary" data-id="${movieObj.id}">Buy Tickets</button>
            </div>
        </div>
        </div>
      </li>
    `;
    nowPLayingUl.innerHTML += HTMLTemplate;
  }
    // Function to display movies in the films section
function displayFilms(movieObj) {
  let HTMLTemplate = `
  <li class="card-title">${movieObj.title}</li>
  `;
  filmsUl.innerHTML += HTMLTemplate;
}
// Event handler for buy ticket functions
  function buyTicketBtnClick(event) {
    if (event.target.classList.contains("btn-primary")) {
      const ticketButton = event.target;
      const movieId = ticketButton.dataset.id;
      const availableSeats = document.getElementById(`available-seats-${movieId}`);
      const movieTickets = document.getElementById(`movie-tickets-${movieId}`);
      if (parseInt(availableSeats.textContent) === 0) {
        alert(`Sorry, ${movieObj.title} is sold out.`);
      } else {
        availableSeats.textContent = parseInt(availableSeats.textContent) - 1;
        movieTickets.textContent = parseInt(movieTickets.textContent) + 1;
      }
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    getNowPlayingMovies();
    document.addEventListener('click', buyTicketBtnClick); // Add event listener for click event
  })
  


