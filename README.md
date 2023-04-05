<h1>FlatDango</h1>
<p>Flatiron Movie Theater is open for business! This repository contains code for a movie booking system that fetches movie data from a REST API URL: [https://my-json-server.typicode.com/BrendaKajuju/Flatdango/films]. Users can view movie details such as title, showtime, runtime, description, available seats, and tickets sold. They can also purchase tickets by clicking the "Buy Tickets" button.</p>
<h2>Getting Started</h2>
<h3>Technologies Used</h3>
<p>HTML
    CSS
    JavaScript
    Bootstrap</p>
<p>To use this movie booking system, you need to follow these steps:</p>
<p>
    Clone the repository or download the code files.
    Open the index.html file in a web browser.
    The movie details will be displayed on the webpage.
    Click on the "Buy Tickets" button to purchase tickets for a movie.</p>
<h3>Dependencies</h3>
<p>
    This code uses the following dependencies:
    
    JavaScript fetch API: to fetch movie data from a REST API.
    Bootstrap: for styling the movie details cards.</p>
<h3>Code description</h3>
<p>
    The JavaScript code consists of the following functions:
    
    getNowPlayingMovies(): This function fetches movie data from the specified REST API endpoint (baseURL) using the fetch API. It then maps through the movie data and creates movie objects with properties such as id, title, runtime, capacity, showtime, tickets_sold, description, and image. The displayMovies() function is called with each movie object to dynamically create HTML templates for displaying movie details on the webpage.
    
    displayMovies(movieObj): This function takes a movie object as a parameter and dynamically creates an HTML template for displaying the movie details on the webpage. It uses the movie object's properties to populate the template, such as title, showtime, runtime, description, available seats, tickets sold, and an id for identifying the movie.
    
    buyTicketBtnClick(event): This function is called when the "Buy Tickets" button is clicked. It checks if the clicked button has the class "btn-primary" and retrieves the movie id from the button's dataset. It then updates the available seats and tickets sold for the corresponding movie based on the current values displayed on the webpage.
    
    DOMContentLoaded event listener: This event listener is used to ensure that the DOM is loaded before executing the JavaScript code. It calls the getNowPlayingMovies() function to fetch and display movie data, and also adds an event listener for the click event on the "Buy Tickets" buttons to handle ticket purchases.</p>
<h3>Contribution</h3>
<p>Contributions to this project are welcome! If you find any issues or have any suggestions for improvement, please open an issue or submit a pull request. You can also contact the author Brenda Kajuju for any questions or further assistance.</p>
<h3>Credits</h3>
<ul>Author: Brenda Kajuju
    GitHub: https://github.com/BrendaKajuju</ul>
<h3>License</h3>
<p>This project is licensed under the MIT License. Feel free to use and modify the code as per the terms of the license. Enjoy! Happy movie ticket booking! 🎬🎟️🍿🎥🎞️

    Please note: This is a fictional project and the movie data used in this app is for demonstration purposes only. The actual movie data and images are not included in this repository. The app fetches movie data from a JSON server for demonstration purposes. If you want to use this app with real movie data, you would need to replace the JSON server with a real API that provides movie data. Also, please make sure to comply with any applicable laws and regulations related to the use of movie data and ticket booking. Consult the documentation and terms of use of any movie data or API you use for your project. The author and contributors of this project are not responsible for any misuse of movie data or violation of laws or regulations. Use the app responsibly and legally. Happy coding! 🚀👩‍💻👨‍💻🎉🎉🎉</p>
