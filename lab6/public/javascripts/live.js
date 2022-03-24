const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

// we krijgen data terug van de server primus
primus.on("data", data => {
    // hier zet je wat je wilt doen met de data
    console.log("Er is data!!!"); // er komt data binnen
    console.log(data);

    let team = data.teamname;
    let score = data.score;

    console.log(team);
    console.log(score)
    
    let td = document.querySelector("td");
});