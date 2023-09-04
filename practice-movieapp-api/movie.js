const APIKEY = "Your APIKEY";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
};
const now_playingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY+"&language=en-US&page=1"
const now_playing = document.getElementById("now_playing");
fetch (now_playingURL, options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach((element) => {
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "* " + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            now_playing.appendChild(movie);
        })
    });

    const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key="+APIKEY+"&language=en-US&page=1"
    const popular = document.getElementById("popular");
    fetch  (popularURL, options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach((element) => {
                console.log(element.backdrop_path);
                console.log(element.title);
                console.log(element.vote_average);
    
                let movie = document.createElement("li");
                let moviediv = document.createElement("div");
                let backdrop = document.createElement("img");
                backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
                let title = document.createElement("h4");
                title.innerText = element.title;
                let rate = document.createElement("span");
                rate.innerText = "* " + element.vote_average;
                moviediv.appendChild(backdrop);
                moviediv.appendChild(title);
                moviediv.appendChild(rate);
                movie.appendChild(moviediv);
             popular.appendChild(movie);
            })
        });

        const top_ratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key="+APIKEY+"&language=en-US&page=1"
        const top_rated = document.getElementById("top_rated");
        fetch  (top_ratedURL, options)
            .then(response => response.json())
            .then(response => {
                response.results.forEach((element) => {
                    console.log(element.backdrop_path);
                    console.log(element.title);
                    console.log(element.vote_average);
        
                    let movie = document.createElement("li");
                    let moviediv = document.createElement("div");
                    let backdrop = document.createElement("img");
                    backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
                    let title = document.createElement("h4");
                    title.innerText = element.title;
                    let rate = document.createElement("span");
                    rate.innerText = "* " + element.vote_average;
                    moviediv.appendChild(backdrop);
                    moviediv.appendChild(title);
                    moviediv.appendChild(rate);
                    movie.appendChild(moviediv);
                 top_rated.appendChild(movie);
                })
            });

            const upcomingUPR = "https://api.themoviedb.org/3/movie/upcoming?api_key="+APIKEY+"&language=en-US&page=1"
            const upcoming = document.getElementById("upcoming");
            fetch  (upcomingUPR, options)
                .then(response => response.json())
                .then(response => {
                    response.results.forEach((element) => {
                        console.log(element.backdrop_path);
                        console.log(element.title);
                        console.log(element.vote_averages);
            
                        let movie = document.createElement("li");
                        let moviediv = document.createElement("div");
                        let backdrop = document.createElement("img");
                        backdrop.setAttribute("src", IMAGE_URL + element.backdrop_path);
                        let title = document.createElement("h4");
                        title.innerText = element.title;
                        let rate = document.createElement("span");
                        rate.innerText = "* " + element.vote_averages;
                        moviediv.appendChild(backdrop);
                        moviediv.appendChild(title);
                        moviediv.appendChild(rate);
                        movie.appendChild(moviediv);
                        upcoming.appendChild(movie);
                    })
                });
// const top_ratedURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=12f18af4cadae1aa07314412d8cf9098&language=en-US&page=1";
// fetch  top_ratedURL, options)
//     .then(response => response.json())
//     .then(response => { console.log(response) });
