class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Troca as perguntas de posição
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
  }
  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3) {
      return;
    }

    this.questions = this.questions.filter((question) => {
      return question.difficulty === difficulty;
    });
  }

  checkAnswer(answer) {
    const currentQuestion = this.getQuestion();

    // Verifica se a resposta dada coincide com a resposta correta do objeto Question
    if (answer === currentQuestion.answer) {
      this.correctAnswers++;
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  }
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) return true;
  }
  averageDifficulty() {
    this.questions = this.questions.map((question) => {
      let diffArray = question.difficulty;
      console.log(diffArray);

      let averageDifficulty = diffArray.reduce((acc, elemnt1) => {
        return acc + elemnt1;
        console.log(averageDifficulty);
      });
    });
  }
}
