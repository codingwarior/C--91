function addUser() {
    player1_name= document.getElementById("player_1_game_input").value;
    player2_name= document.getElementById("player_2_game_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location = "game_page.html";
}
player_1 name = localStorage.getItem("player1_name");
player_2 name = localStorage.getItem("player2_name");

player_1 score = 0;
player_2 score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player1_score;

document.getElementById("player_question").innerHTML = "question turn - "+ player1_name;
document.getElementById("player_answer").innerHTML = "answer turn - "+ player2_name;

function send() {
    get_word= document.getElementById("word").value;
    word= get_word.toLowerCase();(
    console.log("word in lowerCase = "+ word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2= math.floor(word.length/2);
    charAt2= word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_2= word.length - 1;
    charAt3= word.charAt(length_minus_1);
    console.log(charAt3);
    question word= "<h4 id='word_display'>Q."+ remove_charAt3+"</h4>";
    input_box= "<br> Answer <input type= 'text' id='input_check_box'>";
    check_button= "<br></br><button class='btn-btn-info' onclick= 'check()'>Check</button>";
    row= question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value= "";
    }
