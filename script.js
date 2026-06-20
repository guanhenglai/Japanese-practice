const kanaData = [
  ["あ", "ア", "a", "basic"], ["い", "イ", "i", "basic"], ["う", "ウ", "u", "basic"], ["え", "エ", "e", "basic"], ["お", "オ", "o", "basic"],
  ["か", "カ", "ka", "basic"], ["き", "キ", "ki", "basic"], ["く", "ク", "ku", "basic"], ["け", "ケ", "ke", "basic"], ["こ", "コ", "ko", "basic"],
  ["さ", "サ", "sa", "basic"], ["し", "シ", "shi", "basic"], ["す", "ス", "su", "basic"], ["せ", "セ", "se", "basic"], ["そ", "ソ", "so", "basic"],
  ["た", "タ", "ta", "basic"], ["ち", "チ", "chi", "basic"], ["つ", "ツ", "tsu", "basic"], ["て", "テ", "te", "basic"], ["と", "ト", "to", "basic"],
  ["な", "ナ", "na", "basic"], ["に", "ニ", "ni", "basic"], ["ぬ", "ヌ", "nu", "basic"], ["ね", "ネ", "ne", "basic"], ["の", "ノ", "no", "basic"],
  ["は", "ハ", "ha", "basic"], ["ひ", "ヒ", "hi", "basic"], ["ふ", "フ", "fu", "basic"], ["へ", "ヘ", "he", "basic"], ["ほ", "ホ", "ho", "basic"],
  ["ま", "マ", "ma", "basic"], ["み", "ミ", "mi", "basic"], ["む", "ム", "mu", "basic"], ["め", "メ", "me", "basic"], ["も", "モ", "mo", "basic"],
  ["や", "ヤ", "ya", "basic"], ["ゆ", "ユ", "yu", "basic"], ["よ", "ヨ", "yo", "basic"],
  ["ら", "ラ", "ra", "basic"], ["り", "リ", "ri", "basic"], ["る", "ル", "ru", "basic"], ["れ", "レ", "re", "basic"], ["ろ", "ロ", "ro", "basic"],
  ["わ", "ワ", "wa", "basic"], ["を", "ヲ", "wo", "basic"], ["ん", "ン", "n", "basic"],
  ["が", "ガ", "ga", "dakuten"], ["ぎ", "ギ", "gi", "dakuten"], ["ぐ", "グ", "gu", "dakuten"], ["げ", "ゲ", "ge", "dakuten"], ["ご", "ゴ", "go", "dakuten"],
  ["ざ", "ザ", "za", "dakuten"], ["じ", "ジ", "ji", "dakuten"], ["ず", "ズ", "zu", "dakuten"], ["ぜ", "ゼ", "ze", "dakuten"], ["ぞ", "ゾ", "zo", "dakuten"],
  ["だ", "ダ", "da", "dakuten"], ["ぢ", "ヂ", "ji", "dakuten"], ["づ", "ヅ", "zu", "dakuten"], ["で", "デ", "de", "dakuten"], ["ど", "ド", "do", "dakuten"],
  ["ば", "バ", "ba", "dakuten"], ["び", "ビ", "bi", "dakuten"], ["ぶ", "ブ", "bu", "dakuten"], ["べ", "ベ", "be", "dakuten"], ["ぼ", "ボ", "bo", "dakuten"],
  ["ぱ", "パ", "pa", "handakuten"], ["ぴ", "ピ", "pi", "handakuten"], ["ぷ", "プ", "pu", "handakuten"], ["ぺ", "ペ", "pe", "handakuten"], ["ぽ", "ポ", "po", "handakuten"],
  ["きゃ", "キャ", "kya", "yoon"], ["きゅ", "キュ", "kyu", "yoon"], ["きょ", "キョ", "kyo", "yoon"],
  ["しゃ", "シャ", "sha", "yoon"], ["しゅ", "シュ", "shu", "yoon"], ["しょ", "ショ", "sho", "yoon"],
  ["ちゃ", "チャ", "cha", "yoon"], ["ちゅ", "チュ", "chu", "yoon"], ["ちょ", "チョ", "cho", "yoon"],
  ["にゃ", "ニャ", "nya", "yoon"], ["にゅ", "ニュ", "nyu", "yoon"], ["にょ", "ニョ", "nyo", "yoon"],
  ["ひゃ", "ヒャ", "hya", "yoon"], ["ひゅ", "ヒュ", "hyu", "yoon"], ["ひょ", "ヒョ", "hyo", "yoon"],
  ["みゃ", "ミャ", "mya", "yoon"], ["みゅ", "ミュ", "myu", "yoon"], ["みょ", "ミョ", "myo", "yoon"],
  ["りゃ", "リャ", "rya", "yoon"], ["りゅ", "リュ", "ryu", "yoon"], ["りょ", "リョ", "ryo", "yoon"],
  ["ぎゃ", "ギャ", "gya", "yoon"], ["ぎゅ", "ギュ", "gyu", "yoon"], ["ぎょ", "ギョ", "gyo", "yoon"],
  ["じゃ", "ジャ", "ja", "yoon"], ["じゅ", "ジュ", "ju", "yoon"], ["じょ", "ジョ", "jo", "yoon"],
  ["びゃ", "ビャ", "bya", "yoon"], ["びゅ", "ビュ", "byu", "yoon"], ["びょ", "ビョ", "byo", "yoon"],
  ["ぴゃ", "ピャ", "pya", "yoon"], ["ぴゅ", "ピュ", "pyu", "yoon"], ["ぴょ", "ピョ", "pyo", "yoon"]
].map(([hiragana, katakana, romaji, category]) => ({ hiragana, katakana, romaji, category }));

