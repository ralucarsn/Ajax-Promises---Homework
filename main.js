$(function() {
    console.log("Ready!");
    showGames();
    clickEvent();
    deleteGames();
    addGames();
});

function showGames() {
    var root = "https://games-app-siit.herokuapp.com";
    fetch(root + '/games', {
        method: 'GET'
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
        console.log(jsonResp);
    });
}

function deleteGames() {
    var root = "https://games-app-siit.herokuapp.com";
    fetch(root + '/games', {
        method: 'DELETE'
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
       console.log(jsonResp);
    });
}

function addGames() {
    var root = "https://games-app-siit.herokuapp.com";
    fetch(root + '/games', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Watch_Dogs 2',
            genre: 'Comedy',
            imageUrl: 'https://psmedia.playstation.com/is/image/psmedia/watch-dogs-2-two-column-01-ps4-eu-09jun16?$TwoColumn_Image$'
        })
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
        console.log(jsonResp);
    });
}

function clickEvent(){
    let $container = $("#container");
    $container.on("click", function(){
        console.log('clicked');
    });
    let $secondContainer = $("#secondContainer");
    $secondContainer.on("click", function(){
        console.log('clicked');
    });
    let $thirdContainer = $("#thirdContainer");
    $thirdContainer.on("click", function(){
        console.log('clicked');
    });
    $container.on("click", showGames);
    $secondContainer.on("click", deleteGames);
    $thirdContainer.on("click", addGames);

}

