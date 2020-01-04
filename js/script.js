
function ageinDays(){ // this is our days calculor function 
    var birthyear = prompt('What year were you born in : ');
    var date = new Date(); // creating a date object
    var get_year = date.getFullYear(); //getting the year from the date 
    var daysofAge = (get_year - birthyear) * 365; // current year minus birthday year and then multplying by 365 to get the total days
    var h1 = document.createElement('h1');
    var text_answer = document.createTextNode('Your are ' + daysofAge + ' days old ');
    h1.setAttribute('id', 'ageinDays');
    h1.appendChild(text_answer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset(){
    document.getElementById('ageinDays').remove(); // this function will clear the ageinDays 
}

function generateImage(){ // this our image generator function 
    var image = document.createElement('img');
    var div = document.getElementById('flex-image-gen');
    image.src = "https://source.unsplash.com/random/320x320"; // src of our first image
    div.appendChild(image); // adding our first image to our div 
    var image2 = document.createElement('img');
    image2.src = "https://picsum.photos/320/320?random=2"; // src of our second image
    div.appendChild(image2); // adding our second image to our div 
}

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice; // variables for our human choice and bot choice 
    humanChoice = yourChoice.id;
    botChoice = numbertoChoice(rpsTorandomInt()); // return a number between 0,1,2 and will pass that to numbertoChoice()
    console.log('computer choice: ', botChoice);
    results = decideWinner(humanChoice, botChoice); // this will return the results of the game as an array []
    console.log(results);
    message = finalMessage(results);// returns object/dictionary {'message': 'You lost', 'colour': 'red'}
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function rpsTorandomInt(){
    return Math.floor(Math.random() * 3); //return a random number between 0,1,2
} 

function numbertoChoice(number){
    return ['rock','paper','scissors'] [number]; // 0 returns rock, 1 returns paper, 2 return scissors

}

function decideWinner(yourChoice, computerChoice){
    var Gamedatabase = {  // object within and object will all the possible outcomes
        'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var yourScore = Gamedatabase[yourChoice][computerChoice];
    var computerScore = Gamedatabase[computerChoice][yourChoice];

    return [yourScore, computerScore]; // returns an array []
}

function finalMessage([yourScore, computerScore]){ // function will take in an array [] 

    if(yourScore === 0){
        return {'message': 'You lost ! ', 'colour': 'Red'};
    }else if (yourScore === 0.5){
        return {'message': 'Its a Tie ! ', 'colour': 'Yellow'};
    } else {
        return {'message': 'You are the winner ! ', 'colour': 'Green'};
    }

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = { //object/Dictionary for our images. We are getting the images by their element Id
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //removes the images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //creating our divs that will display our image choices and the messahe

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messagediv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messagediv.innerHTML = "<h1 style='color: " + finalMessage['colour'] +"; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botdiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humandiv); //on the rps flex div and we are adding the humandiv to it
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    
}

var all_buttons = document.getElementsByTagName('button'); // array of all the the button elements

var copy_all_buttons = []; //empty array 

for(let i=0; i < all_buttons.length; i++){
    copy_all_buttons.push(all_buttons[i].classList[1]); // to the array[] push each button
}

function buttonColorChange(buttonthing){
    if (buttonthing.value === 'red'){ // if statements to change the value of the button
        buttonsRed(); // will run our function
    }else if (buttonthing.value === 'green'){
        buttonsGreen(); // will run our function
    }else if (buttonthing.value === 'blue'){
        buttonsBlue(); //will run our function 
    }else if (buttonthing.value === 'reset'){
        buttonsReset();
    }else if (buttonthing.value === 'random'){
        buttonsRandom();

    }
}

function buttonsRed(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]); // loop through each button, access the classlist and remove the second class
        all_buttons[i].classList.add('btn-danger');

    }
}

function buttonsGreen(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]); // loop through each button, access the classlist and remove the second class
        all_buttons[i].classList.add('btn-success');

    }
}

function buttonsBlue(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]); // loop through each button, access the classlist and remove the second class
        all_buttons[i].classList.add('btn-primary');

    }
}

function buttonsReset(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_all_buttons[i]); // resets the buttons to og colours

    }
}

function buttonsRandom(){
    var buttonChoices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for(let i=0; i < all_buttons.length; i++){
        var randonnum = Math.floor(Math.random() * 4); //return a random number 0,1,2,3
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(buttonChoices[randonnum]); // choice random button colour
    }
}

