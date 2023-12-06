
        function checkAnswers() {
            const form = document.getElementById("quizForm");
            const scoreMessage = document.getElementById("scoreMessage");
            const correctAnswersDiv = document.getElementById("correctAnswers");

            let score = 0;
            let correctAnswers = [];

            for (let i = 1; i <= 4; i++) {
                const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

                if (selectedAnswer) {
                    const userAnswer = selectedAnswer.value;

                    if (userAnswer === "riktig") {
                        score++;
                    } else {
                        correctAnswers.push(`Spørsmål ${i}: Riktig svar er ${selectedAnswer.nextSibling.nodeValue.trim()}`);
                    }
                }
            }

            scoreMessage.textContent = `Du fikk ${score} av 4 riktige svar.`;

            if (correctAnswers.length > 0) {
                correctAnswersDiv.innerHTML = `<p>Riktige svar:</p><ul><li>Spørsmål 1: Cola</li><li>Spørsmål 2: Norge</li><li>Spørsmål 3: 9</li><li>Spørsmål 4: Betlehemsstjernen</li></ul>`;
                correctAnswersDiv.style.display = "block";
            } else {
                correctAnswersDiv.style.display = "none";
            }
        }
    