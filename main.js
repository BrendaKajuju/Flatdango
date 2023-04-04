const baseURL = `https://my-json-server.typicode.com/BrendaKajuju/Flatdango/films`
const nowPLayingUl = document.getElementById('now-playing')
// Core deliverable 1: See the movie details when page loads
function getNowPlayingMovies() {
    fetch(baseURL)
    .then (response => response.json())
    .then (data => {
       const movies = data;
       let moviesArr = movies.map(movie => {
        let movieObj = {
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
    moviesArr.map(displayMovies)})
  };

  function displayMovies(movieObj) {
    let HTMLTemplate = `
      <li class="col-md-10 mx-7">
        <div class="card" style="width: 30rem;">
          <img src="${movieObj.image}" class="card-img-top" alt="${movieObj.title}">
          <div class="card-body">
            <h5 class="card-title">${movieObj.title}</h5>
            <p class="card-text">${movieObj.showtime}</p>
            <p class="card-text">${movieObj.runtime} minutes</p>
            <p class="card-text">${movieObj.description}</p>
            <p class="card-text">Available seats: <span id="available-seats-${movieObj.id}">${movieObj.capacity}</span></p>
            <p class="card-text">Tickets Sold: <span id="movie-tickets-${movieObj.id}">${movieObj.tickets_sold}</span></p>
            <button type="button" class="btn btn-primary buy-ticket-btn" data-id="${movieObj.id}">Buy Tickets</button>
          </div>
        </div>
      </li>
    `;
    nowPLayingUl.innerHTML += HTMLTemplate;
  
    const buyTicketBtn = document.querySelector(`button[data-id="${movieObj.id}"]`);
    const availableSeats = document.getElementById(`available-seats-${movieObj.id}`);
    const movieTickets = document.getElementById(`movie-tickets-${movieObj.id}`);
  
    buyTicketBtn.addEventListener('click', () => {
      if (parseInt(availableSeats.textContent) === 0) {
        alert(`Sorry, ${movieObj.title} is sold out.`);
      } else {
        availableSeats.textContent = parseInt(availableSeats.textContent) - 1;
        movieTickets.textContent = parseInt(movieTickets.textContent) + 1;
  
        // Core Deliverable 3: Update the database
        const updatedMovieObj = {
          ...movieObj,
          capacity: parseInt(availableSeats.textContent),
          tickets_sold: parseInt(movieTickets.textContent)
        };
  
        fetch(`${baseURL}/${movieObj.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedMovieObj)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
      }
    });
  }
  



getNowPlayingMovies();
