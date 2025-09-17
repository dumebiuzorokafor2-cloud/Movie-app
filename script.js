// Sample movies
const SAMPLE_MOVIES = [
  {id:1,title:'Inception',year:2010,rating:8.8,genres:['Action','Sci-Fi'],actors:['Leonardo DiCaprio'],poster:'download.jpeg',summary:'A thief who steals secrets using dream technology.',trailer:'https://www.youtube.com/embed/YoHD9XEInc0', },
  {id:2,title:'Spirited Away',year:2001,rating:8.6,genres:['Animation','Fantasy'],actors:['Rumi Hiiragi'],poster:'download (1).jpeg',summary:'A girl trapped in a world of spirits.',trailer:'https://www.youtube.com/embed/ByXuk9QqQkk'},
  {id:3,title:'Super Man',year:2025,rating:9.6,genres:['Animation','Fantasy'],actors:['Rumi Hiiragi','Miyu Irino'],poster:'download (12).jpeg',summary:'Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.',trailer:'https://youtube.com/embed/Ox8ZLF6cGM0'},
  {id:4,title:'F1',year:2025,rating:8.6,genres:['Drama','Thriller'],actors:['Kang-ho Song','Sun-kyun Lee'],poster:'Formula1.webp',summary:'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',trailer:'https://youtube.com/embed/ge_ABjtYx88'},
  {id:5,title:'THUNDERBOLT',year:2025,rating:8.6,genres:['Action','Science Fiction', 'Adventure'],actors:['Jae Lee','Joe Simon','Jake Schreier'],poster:'Thunderbolt.webp',summary:'After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.',trailer:'https://www.youtube.com/embed/7rs_HhSA7XY'},
  {id:6,title:'Parasite',year:2019,rating:8.6,genres:['Drama','Thriller'],actors:['Kang-ho Song','Sun-kyun Lee'],poster:'download (2).jpeg',summary:'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',trailer:'https://www.youtube.com/embed/5xH0HfJHsaY'},
  {id:7,title:'Squid Game',year:2021 ,rating:6.6,genres:['Action & Adventure, Mystry','Drama'],actors:['Lee Jung-jae','Wi Ha-jun','Jeon Young-soo'],poster:'squid.webp',summary:'Hundreds of cash-strapped players accept a strange invitation to compete in children/s games. Inside, a tempting prize awaits — with deadly high stakes.',trailer:'https://www.youtube.com/embed/oqxAJKy0ii4'},
  {id:8,title:'Breaking Bad',year:2008,rating:7.6,genres:['Drama','Crime'],actors:['Bryan Cranston','Aaron Paul'],poster:'Breaking Bad.webp',summary:'Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family/s financial future at any cost as he enters the dangerous world of drugs and crime.Vince Gilligan Creator',trailer:'https://www.youtube.com/embed/XZ8daibM3AE'},
  {id:9,title:'Prison Break',year:2005,rating:7.1,genres:['Action & Adventure','Crime', 'Drama'],actors:['Wentworth Miller','Dominic Purcell', 'Robert Knepper'],poster:'Prison.webp',summary:'Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside out.',trailer:'https://www.youtube.com/embed/AL9zLctDJaU'},
  {id:10,title:'Game of Thrones',year:2011,rating:8.6,genres:['Drama','Sci-Fi & Fantasy', 'Action&Adventure'],actors:['Peter Dinklage','Kit Harington','Emilia Clarke'],poster:'GOT.webp',summary:'Winter is coming!!! Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night/s Watch, is all that stands between the realms of men and icy horrors beyond..',trailer:'https://www.youtube.com/embed/KPLWWIOCOOQ'},
  {id:11,title:'Despicable Me 4',year:2024,rating:7.6,genres:['Family','Comedy', 'Animation', 'Science Fiction'],actors:['Steve Carell (Gru)','Sun-kyun Lee'],poster:'DM4.webp',summary:'Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.',trailer:'https://www.youtube.com/embed/LtNYaH61dXY'},
  {id:12,title:'Parasite',year:2019,rating:8.6,genres:['Drama','Thriller'],actors:['Kang-ho Song','Sun-kyun Lee'],poster:'download (2).jpeg',summary:'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',trailer:'https://www.youtube.com/embed/5xH0HfJHsaY'},
  {id:13,title:'Parasite',year:2019,rating:8.6,genres:['Drama','Thriller'],actors:['Kang-ho Song','Sun-kyun Lee'],poster:'download (2).jpeg',summary:'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',trailer:'https://www.youtube.com/embed/5xH0HfJHsaY'},
];

let movies = SAMPLE_MOVIES.slice();
let favorites = new Set();
let favoritess = JSON.parse(localStorage.getItem('favorites')) || [];

