const conatiner = document.querySelector('.conatiner');
const seats = document.querySelectorAll('.row.seat:not(sold)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');

let ticketprice = +movie.value;                 /* converted ticketprice from string to number by adding + infornt */

// for didplaying of ticket seat and display of ticket price.
function updateselectedSeats(){
    const selectedseats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedseats.length);
    const selectedseatsCount = selectedseats.length;
    console.log(count);

    count.innerText = selectedseatsCount;
    total.innerText = selectedseatsCount * ticketprice; 
    
}

// changing of movie type update price.
movie.addEventListener('change',(k)=>{
    ticketprice = +k.target.value;
    updateselectedSeats();
})

conatiner.addEventListener('click',(e) =>{
    // console.log(e.target);                  
    if(e.target.classList.contains('seat') && !e.target.classList.contains('sold')){
        e.target.classList.toggle('selected')
    }

    updateselectedSeats();
    
})
