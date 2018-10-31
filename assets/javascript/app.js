// initialize the .js document
$( document ).ready(function() {
    
  // hide Start Button on click and show questions when clicked 
    $('#questions-container').hide();
    $("#startGame").on("click", function (){
        $('#questions-container').show();
        console.log('hello');
        $('#startGame').hide();
    })
    
    // Start the timer 
    $('#startGame').click (function (){
        var counter = 30;
        setInterval(function(){
            counter--;
            if (counter >= 0) {
                span = document.getElementById("timeLeft");
                span.innerHTML = counter;
                $('#timeLeft').html('<h2>' + counter + " seconds"+'</h2>');
            }
            if (counter === 0) {
                submitAnswers();
            }
        }, 1000);
    })
        // The stop function
        function stop(){
            clearInterval(counter);
        }

        function submitAnswers(){
            var total = 4;
            var score = 0;

            //Get user input
            var q1 = document.forms["quizForm"]["q1"].value;
            var q2 = document.forms["quizForm"]["q2"].value;
            var q3 = document.forms["quizForm"]["q3"].value;
            var q4 = document.forms["quizForm"]["q4"].value;
        
        

        // Set correct answers
        var answers = ["b","c","b","d"];

        // check Answers
        if(q1 == answers[0]){
            score++;
        }
        if(q2 == answers[1]){
            score++;
        }
        if(q3 == answers[2]){
            score++;
        }
        if(q4 == answers[3]){
            score++;
        }
        alert('All Done!');
        alert('You scored ' + score + ' out of ' + total);
    }
    });