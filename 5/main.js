const snickers = {
    Title: "Snickers",
    slogan: "Eat a snickers",
    amount: 1,
    ingredients: ["peanuts","chocolate","caramel"]
}

const stringified = JSON.stringify(snickers)
localStorage.setItem("Snickers", stringified)

const AVPseries = [{
    movie: "Predator",
    year: 1987
},
{   movie: "Predator 2",
    year: 1990
},
{   movie: "AVP Alien vs.Predator",
    year: 2004
},
{   movie: "Alien vs. Predator: requiem",
    year: 2007
},
{   movie: "The Predator",
    year: 2018
},
{   movie: "Predators",
    year: 2010
}
]

const updateDatabase = function(){

    const ThingsIlike = [snickers, AVPseries]
    const stringified1 = JSON.stringify(ThingsIlike)
    localStorage.setItem("Things I like", stringified1)
}


    const addMovie = function(movieName, years){
        const AVPseries1 = {
         movie: movieName,
         year: years
     }
     AVPseries.push(AVPseries1)
     updateDatabase()
     return AVPseries

    }
    const prometheusMovie = addMovie("prometheus", 2013)
    console.log(prometheusMovie)