const categoryNames = {
  basic: "清音",
  dakuten: "濁音",
  handakuten: "半濁音",
  yoon: "拗音"
};

const state = {
  questions: [],
  currentIndex: 0,
  correct: 0,
  answered: false,
  currentAnswer: null,
  currentDisplay: null,
  japaneseVoice: null
};

const elements = {
  startButton: document.querySelector("#startButton"),
  nextButton: document.querySelector("#nextButton"),
  replayButton: document.querySelector("#replayButton"),
  options: document.querySelector("#options"),
  promptText: document.querySelector("#promptText"),
  promptLabel: document.querySelector("#promptLabel"),
  feedbackText: document.querySelector("#feedbackText"),
  categoryText: document.querySelector("#categoryText"),
  progressText: document.querySelector("#progressText"),
  scoreText: document.querySelector("#scoreText"),
  questionCount: document.querySelector("#questionCount")
};

function getSelectedValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function getSelectedCategories() {
  return [...document.querySelectorAll('input[name="category"]:checked')].map((input) => input.value);
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[nextIndex]] = [result[nextIndex], result[index]];
  }
  return result;
}

function kanaFor(item, script) {
  if (script === "katakana") return item.katakana;
  if (script === "mixed") return Math.random() > 0.5 ? item.hiragana : item.katakana;
  return item.hiragana;
}

function buildPool(mode = getSelectedValue("mode")) {
  const categories = getSelectedCategories();
  const pool = kanaData.filter((item) => categories.includes(item.category));
  if (mode !== "romaji-to-kana") return pool;

  const seenRomaji = new Set();
  return pool.filter((item) => {
    if (seenRomaji.has(item.romaji)) return false;
    seenRomaji.add(item.romaji);
    return true;
  });
}

function makeQuestions(pool, count) {
  const questions = [];
  while (questions.length < count) {
    questions.push(...shuffle(pool));
  }
  return questions.slice(0, count);
}

function makeOptions(correctItem, pool, mode, script, correctDisplay) {
  const valueFor = (item) => mode === "kana-to-romaji" ? item.romaji : kanaFor(item, script);
  const correctValue = mode === "kana-to-romaji" ? correctItem.romaji : correctDisplay;
  const values = [correctValue];
  const candidates = shuffle(pool).filter((item) => item !== correctItem && item.romaji !== correctItem.romaji);

  for (const item of candidates) {
    const value = valueFor(item);
    if (!values.includes(value)) values.push(value);
    if (values.length === 4) break;
  }

  return shuffle(values);
}

function updateScore() {
  const answeredCount = state.currentIndex + (state.answered ? 1 : 0);
  const total = state.questions.length;
  const percent = answeredCount === 0 ? 0 : Math.round((state.correct / answeredCount) * 100);
  elements.progressText.textContent = `${Math.min(answeredCount, total)} / ${total}`;
  elements.scoreText.textContent = `${percent}%`;
}

