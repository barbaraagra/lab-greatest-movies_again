// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director)
}

//Bonus - Iteration 1.1: Clean the array of directors
const directors = getAllDirectors(moviesArray)
console.log(directors)

const repeatedDir = [];
const onceDirector = directors.filter(function (name) {
    if (!repeatedDir.includes(name)) {
        repeatedDir.push(name);
        return true;
    }
    return false;
});

console.log(onceDirector);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const bestDir = moviesArray.filter(function (best) {
        return best.director === "Steven Spielberg" && best.genre.includes('Drama');
    });
    return bestDir;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const sumScore = moviesArray.reduce(function (acc, movie) {
        return acc + movie.score
    }, 0)
    return sumScore / moviesArray.length
}
const average = scoresAverage(movies);
console.log(parseFloat(average.toFixed(2)))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaGenre = moviesArray.filter(function (movie) {
        return movie.genre.includes('Drama')
    })
    if (dramaGenre.length > 0) {
        const sumDrama = dramaGenre.reduce(function (acc, mov) {
            return acc + mov.score;
        }, 0);
        return sumDrama / dramaGenre.length
    } else {
        return 0;
    }
}
const avgDrama = dramaMoviesScore(movies);
console.log(parseFloat(avgDrama.toFixed(2)))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedMovies = [...moviesArray];
    const sortMovies = clonedMovies.sort(function (a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    });
    return sortMovies;
}
const sortMovies = orderByYear(movies)
console.log(sortMovies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderTitle = [...moviesArray];

    const justTitles = orderTitle.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });

    const firstTitles = orderTitle.slice(0, 20);
    const mapTitles = firstTitles.map(mov => mov.title);
    return mapTitles
}

const sortedTitles = orderAlphabetically(movies)
console.log(sortedTitles)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const takeDuration = moviesArray.map(function (movie) {

        const takeHours = parseInt(movie.duration.match(/\d+h/));
        const takeMinutes = parseInt(movie.duration.match(/\d+min/));

        const calculateDuration = takeHours * 60 + takeMinutes;

        return {
            ...movie,
            duration: calculateDuration
        }
    });
    return takeDuration;
}

const durationMinutes = turnHoursToMinutes(movies)
console.log(durationMinutes);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