function toggleFavorite(movie) {
  const index = favorites.findIndex(fav => fav.id === movie.id);
  if (index === -1) {
    favorites.push(movie);
  } else {
    favorites.splice(index, 1);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  displayMovies(SAMPLE_MOVIES); // refresh view so button updates
}

function displayMovies(movies) {
  movieList.innerHTML = '';
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    const isFav = favorites.some(fav => fav.id === movie.id);
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title} (${movie.year})</h3>
      <p>&#11088; ${movie.rating}</p>
      <button class="fav-btn">${isFav ? '&#128148; Remove Favorite' : '&#10084; Add Favorite'}</button>
    `;
    card.querySelector('.fav-btn').addEventListener('click', (e) => {
      e.stopPropagation(); // prevent opening modal
      toggleFavorite(movie);
    });
    card.addEventListener('click', () => showMovieDetails(movie));
    movieList.appendChild(card);
  });
}

function showFavorites() {
  displayMovies(favorites);
}
// DOM elements
const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const genreSelect = document.getElementById('genre');
const sortSelect = document.getElementById('sort');
const clearBtn = document.getElementById('clear');
const addSampleBtn = document.getElementById('add-sample');
const showFavsBtn = document.getElementById('show-favs');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal');

// Render movie grid
function render(){
  const q = searchInput.value.toLowerCase();
  const out = movies.filter(m => m.title.toLowerCase().includes(q));

  grid.innerHTML = '';
  out.forEach(m=>{
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <div class="poster" style="background-image:url('${m.poster}')"></div>
      <h3>${m.title} (${m.year})</h3>
      <p>&#11088;${m.rating}</p>
      <footer>
        <button onclick="openModal(${m.id})">View</button>
        <button onclick="toggleFav(${m.id})">${favorites.has(m.id)?'Remove':'Favorite'}</button>
      </footer>
    `;
    grid.appendChild(el);
  });
}

// Open movie details modal
function openModal(id){
  const m = movies.find(x=>x.id===id);
  modalContent.innerHTML = `
    <h2>${m.title} (${m.year})</h2>
    <p>${m.summary}</p>
    <iframe width="100%" height="315" src="${m.trailer}" frameborder="0" allowfullscreen></iframe>
  `;
  modalBackdrop.style.display = 'flex';
}
closeModalBtn.addEventListener('click',()=>modalBackdrop.style.display='none');

// Favorites
function toggleFav(id){
  if(favorites.has(id)) favorites.delete(id); else favorites.add(id);
  render();
}
// Show favorites
let showingFavs = false;
showFavsBtn.addEventListener('click',()=>{
  showingFavs = !showingFavs;
  if(showingFavs){
    showFavsBtn.textContent = 'Show all';
    const favList = movies.filter(m=>favorites.has(m.id));
    grid.innerHTML = '';
    if(favList.length===0) grid.appendChild(document.getElementById('empty-tpl').content.cloneNode(true));
    else favList.forEach(m=>{
      const el = document.createElement('article');
      el.className='card';
      el.innerHTML=`<div class=\"poster\" style=\"background-image:url('${m.poster}')\"></div><div class=\"meta\"><div class=\"muted\">${m.year}</div><div class=\"muted\">&#11088; ${m.rating}</div></div><div class=\"title\">${escapeHtml(m.title)}</div><div class=\"genres\">${m.genres.join(' • ')}</div><div class=\"muted\">${m.actors.slice(0,2).join(', ')}</div><footer><button data-id=\"${m.id}\" class=\"view\">View</button><button data-id=\"${m.id}\" class=\"fav-btn\">${favorites.has(m.id)?'Remove':'Favorite'}</button></footer>`;
      grid.appendChild(el);
    });
    document.querySelectorAll('.view').forEach(b=>b.addEventListener('click',e=>openModal(findById(+e.currentTarget.dataset.id))));
    document.querySelectorAll('.fav-btn').forEach(b=>b.addEventListener('click',e=>toggleFav(+e.currentTarget.dataset.id)));
  } else {
    showFavsBtn.textContent = 'Show favorites';
    render();
  }
});

// Extra buttons
clearBtn.addEventListener('click', ()=>{searchInput.value=''; render();});
addSampleBtn.addEventListener('click', ()=>{
  const id = Date.now();
  movies.push({id,title:'New Movie',year:2025,rating:7.5,genres:['Drama'],actors:['Actor'],poster:'https://i.imgur.com/8UG2g2K.jpg',summary:'Sample movie',trailer:'https://www.youtube.com/embed/YoHD9XEInc0'});
  render();
});

// Start app
render();
