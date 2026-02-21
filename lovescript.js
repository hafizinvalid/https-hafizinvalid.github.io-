// This function runs when a button is clicked
function nextQuestion(choice) {
    // 1. Hide the quiz questions
    document.getElementById('quiz-content').style.display = 'none';
    
    // 2. Change the title
    document.getElementById('title').innerText = "Results for my favorite person! ❤️";

    // 3. Show the result area
    const resultArea = document.getElementById('result-area');
    resultArea.style.display = 'block';

    // 4. Set the text to whatever was clicked
    document.getElementById('final-result').innerText = choice;
    
    console.log("User chose: " + choice);
}