document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const beginFriendQuizBtn = document.getElementById("beginFriendQuizBtn");
  const openInviteBtn = document.getElementById("openInviteBtn");

  const music = document.getElementById("bgMusic");
  const friendResultAudio = document.getElementById("friendResultAudio");

  const scrambleLevelNumber = document.getElementById("scrambleLevelNumber");
  const scrambleTimer = document.getElementById("scrambleTimer");
  const scrambleStatus = document.getElementById("scrambleStatus");
  const scrambleLetters = document.getElementById("scrambleLetters");
  const scrambleHint = document.getElementById("scrambleHint");
  const scrambleInput = document.getElementById("scrambleInput");
  const scrambleSubmit = document.getElementById("scrambleSubmit");
  const scrambleReveal = document.getElementById("scrambleReveal");
  const scrambleFailed = document.getElementById("scrambleFailed");
  const scrambleComplete = document.getElementById("scrambleComplete");

  const friendQuizProgress = document.getElementById("friendQuizProgress");
  const friendQuizExtra = document.getElementById("friendQuizExtra");
  const friendQuizQuestion = document.getElementById("friendQuizQuestion");
  const friendQuizOptions = document.getElementById("friendQuizOptions");
  const friendQuizAnswer = document.getElementById("friendQuizAnswer");
  const friendQuizError = document.getElementById("friendQuizError");
  const friendQuizNextBtn = document.getElementById("friendQuizNextBtn");
  const friendQuizScore = document.getElementById("friendQuizScore");
  const friendQuizMessage = document.getElementById("friendQuizMessage");
  const resultsSparks = document.getElementById("resultsSparks");

  const openQuizBtn = document.getElementById("openQuizBtn");
  const quizBackBtn = document.getElementById("quizBackBtn");
  const quizCloseBtn = document.getElementById("quizCloseBtn");
  const quizFinishBtn = document.getElementById("quizFinishBtn");
  const quizRetryBtn = document.getElementById("quizRetryBtn");

  const quizScreen = document.getElementById("pageQuiz");
  const quizForm = document.getElementById("quizForm");
  const quizResult = document.getElementById("quizResult");
  const quizResultInner = document.getElementById("quizResultInner");
  const quizOverlay = document.getElementById("quizOverlay");
  const resultCover = document.getElementById("resultCover");
  const resultBlurb = document.getElementById("resultBlurb");
  const resultAudio = document.getElementById("resultAudio");
  const quizNameInput = document.getElementById("quizName");

  const scrambleLevels = [
    { answer: "Timeless", scrambled: "SLEMITES", hint: "Hint: Album - Hurry Up Tomorrow" },
    { answer: "Open Hearts", scrambled: "SNEH RTOEPA", hint: "Hint: Album - Hurry Up Tomorrow" },
    { answer: "Cry for Me", scrambled: "MYE CFR O", hint: "Hint: Album - Hurry Up Tomorrow" },
    { answer: "The Abyss", scrambled: "BASYH SET", hint: "Hint: Album - Hurry Up Tomorrow" },
    { answer: "Wake Me Up", scrambled: "UWEK PME A", hint: "Hint: Album - Hurry Up Tomorrow" }
  ];

  const friendQuizQuestions = [
    {
      question: "When did I first meet you?",
      answers: ["year 1 block 2", "year 1, block 2", "year one block two", "block 2 of year 1", "first year block 2", "year 1, block 2"]
    },
    {
      question: "Which artist will forever be my number 1 artist?",
      answers: ["the weeknd", "weeknd", "abel tesfaye", "abel"]
    },
    {
      question: "What's my go-to alcoholic drink?",
      answers: ["savanna dry", "savanna", "savannah dry"]
    },
    {
      question: "What big collection do I have displayed in my room on my shelf?",
      answers: ["energy drink collection", "energy drinks", "energy drink", "my energy drink collection", "energy drinks collection"]
    },
    {
      question: "Which member of Blackpink is my bias?",
      options: "Options: Jennie, Jisoo, Lisa, Rose",
      answers: ["jisoo", "kim jisoo"]
    },
    {
      question: "Which artist's music did I not like at first until you changed my mind?",
      answers: ["travis scott", "travis"]
    },
    {
      question: "What do I say to you when you block me from shifting gears?",
      answers: ["leg", "you say leg", "say leg"]
    },
    {
      question: "What's my favorite animal?",
      answers: ["shark", "a shark", "sharks"]
    },
    {
      question: "What's my favorite kind of shows?",
      answers: ["thai shows", "thai", "thai dramas", "thai series"]
    },
    {
      question: "What animal do I have a phobia of?",
      answers: ["snake", "snakes", "a snake"]
    },
    {
      question: "How many ex's/situationships have I had?",
      answers: ["7", "seven"]
    },
    {
      question: "Out of those ex's/Situationships who was my biggest heartbreak?",
      answers: ["shikara"]
    },
    {
      question: "What part of my body do I not like to show? Don't think sexually, think simple.",
      answers: ["my feet", "feet", "your feet"]
    },
    {
      question: "What's the +-5 Year Plan's Kpop group song?",
      answers: ["gnarly"]
    },
    {
      question: "Have I ever been ghosted—and by whom?",
      answers: ["tiara"]
    },
    {
      question: "Who was the first person I ever kissed?",
      options: "Options: Aidan, Logan, Nikara, Shikara, Tiara",
      answers: ["aidan"]
    },
    {
      question: "What movie did me, you and Navika watch together in my car the one day at campus?",
      answers: ["kpop demon hunters", "k-pop demon hunters", "kpop demon hunter", "k-pop demon hunter"]
    },
    {
      question: "What was the biggest thing about Shikara that I had a major problem with?",
      options: "Options: She wanted my full attention and time, She didn't want to get to know my friends, She gets upset over small things, None of the above",
      answers: [
        "she didn't want to get to know my friends",
        "didn't want to get to know my friends",
        "she did not want to get to know my friends",
        "not wanting to get to know my friends",
        "she didn't want to get to know your friends"
      ]
    },
    {
      question: "What happened on the 6th of November 2025?",
      answers: ["i got into a car crash", "car crash", "you got into a car crash", "car accident", "you were in a car crash", "got into a car crash"]
    },
    {
      question: "What in my car do I still need to fix since I first got my car? I always say it will give me more power.",
      answers: ["intake manifold", "the intake manifold", "intake", "manifold"]
    },
    {
      question: "Last question, nice and easy to end off. What are you saved as in my Phone?",
      answers: ["bala boi", "balaboi", "bala boii"]
    }
  ];

  const SONG_KEYS = ["cry-for-me", "nigara-falls", "the-abyss", "timeless", "wake-me-up"];
  const SONG_PRETTY = {
    "cry-for-me": "Cry For Me",
    "nigara-falls": "Nigara Falls",
    "the-abyss": "The Abyss",
    "timeless": "Timeless",
    "wake-me-up": "Wake Me Up"
  };
  const SONG_BLURB = {
    "cry-for-me": "You're soft-hearted, dramatic in the best way, and you feel everything properly.",
    "nigara-falls": "You're calm, pretty, and easy to be around. Quiet vibe, strong presence.",
    "the-abyss": "You're mysterious, deep, and a little hard to read, which makes people more curious.",
    "timeless": "You carry yourself like a star. Confident, cool, and impossible to ignore.",
    "wake-me-up": "You bring energy, warmth, and life into every room you walk into."
  };

  let scrambleIndex = 0;
  let scrambleSeconds = 60;
  let scrambleTimerId = null;
  let scrambleLocked = false;

  let friendQuizIndex = 0;
  let friendQuizCorrect = 0;
  const friendQuizResponses = [];
  let showDigDeeper = false;

  let inviteTime = 0;
  let scrollYBeforeQuiz = 0;

  function blurActiveField() {
    if (document.activeElement && typeof document.activeElement.blur === "function") {
      document.activeElement.blur();
    }
  }

  function pauseAllAudio() {
    if (music) {
      music.pause();
    }
    if (friendResultAudio) {
      friendResultAudio.pause();
    }
    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }
  }

  function playInviteMusic() {
    if (!music) return;

    if (friendResultAudio) {
      friendResultAudio.pause();
      friendResultAudio.currentTime = 0;
    }

    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }

    const currentSrc = (music.getAttribute("src") || "").toLowerCase();
    if (currentSrc !== "timeless.mp3") {
      music.src = "timeless.mp3";
      music.load();
    }

    music.volume = 0.7;
    music.loop = true;
    music.play().catch(() => {});
  }

  function playWhistle() {
    if (!friendResultAudio) return;

    if (music) {
      music.pause();
    }

    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
    }

    const currentSrc = (friendResultAudio.getAttribute("src") || "").toLowerCase();
    if (currentSrc !== "whistle.mp3") {
      friendResultAudio.src = "Whistle.mp3";
      friendResultAudio.load();
    }

    friendResultAudio.volume = 0.7;
    friendResultAudio.loop = true;

    if (friendResultAudio.paused) {
      friendResultAudio.play().catch(() => {});
    }
  }

  function stopWhistle() {
    if (!friendResultAudio) return;
    friendResultAudio.pause();
    friendResultAudio.currentTime = 0;
  }

  function showOnlyPage(pageId) {
    document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
    const target = document.getElementById(pageId);
    if (target) target.classList.add("active");
    blurActiveField();
  }

  function normalizeBasic(value) {
    return (value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function compact(value) {
    return normalizeBasic(value).replace(/\s+/g, "");
  }

  function levenshtein(a, b) {
    const m = a.length;
    const n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }

    return dp[m][n];
  }

  function similarEnough(userAnswer, expected) {
    const userNorm = normalizeBasic(userAnswer);
    const expectedNorm = normalizeBasic(expected);
    const userCompact = compact(userAnswer);
    const expectedCompact = compact(expected);

    if (!userNorm) return false;
    if (userNorm === expectedNorm) return true;
    if (userNorm.includes(expectedNorm) || expectedNorm.includes(userNorm)) return true;
    if (userCompact === expectedCompact) return true;

    const userTokens = userNorm.split(" ").filter(Boolean);
    const expectedTokens = expectedNorm.split(" ").filter(Boolean);
    const overlap = expectedTokens.filter((token) => userTokens.includes(token)).length;
    const ratio = expectedTokens.length ? overlap / expectedTokens.length : 0;
    if (ratio >= 0.7) return true;

    const distance = levenshtein(userCompact, expectedCompact);
    const longest = Math.max(userCompact.length, expectedCompact.length, 1);
    if (distance <= 2 || distance / longest <= 0.22) return true;

    return false;
  }

  function answerMatches(userAnswer, acceptedAnswers) {
    return acceptedAnswers.some((answer) => similarEnough(userAnswer, answer));
  }

  function normalizeSongGuess(value) {
    return compact(value);
  }

  function loadScrambleLevel(index) {
    clearInterval(scrambleTimerId);
    scrambleLocked = false;
    scrambleIndex = index;
    scrambleSeconds = 60;

    const level = scrambleLevels[index];
    scrambleLevelNumber.textContent = String(index + 1);
    scrambleTimer.textContent = String(scrambleSeconds);
    scrambleLetters.textContent = level.scrambled;
    scrambleHint.textContent = level.hint;
    scrambleReveal.textContent = "";
    scrambleStatus.textContent = "Unscramble the Weeknd song before the timer runs out.";
    scrambleInput.value = "";
    scrambleInput.disabled = false;
    scrambleSubmit.disabled = false;
    scrambleFailed.classList.remove("show");
    scrambleComplete.classList.remove("show");

    setTimeout(() => blurActiveField(), 0);

    scrambleTimerId = setInterval(() => {
      scrambleSeconds -= 1;
      scrambleTimer.textContent = String(scrambleSeconds);

      if (scrambleSeconds <= 0) {
        clearInterval(scrambleTimerId);
        failScrambleLevel();
      }
    }, 1000);
  }

  function goToNextScrambleLevel() {
    if (scrambleIndex >= scrambleLevels.length - 1) {
      showOnlyPage("pageA");
      playWhistle();
      return;
    }
    loadScrambleLevel(scrambleIndex + 1);
  }

  function completeScrambleLevel() {
    if (scrambleLocked) return;
    scrambleLocked = true;
    clearInterval(scrambleTimerId);

    const level = scrambleLevels[scrambleIndex];
    scrambleStatus.textContent = "Correct. Next level loading...";
    scrambleReveal.textContent = `Correct answer: ${level.answer}`;
    scrambleComplete.classList.add("show");
    scrambleInput.disabled = true;
    scrambleSubmit.disabled = true;

    setTimeout(() => {
      scrambleComplete.classList.remove("show");
      goToNextScrambleLevel();
    }, 1400);
  }

  function failScrambleLevel() {
    if (scrambleLocked) return;
    scrambleLocked = true;

    const level = scrambleLevels[scrambleIndex];
    scrambleStatus.textContent = "Time is up. The answer has been revealed.";
    scrambleReveal.textContent = `Correct answer: ${level.answer}`;
    scrambleFailed.classList.add("show");
    scrambleInput.disabled = true;
    scrambleSubmit.disabled = true;

    setTimeout(() => {
      scrambleFailed.classList.remove("show");
      goToNextScrambleLevel();
    }, 1800);
  }

  function submitScrambleGuess() {
    if (scrambleLocked) return;

    const guess = normalizeSongGuess(scrambleInput.value);
    const answer = normalizeSongGuess(scrambleLevels[scrambleIndex].answer);

    if (!guess) {
      scrambleStatus.textContent = "Type an answer first.";
      return;
    }

    if (guess === answer) {
      completeScrambleLevel();
    } else {
      scrambleStatus.textContent = "Not quite. Try again.";
      scrambleInput.select();
    }
  }

  function renderFriendQuizQuestion() {
    // Check if we need to show the dig deeper interstitial
    if (showDigDeeper) {
      friendQuizProgress.textContent = "";
      friendQuizQuestion.textContent = "";
      friendQuizOptions.textContent = "";
      friendQuizExtra.textContent = "";
      friendQuizAnswer.style.display = "none";
      friendQuizError.textContent = "";
      friendQuizNextBtn.textContent = "Continue";
      
      // Create dig deeper display
      let digDeeperDiv = document.getElementById("digDeeperText");
      if (!digDeeperDiv) {
        digDeeperDiv = document.createElement("div");
        digDeeperDiv.id = "digDeeperText";
        digDeeperDiv.className = "dig-deeper-text";
        friendQuizQuestion.parentNode.insertBefore(digDeeperDiv, friendQuizQuestion);
      }
      digDeeperDiv.innerHTML = "Time to dig deeper into your brain, lets see how well you really know me Brother Ethan";
      digDeeperDiv.style.display = "block";
      return;
    }

    // Hide dig deeper if it exists
    const digDeeperDiv = document.getElementById("digDeeperText");
    if (digDeeperDiv) {
      digDeeperDiv.style.display = "none";
    }

    const item = friendQuizQuestions[friendQuizIndex];
    friendQuizProgress.textContent = `Question ${friendQuizIndex + 1} of ${friendQuizQuestions.length}`;
    friendQuizQuestion.textContent = item.question;
    friendQuizOptions.textContent = item.options || "";
    friendQuizExtra.textContent = item.extra || "";
    friendQuizAnswer.style.display = "block";
    friendQuizAnswer.value = friendQuizResponses[friendQuizIndex] || "";
    friendQuizError.textContent = "";
    friendQuizNextBtn.textContent = friendQuizIndex === friendQuizQuestions.length - 1 ? "Finish quiz" : "Next";

    setTimeout(() => blurActiveField(), 0);
  }

  function rainBlueSparks() {
    if (!resultsSparks) return;
    resultsSparks.innerHTML = "";

    for (let i = 0; i < 52; i++) {
      const spark = document.createElement("span");
      spark.className = "blue-spark";
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.animationDelay = `${Math.random() * 0.9}s`;
      spark.style.animationDuration = `${1.2 + Math.random() * 1.4}s`;
      spark.style.height = `${60 + Math.random() * 120}px`;
      resultsSparks.appendChild(spark);
    }
  }

  function showFriendQuizResults() {
    showOnlyPage("friendQuizResults");
    playWhistle();
    rainBlueSparks();

    friendQuizScore.textContent = `You got ${friendQuizCorrect}/${friendQuizQuestions.length} questions correct!`;
    friendQuizMessage.textContent =
      friendQuizCorrect > 15
        ? "Wow Ethan, well done, I'm very proud of you man, You know me so well"
        : "Damn bruh, thought we knew each other better. Nah I'm kidding. It's aight. Love u Bala Boi";
  }

  function unlockInvite() {
    stopWhistle();
    document.body.classList.remove("locked");
    document.body.classList.add("scroll-mode");
    playInviteMusic();
    document.getElementById("page2")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitFriendQuizAnswer() {
    // Handle dig deeper interstitial - when showing dig deeper, just hide it and advance
    if (showDigDeeper) {
      showDigDeeper = false;
      // We already processed question 10 (index 9), so now move to question 11 (index 10)
      friendQuizIndex = 10;
      renderFriendQuizQuestion();
      return;
    }

    const answer = friendQuizAnswer.value.trim();

    if (!answer) {
      friendQuizError.textContent = "Don't be a bum, answer the question";
      return;
    }

    friendQuizResponses[friendQuizIndex] = answer;
    const current = friendQuizQuestions[friendQuizIndex];

    if (answerMatches(answer, current.answers)) {
      friendQuizCorrect += 1;
    }

    // Check if we just finished question 10 (index 9) to show dig deeper
    if (friendQuizIndex === 9) {
      showDigDeeper = true;
      renderFriendQuizQuestion();
      return;
    }

    if (friendQuizIndex === friendQuizQuestions.length - 1) {
      showFriendQuizResults();
      return;
    }

    friendQuizIndex += 1;
    renderFriendQuizQuestion();
  }

  function stopResultAudio() {
    if (!resultAudio) return;
    resultAudio.pause();
    resultAudio.currentTime = 0;
    resultAudio.removeAttribute("src");
  }

  function enterQuizAudioMode() {
    stopResultAudio();
    inviteTime = music ? (music.currentTime || 0) : 0;
    pauseAllAudio();
  }

  function exitQuizAudioMode() {
    stopResultAudio();
    pauseAllAudio();

    if (document.body.classList.contains("scroll-mode")) {
      if (music) {
        music.src = "timeless.mp3";
        music.load();
        try {
          music.currentTime = inviteTime || 0;
        } catch (e) {}
        music.volume = 0.7;
        music.loop = true;
        music.play().catch(() => {});
      }
    } else {
      playWhistle();
    }
  }

  function resetQuizUI() {
    quizForm?.reset();

    if (quizResult) quizResult.style.display = "none";
    if (quizResultInner) {
      quizResultInner.classList.remove("show");
      quizResultInner.innerHTML = "";
    }
    if (resultCover) {
      resultCover.classList.remove("show");
      resultCover.removeAttribute("src");
      resultCover.onload = null;
    }
    if (resultBlurb) resultBlurb.textContent = "";
    quizOverlay?.classList.remove("on");
  }

  function openQuiz() {
    scrollYBeforeQuiz = window.scrollY || 0;
    enterQuizAudioMode();
    resetQuizUI();

    document.body.classList.add("quiz-open");
    quizScreen?.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      if (quizScreen) quizScreen.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "auto" });
      blurActiveField();
    }, 0);
  }

  function closeQuiz() {
    document.body.classList.remove("quiz-open");
    quizScreen?.setAttribute("aria-hidden", "true");
    stopResultAudio();

    setTimeout(() => {
      window.scrollTo({ top: scrollYBeforeQuiz, behavior: "auto" });
    }, 0);

    exitQuizAudioMode();
  }

  function computeQuizResult() {
    if (!quizForm) return { error: "Quiz not found." };
    const data = new FormData(quizForm);
    const playerName = (data.get("quizName") || "").toString().trim();

    if (!playerName) {
      return { error: "Type your name first." };
    }

    for (let i = 1; i <= 6; i++) {
      if (!data.get(`q${i}`)) return { error: "Answer all 6 questions first." };
    }

    const scores = Object.fromEntries(SONG_KEYS.map((key) => [key, 0]));

    for (const [key, value] of data.entries()) {
      if (key.startsWith("q") && scores[value] !== undefined) scores[value] += 1;
    }

    const max = Math.max(...Object.values(scores));
    const top = Object.keys(scores).filter((key) => scores[key] === max);
    const chosen = top[Math.floor(Math.random() * top.length)];

    return { chosen, playerName };
  }

  function playResultSong(songKey) {
    pauseAllAudio();

    if (resultCover) {
      resultCover.src = `${songKey}.jpg`;
      resultCover.classList.add("show");
    }

    if (resultAudio) {
      resultAudio.pause();
      resultAudio.currentTime = 0;
      resultAudio.src = `${songKey}.mp3`;
      resultAudio.load();
      resultAudio.play().catch(() => {});
    }
  }

  function revealQuizResult(songKey, playerName) {
    if (!quizResult || !quizResultInner) return;

    const safeName = playerName && playerName.trim() ? playerName.trim() : "You";

    quizResult.style.display = "block";
    quizResultInner.classList.remove("show");
    quizResultInner.innerHTML = `<h2>${safeName}, you are <span>${SONG_PRETTY[songKey] || "a Mystery Track"}</span></h2>`;

    if (resultBlurb) resultBlurb.textContent = SONG_BLURB[songKey] || "";

    if (quizOverlay) {
      quizOverlay.classList.add("on");
      setTimeout(() => quizOverlay.classList.remove("on"), 900);
    }

    requestAnimationFrame(() => quizResultInner.classList.add("show"));
    playResultSong(songKey);

    const scrollToFullResult = () => {
      quizResult.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => window.scrollBy({ top: 140, left: 0, behavior: "smooth" }), 350);
      setTimeout(() => window.scrollBy({ top: 80, left: 0, behavior: "smooth" }), 900);
    };

    setTimeout(scrollToFullResult, 180);

    if (resultCover) {
      resultCover.onload = () => setTimeout(scrollToFullResult, 80);
    }
  }

  startBtn?.addEventListener("click", () => {
    showOnlyPage("page1");
    playInviteMusic();
    loadScrambleLevel(0);
  });

  scrambleSubmit?.addEventListener("click", submitScrambleGuess);

  scrambleInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitScrambleGuess();
    }
  });

  beginFriendQuizBtn?.addEventListener("click", () => {
    friendQuizIndex = 0;
    friendQuizCorrect = 0;
    friendQuizResponses.length = 0;
    showDigDeeper = false;
    
    // Remove any existing dig deeper element
    const existingDigDeeper = document.getElementById("digDeeperText");
    if (existingDigDeeper) {
      existingDigDeeper.remove();
    }
    
    showOnlyPage("friendQuizPage");
    playWhistle();
    renderFriendQuizQuestion();
  });

  friendQuizNextBtn?.addEventListener("click", submitFriendQuizAnswer);

  friendQuizAnswer?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitFriendQuizAnswer();
    }
  });

  openInviteBtn?.addEventListener("click", unlockInvite);

  openQuizBtn?.addEventListener("click", openQuiz);
  quizBackBtn?.addEventListener("click", closeQuiz);
  quizCloseBtn?.addEventListener("click", closeQuiz);

  quizRetryBtn?.addEventListener("click", () => {
    resetQuizUI();
    stopResultAudio();
    if (quizScreen) quizScreen.scrollTop = 0;
    setTimeout(() => blurActiveField(), 0);
  });

  quizFinishBtn?.addEventListener("click", () => {
    const res = computeQuizResult();

    if (res.error) {
      if (!quizResult || !quizResultInner) return;
      quizResult.style.display = "block";
      quizResultInner.classList.remove("show");
      quizResultInner.innerHTML = `<h2>Hold up</h2><p>${res.error}</p>`;
      if (resultBlurb) resultBlurb.textContent = "";
      requestAnimationFrame(() => quizResultInner.classList.add("show"));
      setTimeout(() => quizResult.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      return;
    }

    revealQuizResult(res.chosen, res.playerName);
  });
});
