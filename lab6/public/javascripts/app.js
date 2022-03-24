// CLIENT

const primus = Primus.connect("/", {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

document.querySelector(".update__form").addEventListener("submit", e => {
    console.log("geklikt");

    e.preventDefault();

    let select = document.querySelector(".select__team");
    let team = select.options[select.selectedIndex].value;
    let score = document.querySelector(".score__input").value;

    // console.log(team);
    // console.log(score);

    // writen naar primus => data naar de server sturen
    primus.write(
        {
            teamname: team,
            score: score
        }); 
});