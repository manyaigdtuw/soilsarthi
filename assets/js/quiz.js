function gradeQuiz() {
    const answers = {
        q1: "C",  // Nitrogen fixation
        q2: "B",  // Alfalfa
        q3: "A",  // 0-5°C
        q4: "B",  // Geographic Information System
        q5: "C",  // Ethylene
        q6: "D",  // Recording precipitation
        q7: "A",  // Aquaponics
        q8: "C",  // Significant increase in crop yields
        q9: "A",  // Ladybug
        q10: "C"  // Charcoal
    };

    let score = 0;
    let explanations = "";

    for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            if (userAnswer === answers[question]) {
                score++;
                explanations += `<li>${question}: Correct!</li>`;
            } else {
                explanations += `<li>${question}: Incorrect.</li>`;
            }
        }
    }

    const resultElement = document.getElementById('quizResult');
    resultElement.innerHTML = `<h3>Quiz Result:</h3>
                               <p>You scored ${score} out of ${Object.keys(answers).length}.</p>
                               <p>Explanations of Answers:</p>
                               <ul>${explanations}</ul>`;
}