function loadVoices() {
  const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
  state.japaneseVoice = voices.find((voice) => voice.lang === "ja-JP") || voices.find((voice) => voice.lang.startsWith("ja")) || null;
}

function speakCurrentAnswer() {
  if (!window.speechSynthesis || !state.currentAnswer) {
    elements.feedbackText.textContent += " 這個瀏覽器不支援語音播放。";
    return;
  }

  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(state.currentAnswer.hiragana);
  utterance.lang = "ja-JP";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  if (state.japaneseVoice) utterance.voice = state.japaneseVoice;
  speechSynthesis.speak(utterance);
}

function renderQuestion() {
  const mode = getSelectedValue("mode");
  const script = getSelectedValue("script");
  const pool = buildPool();
  const item = state.questions[state.currentIndex];
  const displayKana = kanaFor(item, script);
  const prompt = mode === "kana-to-romaji" ? displayKana : item.romaji;
  const correctDisplay = mode === "kana-to-romaji" ? item.romaji : displayKana;
  const options = makeOptions(item, pool, mode, script, correctDisplay);

  state.answered = false;
  state.currentAnswer = item;
  state.currentDisplay = correctDisplay;
  elements.promptText.textContent = prompt;
  elements.promptText.classList.toggle("romaji", mode === "romaji-to-kana");
  elements.promptLabel.textContent = mode === "kana-to-romaji" ? "這個假名的發音是？" : "這個發音的日語寫法是？";
  elements.categoryText.textContent = `${categoryNames[item.category]} · 第 ${state.currentIndex + 1} 題`;
  elements.feedbackText.textContent = "選出正確答案。";
  elements.nextButton.hidden = true;
  elements.replayButton.disabled = true;
  elements.options.innerHTML = "";

  for (const option of options) {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(button, option));
    elements.options.append(button);
  }

  updateScore();
  if (mode === "romaji-to-kana") {
    elements.replayButton.disabled = false;
    speakCurrentAnswer();
  }
}

function answerQuestion(button, selectedValue) {
  if (state.answered) return;

  state.answered = true;
  const isCorrect = selectedValue === state.currentDisplay;
  if (isCorrect) state.correct += 1;

  for (const optionButton of elements.options.querySelectorAll("button")) {
    optionButton.disabled = true;
    if (optionButton.textContent === state.currentDisplay) optionButton.classList.add("correct");
  }
  if (!isCorrect) button.classList.add("wrong");

  elements.feedbackText.textContent = isCorrect
    ? `正確：${state.currentAnswer.hiragana} / ${state.currentAnswer.katakana} = ${state.currentAnswer.romaji}`
    : `答錯了。正確答案：${state.currentDisplay}（${state.currentAnswer.hiragana} / ${state.currentAnswer.katakana} = ${state.currentAnswer.romaji}）`;
  elements.replayButton.disabled = false;
  elements.nextButton.hidden = false;
  elements.nextButton.textContent = state.currentIndex === state.questions.length - 1 ? "查看結果" : "下一題";
  updateScore();
  speakCurrentAnswer();
}

function startQuiz() {
  const pool = buildPool();
  if (pool.length < 4) {
    elements.feedbackText.textContent = "請至少選擇一個足夠產生選項的題目範圍。";
    return;
  }

  state.questions = makeQuestions(pool, Number(elements.questionCount.value));
  state.currentIndex = 0;
  state.correct = 0;
  elements.startButton.textContent = "重新開始";
  renderQuestion();
}

function nextQuestion() {
  if (state.currentIndex >= state.questions.length - 1) {
    const percent = Math.round((state.correct / state.questions.length) * 100);
    elements.promptText.textContent = `${percent}%`;
    elements.promptText.classList.add("romaji");
    elements.promptLabel.textContent = "本輪正確率";
    elements.categoryText.textContent = "練習完成";
    elements.feedbackText.textContent = `答對 ${state.correct} / ${state.questions.length} 題。可以調整設定後重新開始。`;
    elements.options.innerHTML = "";
    elements.nextButton.hidden = true;
    elements.replayButton.disabled = true;
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

elements.startButton.addEventListener("click", startQuiz);
elements.nextButton.addEventListener("click", nextQuestion);
elements.replayButton.addEventListener("click", speakCurrentAnswer);

if (window.speechSynthesis) {
  loadVoices();
  speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}
