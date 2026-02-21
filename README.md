<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Love Language Quiz</title>
    <link rel="stylesheet" href="lovestyle.css">
</head>
<body>

    <div class="quiz-container">
        <h1 id="title">When does Liyana feel most loved? ✨</h1>
        
        <div id="quiz-content">
            <p class="question">When I'm stressed, I feel best when you...</p>
            <div class="options">
                <button class="quiz-btn" onclick="nextQuestion('Words of Affirmation')">Tell me you're proud of me</button>
                <button class="quiz-btn" onclick="nextQuestion('Quality Time')">Arrange a quiet evening for us!</button>
            </div>
        </div>

        <div id="result-area" style="display:none;">
            <h2>Your Primary Love Language is:</h2>
            <p id="final-result" class="heart-text"></p>
        </div>
    </div>

    <script src="lovescript.js"></script>
</body>
</html>
