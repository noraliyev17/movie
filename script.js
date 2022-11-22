"use strict";

movies.splice(500);

//  console.log(movies);
//    {
//     "title": "Patton Oswalt: Annihilation",
//     "year": 2017,
//     "categories": [
//       "Uncategorized"
//     ],
//     "imdbId": "tt7026230",
//     "imdbRating": 7.4,
//     "runtime": 66,
//     "language": "English",
//     "youtubeId": "4hZi5QaMBFc",
//     "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
//     "smallThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
//     "bigThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg"
//   }

const AllMovies = movies.map((movies) => {
  return {
    title: movies.title,
    year: movies.year,
    time: `${Math.floor(movies.runtime / 60)}h ${movies.runtime % 60}m`,
    lang: movies.language,
    category: movies.categories,
    summary: movies.summary,
    rating: movies.imdbRating,
    ID: movies.imdbId,
    minIMG: movies.smallThumbnail,
    bigImg: movies.bigThumbnail,
    link: `https://www.youtube.com/embed/${movies.youtubeId}`,
  };
});

//  render all movies***************************************
function renderAllMovies() {
  AllMovies.forEach((el) => {
    const card = createElement(
      "div",
      "card shadow",
      `
<img
src="${el.minIMG}"
alt="movies"
class="card-img"
/>
<div class="card-body">
<h4 class="card-title">${el.title}</h4>
<ul class="list-unstyled">
  <li><strong> Year:   ${el.year} </strong></li>
  <li><strong> language: ${el.lang}</strong></li>
  <li><strong> Rating: ${el.rating}</strong></li>
  <li><strong> Category: ${el.category}</strong></li>
  <li><strong> Runtime: ${el.time}</strong></li>
  <li><strong> ID: ${el.ID}</strong></li>
</ul>

<div class="social d-flex">
  <a href="${el.link}" target="_blank" class="btn  btn-danger m-2">You-Tube</a>
  <button class="btn btn-primary m-2">Read More</button>
  <button class="btn btn-warning m-2">Add Bookmark</button>
</div>
</div>
`
    );
    $(".wrapper").appendChild(card);
  });
}
renderAllMovies();





//  catygories***********************************************************

const dynamicCategory=()=>{

  let category=[];



AllMovies.forEach((e)=>{
  e.category.forEach((el)=>{
    
    if(!category.includes(el)){

      category.push(el)

    }
  })
})

category.sort()
category.unshift('All')
category.forEach((el)=>{
  const option=createElement('option', 'item-option', el);
  $('#category').appendChild(option)
})

}


dynamicCategory()
//  catygories***********************************************************







// search film and rating********************************************************************

const findFilm = (regexp , rating=0, category) => {
  

  if(category==='All'){
    return AllMovies.filter((film) => {
      return film.title.match(regexp) && film.rating>=rating
    })
  }

  return AllMovies.filter((film) => {
    return film.title.match(regexp) && film.rating>=rating && film.category.includes(category)
  });
};

// // search film rating********************************************************************

// // search film listener rating********************************************************************

$("#submitForm").addEventListener("submit", () => {

  $('.wrapper').innerHTML=`<span class="loader orta_load"></span>`;

  const searchValue = $("#filmname").value;
  const filmRating=$('#ratingname').value;
  const filmCategory =$('#category').value;



  const regexp = new RegExp(searchValue, "gi");

  const searchResult = findFilm(regexp, filmRating, filmCategory);
  




setTimeout(()=>{
  if(searchResult.length>0){
  
    searchResultRunder(searchResult)
 
    $('.card-res').classList.remove('d-none');
 
    
  
    $('#res').innerHTML=`<strong >${searchResult.length}</strong> ta film topildi !`;

    // if(searchValue.length===0){

    //   $('.card-res').classList.add('d-none');

    // }

}else{

      $('.card-res').classList.add('d-none');
  $('.wrapper').innerHTML = '<p class="malumottop text-center">Bunday film topilmadi !</p>'
}

},2000)

});

 
function searchResultRunder(data = []) {
  $(".wrapper").innerHTML = "";
  data.forEach((el) => {
    const card = createElement(
      "div",
      "card shadow",
      `
      <img
      src="${el.minIMG}"
alt="movies"
class="card-img"
/>
<div class="card-body">
<h4 class="card-title">${el.title}</h4>
<ul class="list-unstyled">
<li><strong> Year:   ${el.year} </strong></li>
<li><strong> language: ${el.lang}</strong></li>
<li><strong> Rating: ${el.rating}</strong></li>
<li><strong> Category: ${el.category}</strong></li>
<li><strong> Runtime: ${el.time}</strong></li>
  <li><strong> ID: ${el.ID}</strong></li>
  </ul>
  
  <div class="social d-flex">
  <a href="${el.link}" target="_blank" class="btn  btn-danger m-2">You-Tube</a>
  <button class="btn btn-primary m-2">Read More</button>
  <button class="btn btn-warning m-2">Add Bookmark</button>
  </div>
</div>
`
);
    $(".wrapper").appendChild(card);
  });
}

  // // search film listener rating********************************************************************





  // read maore******************************************************************************************************




  







  // read maore******************************************************************************************************


