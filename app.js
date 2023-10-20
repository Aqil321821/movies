var movies = {
    shahrukh: {
      chennai_Express: {
        name: "Chennai Express",
        year: "2016",
        genere:"Romance",
        img: "img/shahrukh/chennai express.jpeg",
          },
      Dear_Zindagi: {
        name: "Dear Zindagi",
        year: "2018",
        genere:"Love Story",
        img: "img/shahrukh/dear zindagi.jpeg",
      },
      pathan: {
        name: "Pathan",
        year: "2022",
        genere:"Action",
        img: "img/shahrukh/pathan.jpeg",
      },
      raees: {
        name: "Raees",
        year: "2019",
        genere:"Action Love",
        img: "img/shahrukh/raees.jpeg",
      },
      jawan: {
        name: "Jawan",
        year: "2023",
        genere:"Thriller Social",
        img: "img/shahrukh/jawan.jpeg",
      },
    },
    akshay: {
      airlift: {
        name: "Airlift",
        year: "2017",
        genere:"Thriller Action",
        img: "img/akshay/airlift.jpeg",
      },
      gabbar: {
        name: "Gabbar",
        year: "2015",
        genere:"Action",
        img: "img/akshay/gabbar.jpeg",
      },
      mission_mangal: {
        name: "Mission Mangal",
        year: "2015",
        genere:"Science Fiction",
        img: "img/akshay/mission mangal.jpeg",
      },
      omg: {
        name: "OMG",
        year: "2022",
        genere:"Family",
        img: "img/akshay/OMG.jpeg",
      },
      soecial_26: {
        name: "Special 26",
        year: "2018",
        genere:"Crime Drama",
        img: "img/akshay/special 26.jpeg",
      },
    },
    salman: {
      bajrangi: {
        name: "Bajrangi Bhai Jaan",
        year: "2019",
        genere:"Drama",
        img:"img/salman/bajrangi.jpeg"
      },
      bodyguard: {
        name: "Bodyguard",
        year: "2015",
        genere:"Love Drama",
        img:"img/salman/bodyguard.jpeg"
      },
      kick: {
        name: "Kick",
        year: "2019",
        genere:"Action Drama",
        img:"img/salman/kick.jpeg"
      },
      radhe: {
        name: "Radhe",
        year: "2017",
        genere:"Crime Action Love",
        img:"img/salman/radhe.jpeg"
      },
      tiger: {
        name: "Tiger",
        year: "2021",
        genere:"Action Love",
        img:"img/salman/tiger.jpeg"
      },
    },
    amir: {
        ghajni: {
            name: "Ghajni",
            year: "2011",
            genere:"Drama,Love,Action",
            img:"img/amir/ghajni.jpeg"
        },
        pk: {
            name: "PK",
            year: "2020",
            genere:"Drama,Love",
            img:"img/amir/pk.jpeg"
        },
        talash: {
            name: "Talash",
            year: "2018",
            genere:"Love,Action",
            img:"img/amir/talash'.jpeg"
        },
        Taray_Zamin_Pe: {
            name: "Taray Zameen Pe",
            year: "2013",
            genere:"Drama,Love,Family",
            img:"img/amir/taray.jpeg"
        },
        three_idiots: {
            name: "3 Idiots",
            year: "2016",
            genere:"Family,Drama",
            img:"img/amir/three idiots.jpeg"
        },
      },
     
  };
  
/// OBJECT END



/// IDS GET

  var actor = document.getElementById("actor")
  var brand = document.getElementById("movie")
  var main = document.getElementById("main")

  actor.innerHTML = `<option value="" >Select Actor</option>`
  brand.innerHTML   = `<option value="" >Select Movie</option>`

for (var key in movies){ 
    actor.innerHTML += `
    <option value="${key}">${key.toUpperCase()}</option>

    `
}

function selectActor(){
    brand.innerHTML = ""
    brand.innerHTML   = `<option value="" >Select Movie</option>`

for(var key in movies[actor.value]){
    brand.innerHTML += `
    <option value="${key}">${key.toUpperCase()}</option>

    `
}

}
  
/// FILTER SEARCHH
/*
function filterMovie(){
    var movieData = movies[actor.value][brand.value]
    console.log(movies)
    main.innerHTML = `
    <div class="col">
    <div class="card">
    <img src="${movieData.img}" class="card-img-top my-img" alt="...">
      <div class="card-body my-card">
      <h5 class="card-title">${movieData.name}</h5>
      <p class="card-text">${movieData.genere}</p>
      <h6 class="card-text">${movieData.year}</h6>

      </div>
    </div>
  </div>
    
    `

}*/
//updated function
function filterMovie() {
 
  var selectedActor = actor.value;
  if (selectedActor === "") {
    
    main.innerHTML = "";
  } else {
   
    var actorMovies = movies[selectedActor];

 
    main.innerHTML = "";
    for (var movieKey in actorMovies) {
      var movieData = actorMovies[movieKey];
      main.innerHTML += `
        <div class="col">
          <div class="card">
            <img src="${movieData.img}" class="card-img-top my-img" alt="...">
            <div class="card-body my-card">
              <h5 class="card-title">${movieData.name}</h5>
              <p class="card-text">${movieData.genere}</p>
              <h6 class="card-text">${movieData.year}</h6>
            </div>
          </div>
        </div>
      `;
    }
  }
}



// FILTER REMOVE

function clearFilter(){
    actor.innerHTML   = `<option value="" >Select Actor</option>`
    brand.innerHTML   = `<option value="" >Select Movie</option>`

    main.innerHTML = ""
    for (var category in movies) {
        for (var movieName in movies[category]) {
    
            main.innerHTML += `
            <div class="col">
            <div class="card">
            <img src="${movies[category][movieName].img}" class="card-img-top my-img" alt="...">
              <div class="card-body my-card">
              <h5 class="card-title">${movies[category][movieName].name}</h5>
              <p class="card-text">${movies[category][movieName].genere}</p>
              <h6 class="card-text">${movies[category][movieName].year}</h6>
    
              </div>
            </div>
          </div>
            
            `
}
    }
}


// WATCH CARDS 


for (var category in movies) {
    for (var movieName in movies[category]) {

        main.innerHTML += `
        <div class="col">
        <div class="card">
        <img src="${movies[category][movieName].img}" class="card-img-top my-img" alt="...">
          <div class="card-body my-card">
          <h5 class="card-title">${movies[category][movieName].name}</h5>
          <p class="card-text">${movies[category][movieName].genere}</p>
          <h6 class="card-text">${movies[category][movieName].year}</h6>

          </div>
        </div>
      </div>
        
        `

  }
}
