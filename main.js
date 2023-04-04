const baseURL = `https://my-json-server.typicode.com/BrendaKajuju/Flatdango/films`
const nowPLayingUl = document.getElementById('now-playing')
/**
 * Title
 * Overview
 * Votes Average
 * Poster Path
 * ID
 */
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
    <li class = "col-md-5 mx-4>
    <div class="card" style="width: 25rem;">
    <img src="${movieObj.image}" class="card-img-top" alt="${movieObj.title}">
    <div class="card-body">
    <h5 class="card-title">"${movieObj.title}"</h5>
    <p class="card-text">${movieObj.showtime}</p>
    <p class="card-text">${movieObj.runtime} minutes</p>
    <p class="card-text">${movieObj.description}</p>
    </div>
  </div>
</li>`;
    nowPLayingUl.innerHTML+=HTMLTemplate;   
}
getNowPlayingMovies();
