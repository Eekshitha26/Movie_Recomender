const genreMovies = {
    action: [
        { title: "The Dark Knight", year: 2008, language: "english" },
        { title: "Die Hard", year: 1988, language: "spanish" },
        { title: "Mad Max: Fury Road", year: 2015, language: "telugu" },
        { title: "Inception", year: 2010, language: "hindi" },
        { title: "John Wick", year: 2014, language: "tamil" }
    ],
    comedy: [
        { title: "Superbad", year: 2007, language: "english" },
        { title: "Anchorman", year: 2004, language: "spanish" },
        { title: "Bridesmaids", year: 2011, language: "telugu" },
        { title: "Dumb and Dumber", year: 1994, language: "hindi" },
        { title: "The Hangover", year: 2009, language: "tamil" }
    ],
    drama: [
        { title: "The Shawshank Redemption", year: 1994, language: "english" },
        { title: "Forrest Gump", year: 1994, language: "spanish" },
        { title: "The Godfather", year: 1972, language: "telugu" },
        { title: "The Social Network", year: 2010, language: "hindi" },
        { title: "A Beautiful Mind", year: 2001, language: "tamil" }
    ],
    love: [
        { title: "Titanic", year: 1997, language: "spanish" },
        { title: "The Notebook", year: 2004, language: "english" },
        { title: "Pride and Prejudice", year: 2005, language: "telugu" },
        { title: "La La Land", year: 2016, language: "hindi" },
        { title: "Before Sunrise", year: 1995, language: "tamil" }
    ],
    romantic: [
        { title: "Casablanca", year: 1942, language: "english" },
        { title: "When Harry Met Sally", year: 1989, language: "spanish" },
        { title: "Eternal Sunshine of the Spotless Mind", year: 2004, language: "telugu" },
        { title: "500 Days of Summer", year: 2009, language: "hindi" },
        { title: "The Fault in Our Stars", year: 2014, language: "tamil" }
    ],
    horror: [
        { title: "The Exorcist", year: 1973, language: "spanish" },
        { title: "Get Out", year: 2017, language: "english" },
        { title: "Psycho", year: 1960, language: "telugu" },
        { title: "A Nightmare on Elm Street", year: 1984, language: "hindi" },
        { title: "The Conjuring", year: 2013, language: "tamil" }
    ],
    webSeries: [
        { title: "Stranger Things", year: 2016, language: "english" },
        { title: "Money Heist", year: 2017, language: "spanish" },
        { title: "Sacred Games", year: 2018, language: "hindi" },
        { title: "Mirzapur", year: 2018, language: "telugu" },
        { title: "Kingdom", year: 2019, language: "korean" }
        // Add more web series
    ],
    anime: [
        { title: "Naruto", year: 2002, language: "japanese" },
        { title: "Attack on Titan", year: 2013, language: "japanese" },
        { title: "One Piece", year: 1999, language: "japanese" },
        { title: "Dragon Ball Z", year: 1989, language: "japanese" },
        { title: "My Hero Academia", year: 2016, language: "japanese" }
        // Add more anime
    ],
    cartoons: [
        { title: "Tom and Jerry", year: 1940, language: "english" },
        { title: "SpongeBob SquarePants", year: 1999, language: "english" },
        { title: "Shin Chan", year: 1992, language: "japanese" },
        { title: "Doraemon", year: 1979, language: "japanese" },
        { title: "Motu Patlu", year: 2012, language: "hindi" }
        // Add more cartoons
    ]
};

function getRecommendation() {
    const genre = document.getElementById("genre").value;
    const language = document.getElementById("language").value;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>Recommended ${genre} (${language}):</h2>`;

    const selectedMovies = genreMovies[genre].filter(movie => movie.language === language);

    if (selectedMovies.length >= 5) {
        const movieList = document.createElement("ul");
        for (let i = 0; i < 5; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `${selectedMovies[i].title} (${selectedMovies[i].year})`;
            movieList.appendChild(listItem);
        }
        resultDiv.appendChild(movieList);
    } else if (selectedMovies.length > 0) {
        const movieList = document.createElement("ul");
        selectedMovies.forEach(movie => {
            const listItem = document.createElement("li");
            listItem.textContent = `${movie.title} (${movie.year})`;
            movieList.appendChild(listItem);
        });
        resultDiv.appendChild(movieList);
    } else {
        resultDiv.innerHTML += `<p>No ${language} ${genre} movies found</p>`;
    }
}
