const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

loadSavedData();

let ticketPrice = +movieSelect.value;

//Get data from local storage 
function  loadSavedData() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }
    
    const movieIndex = localStorage.getItem('movieIndex');
    if (movieIndex !== null)  {
        movieSelect.selectedIndex = movieIndex;
    }

}

//Store movie data to local storage
function setMovieData(movie, price){
    localStorage.setItem('moviePrice' , (price));
    localStorage.setItem('movieIndex', movie);
}
// update count of selected seats
function  updateSelectedCount() {
    const selectedSeats  = document.querySelectorAll('.row .seat.selected');

    
    const seatsIndex = [...selectedSeats].map(seat => 
        [...seats].indexOf(seat) 
    ); 

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie Select
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value; 
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// Seat select event
container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});
updateSelectedCount();