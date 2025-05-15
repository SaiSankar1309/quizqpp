//Vocabulary data

const quizData = [
    { word: "Fascinating", correct: "Interesting", options: ["Interesting", "Boring", "Loud", "Fast"] },
    { word: "Courage", correct: "Bravery", options: ["Fear", "Bravery", "Sadness", "Anger"] },
    { word: "Gigantic", correct: "Huge", options: ["Small", "Tiny", "Huge", "Quick"] },
    { word: "Swift", correct: "Fast", options: ["Slow", "Fast", "Lazy", "Gentle"] },
    { word: "Drowsy", correct: "Sleepy", options: ["Sleepy", "Active", "Excited", "Alert"] },
    { word: "Timid", correct: "Shy", options: ["Brave", "Shy", "Angry", "Loud"]},
    { word:"Illumiante", correct: "Light up", options: ["Darken", "Hide", "Light up", "Cool down"]},
    { word:"Scarce", correct: "Rare", options:["Abundant", "Frequent", "Rare", "Common"]},
    { word:"Diligent", correct:"Hardworking", options:["Lazy", "Forgetful", "Rude", "Hardworking"]},
    { word:"Fragile", correct:"Easily broken", options:["Strong", "Heavy", "Solid", "Easily broken"]},
    { word:"Generous", correct:"Giving", options:["Selfish", "Greedy", "Giving", "Mean"]},
    { word:"Enormous", correct:"Huge", options:["Tiny", "Huge", "Short", "Weak"]},
    { word:"Reluctant", correct:"Unwilling", options: ["Eager", "Excited", "Unwilling", "Ready"]}

    // Add more questions to reach 25
  ];
  
  //score board
  let current = 0;
  let score = 0;
  
  //getting elements from html
  const questionBox = document.getElementById('questionBox');
  const optionsBox = document.getElementById('optionsBox');
  const scoreDisplay = document.getElementById('score');
  const badgeDisplay = document.getElementById('badge');
  
  //loading each question
  function loadQuestion() {
    if (current >= quizData.length) {
      showBadge();
      return;
    }
    const q = quizData[current];
    questionBox.textContent = `What does "${q.word}" mean?`;
    optionsBox.innerHTML = "";
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.addEventListener('click', () => handleAnswer(option));
      optionsBox.appendChild(btn);
    });
  }
  
  //handling answers
  function handleAnswer(selected) {
    const correct = quizData[current].correct;
    if (selected === correct) {
      score++;
      alert("🎉 Correct! Great job!");
    } else {
      alert("❌ Oops! The correct answer was: " + correct);
    }
    scoreDisplay.textContent = score;
    current++;
    loadQuestion();
  }
  
  function showBadge() {
    questionBox.textContent = "🎉 You've finished the quiz!";
    optionsBox.innerHTML = "";
    let badge = "";
    if (score >= 13) badge = "🏅 Excellent! You're a Vocabulary Champion!";
    else if (score >= 10) badge = "🥈 Great job! You're doing well!";
    else badge = "🥉 Keep practicing! You're getting better!";
    badgeDisplay.textContent = badge;
  }
  
  loadQuestion();