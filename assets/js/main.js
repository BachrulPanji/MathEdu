// Main Application Logic - Ruang Edukasi
const defaultConfig = {
    app_title: 'Ruang Edukasi'
};

// State Management
let currentSubject = 'math'; // 'math' or 'economics'
let currentData = null;
let currentLevel = null;
let currentTopic = null;
let currentQuestionIndex = 0;
let quizQuestions = [];
let selectedAnswer = null;
let isExamMode = false;
let examTimer = null;
let examTimeLeft = 0;

// Security & Login Check
function checkLogin() {
    const isLoggedIn = localStorage.getItem('ruangEdukasi_loggedIn') === 'true';
    if (!isLoggedIn) {
        window.location.href = './login/index.html';
    }
}

// Stats Calculation
function getGlobalStats() {
    let totalMath = 0;
    let totalEco = 0;

    if (typeof mathTopics !== 'undefined') {
        Object.values(mathTopics).forEach(level => {
            if (level.topics) {
                level.topics.forEach(t => totalMath += (t.questions ? t.questions.length : 0));
            }
        });
    }

    if (typeof economicsTopics !== 'undefined') {
        Object.values(economicsTopics).forEach(level => {
            if (level.topics) {
                level.topics.forEach(t => totalEco += (t.questions ? t.questions.length : 0));
            }
        });
    }

    return {
        subjects: 2,
        questions: totalMath + totalEco
    };
}

// Initialize Data
function initData() {
    currentData = (currentSubject === 'math') ? (typeof mathTopics !== 'undefined' ? mathTopics : null) : (typeof economicsTopics !== 'undefined' ? economicsTopics : null);
    if (!currentData) {
        console.error('Data not loaded yet!');
    }
}

// LocalStorage Functions
function loadProgress() {
    const key = `ruangEdukasiProgress_${currentSubject}`;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {
        totalScore: 0,
        totalCorrect: 0,
        totalAttempted: 0,
        topicProgress: {},
        scoreHistory: [],
        lastPlayed: null
    };
}

function saveProgress(progress) {
    const key = `ruangEdukasiProgress_${currentSubject}`;
    localStorage.setItem(key, JSON.stringify(progress));
}

function getTopicScore(topicId) {
    const progress = loadProgress();
    return progress.topicProgress[topicId] || { correct: 0, attempted: 0, bestScore: 0 };
}

function updateTopicScore(topicId, isCorrect) {
    const progress = loadProgress();
    if (!progress.topicProgress[topicId]) {
        progress.topicProgress[topicId] = { correct: 0, attempted: 0, bestScore: 0 };
    }
    progress.topicProgress[topicId].attempted++;
    progress.totalAttempted++;
    if (isCorrect) {
        progress.topicProgress[topicId].correct++;
        progress.totalCorrect++;
        progress.totalScore += 10;
    }
    progress.lastPlayed = new Date().toISOString();
    progress.scoreHistory.push({
        date: progress.lastPlayed,
        score: progress.totalScore,
        topicId
    });
    if (progress.scoreHistory.length > 30) {
        progress.scoreHistory = progress.scoreHistory.slice(-30);
    }
    saveProgress(progress);
    updateUI();
}

// UI Update Functions
function updateUI() {
    if (!currentData) initData();
    if (!currentData) return;

    const progress = loadProgress();

    // Helper to safely set text content
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setText('nav-score', progress.totalScore);
    setText('total-score', progress.totalScore);
    setText('total-correct', progress.totalCorrect);
    setText('total-attempted', progress.totalAttempted);

    const accuracy = progress.totalAttempted > 0
        ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100)
        : 0;
    setText('accuracy', accuracy + '%');

    // Update level progress
    ['sd', 'smp', 'sma'].forEach(level => {
        const levelData = currentData[level];
        if (levelData) {
            let completedTopics = 0;
            levelData.topics.forEach(topic => {
                const topicScore = getTopicScore(topic.id);
                // Mark topic as done if at least 1 correct answer (can be customized)
                if (topicScore.correct > 0) {
                    completedTopics++;
                }
            });

            const levelProgressEl = document.getElementById(`${level}-progress`);
            if (levelProgressEl) levelProgressEl.textContent = `${completedTopics}/${levelData.topics.length}`;

            const progressBarEl = document.getElementById(`${level}-progress-bar`);
            if (progressBarEl) {
                progressBarEl.style.width = (completedTopics / levelData.topics.length * 100) + '%';
            }
        }
    });

    // Update Global Stats on Landing Page
    const globalStats = getGlobalStats();
    setText('stat-subjects', globalStats.subjects);
    setText('stat-questions', globalStats.questions);

    // Update subject name in UI
    const subjectName = currentSubject === 'math' ? 'Matematika' : 'Ekonomi';
    document.querySelectorAll('.active-subject-name').forEach(el => {
        el.textContent = subjectName;
    });

    // Welcome Message Logic
    if (localStorage.getItem('ruangEdukasi_showWelcome') === 'true') {
        localStorage.removeItem('ruangEdukasi_showWelcome');
        showWelcomeToast();
    }
}

function showWelcomeToast() {
    const toast = document.createElement('div');
    toast.className = 'fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-bounce-in';
    toast.innerHTML = `
        <div class="px-6 py-4 rounded-2xl bg-indigo-500 text-white font-bold shadow-2xl flex items-center gap-3 border border-white/20">
            <span>👋</span>
            Selamat datang generasi bangsa! Selamat belajar!
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.replace('animate-bounce-in', 'animate-fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Subject Switching
function switchSubject(subject) {
    currentSubject = subject;
    initData();
    showCategory(); // Go to category screen immediately
    updateUI();
    // Update active state in dropdown
    document.querySelectorAll('.subject-opt').forEach(opt => {
        opt.classList.toggle('bg-indigo-500/10', opt.dataset.subject === subject);
        opt.classList.toggle('text-indigo-400', opt.dataset.subject === subject);
    });
    // Close dropdown
    const dropdownMenu = document.getElementById('subject-dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.add('hidden');
}

// Navigation Functions
function showHome() {
    hideAllScreens();
    document.getElementById('home-screen').classList.remove('hidden');
    updateUI();
}

function showCategory() {
    hideAllScreens();
    const screen = document.getElementById('category-screen');
    if (screen) {
        screen.classList.remove('hidden');
        // Update subject labels
        const icon = currentSubject === 'math' ? '📐' : '💰';
        const name = currentSubject === 'math' ? 'Matematika' : 'Ekonomi';
        document.querySelector('.active-subject-icon').textContent = icon;
        document.querySelectorAll('.active-subject-name').forEach(el => el.textContent = name);
    }
    updateUI();
}

function hideAllScreens() {
    const screens = ['home-screen', 'category-screen', 'level-screen', 'topic-screen', 'quiz-screen', 'stats-screen', 'creator-screen'];
    screens.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectLevel(level) {
    currentLevel = level;
    hideAllScreens();
    const levelData = currentData[level];
    const color = levelData.color || 'indigo';

    let html = `
    <button onclick="showHome()" class="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <span>←</span> Kembali
    </button>
    <div class="flex items-center gap-4 mb-8">
        <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center text-3xl">${levelData.icon}</div>
        <div>
            <h2 class="text-2xl font-bold">Level ${levelData.name}</h2>
            <p class="text-gray-400">${levelData.topics.length} topik tersedia</p>
        </div>
    </div>
    <div class="grid sm:grid-cols-2 gap-4">
        `;

    levelData.topics.forEach(topic => {
        const topicScore = getTopicScore(topic.id);
        const isCompleted = topicScore.attempted >= 5 && topicScore.correct >= 3;
        html += `
        <div class="topic-card card-glass rounded-2xl p-5 cursor-pointer ${isCompleted ? 'border border-green-500/50' : ''}" onclick="selectTopic('${topic.id}')">
            <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500/30 to-${color}-600/30 flex items-center justify-center text-2xl">${topic.icon}</div>
                <div class="flex-1">
                    <h3 class="font-semibold">${topic.name}</h3>
                    <p class="text-sm text-gray-400">${topicScore.attempted} soal dikerjakan</p>
                </div>
                ${isCompleted ? '<span class="text-green-400 text-xl">✓</span>' : ''}
            </div>
            <div class="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-${color}-500 to-${color}-400" style="width: ${topicScore.attempted > 0 ? Math.min((topicScore.correct / 5) * 100, 100) : 0}%"></div>
            </div>
        </div>
        `;
    });

    html += '</div>';
    document.getElementById('level-screen').innerHTML = html;
    document.getElementById('level-screen').classList.remove('hidden');
}

function selectTopic(topicId) {
    currentTopic = findTopic(topicId);
    if (!currentTopic) return;

    hideAllScreens();
    const color = currentData[currentLevel].color || 'indigo';

    let html = `
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <button onclick="selectLevel('${currentLevel}')" class="flex items-center gap-2 text-gray-400 hover:text-white transition group w-fit">
            <span class="transform group-hover:-translate-x-1 transition-transform">←</span> Kembali
        </button>
        <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center text-2xl">${currentTopic.icon}</div>
            <h2 class="text-2xl font-bold">${currentTopic.name}</h2>
        </div>
    </div>

    <!-- Tabs -->
    <div class="flex bg-gray-800/50 p-1 rounded-xl mb-6 overflow-x-auto scrollbar-hide">
        <button id="tab-concept" onclick="showTab('concept')" class="flex-1 py-3 px-4 rounded-lg btn-primary font-bold transition whitespace-nowrap">📖 Konsep</button>
        <button id="tab-example" onclick="showTab('example')" class="flex-1 py-3 px-4 rounded-lg btn-secondary font-bold transition whitespace-nowrap">💡 Contoh</button>
        <button id="tab-practice" onclick="showTab('practice')" class="flex-1 py-3 px-4 rounded-lg btn-secondary font-bold transition whitespace-nowrap">✏️ Latihan</button>
    </div>

    <!-- Tab Contents -->
    <div id="tab-content-concept" class="card-glass rounded-2xl p-6">
        ${currentTopic.concept}
    </div>

    <div id="tab-content-example" class="hidden card-glass rounded-2xl p-6">
        <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="text-yellow-400">💡</span> Contoh Soal
        </h3>
        <div class="bg-${color}-500/20 rounded-xl p-4 mb-6">
            <p class="font-semibold text-lg">${currentTopic.example.question}</p>
        </div>
        <h4 class="font-semibold mb-3 text-yellow-400">Pembahasan Step-by-Step:</h4>
        <div class="space-y-3">
            ${currentTopic.example.steps.map((step, i) => `
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-${color}-500/30 flex items-center justify-center text-sm font-bold flex-shrink-0">${i + 1}</div>
                <p class="text-gray-300 pt-1">${step}</p>
              </div>
            `).join('')}
        </div>
        <div class="mt-6 p-4 bg-green-500/20 rounded-xl">
            <p class="font-semibold">✅ Jawaban: <span class="text-green-400">${currentTopic.example.answer}</span></p>
        </div>
    </div>

    <div id="tab-content-practice" class="hidden">
        <div class="card-glass rounded-2xl p-6 text-center">
            <div class="text-6xl mb-4">✏️</div>
            <h3 class="text-xl font-bold mb-2">Siap Latihan?</h3>
            <p class="text-gray-400 mb-6">Kerjakan 5 soal untuk menguasai topik ini</p>
            <button onclick="startQuiz('${topicId}')" class="btn-primary px-8 py-3 rounded-xl font-semibold text-lg">
                Mulai Latihan
            </button>
        </div>
    </div>
    `;

    document.getElementById('topic-screen').innerHTML = html;
    document.getElementById('topic-screen').classList.remove('hidden');
}

function showTab(tabName) {
    ['concept', 'example', 'practice'].forEach(tab => {
        const btn = document.getElementById(`tab-${tab}`);
        const content = document.getElementById(`tab-content-${tab}`);
        if (tab === tabName) {
            btn.classList.remove('btn-secondary');
            btn.classList.add('btn-primary');
            content.classList.remove('hidden');
        } else {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
            content.classList.add('hidden');
        }
    });
}

function findTopic(topicId) {
    for (const level of Object.values(currentData)) {
        const topic = level.topics.find(t => t.id === topicId);
        if (topic) return topic;
    }
    return null;
}

// Quiz Functions
function startQuiz(topicId) {
    isExamMode = false;
    currentTopic = findTopic(topicId);
    quizQuestions = [...currentTopic.questions];
    shuffleArray(quizQuestions);
    quizQuestions = quizQuestions.slice(0, 5); // Default practice is 5 questions
    currentQuestionIndex = 0;
    selectedAnswer = null;
    showQuizScreen();
}

function startExam() {
    isExamMode = true;
    showLevelModal('exam');
}

function startRandom() {
    isExamMode = false;
    showLevelModal('random');
}

let quizMode = 'random';

function showLevelModal(mode) {
    quizMode = mode;
    document.getElementById('level-modal').classList.remove('hidden');
}

function closeLevelModal() {
    document.getElementById('level-modal').classList.add('hidden');
}

function selectLevelForQuiz(level) {
    closeLevelModal();
    currentLevel = level;
    if (quizMode === 'exam') {
        startExamWithLevel(level);
    } else {
        startRandomWithLevel(level);
    }
}

function startExamWithLevel(levelKey) {
    isExamMode = true;
    examTimeLeft = 20 * 60;
    quizQuestions = [];

    const level = currentData[levelKey];
    level.topics.forEach(topic => {
        quizQuestions.push(...topic.questions.map(q => ({ ...q, topicName: topic.name, topicId: topic.id })));
    });

    shuffleArray(quizQuestions);
    // Question count based on level and subject
    let limit = 20;
    if (currentSubject === 'economics') {
        if (levelKey === 'sd') limit = 10;
        else if (levelKey === 'smp') limit = 20;
        else if (levelKey === 'sma') limit = 30;
    }

    quizQuestions = quizQuestions.slice(0, limit);
    currentQuestionIndex = 0;
    selectedAnswer = null;
    showQuizScreen();
    startExamTimer();
}

function startRandomWithLevel(levelKey) {
    isExamMode = false;
    quizQuestions = [];

    const level = currentData[levelKey];
    level.topics.forEach(topic => {
        quizQuestions.push(...topic.questions.map(q => ({ ...q, topicId: topic.id, topicName: topic.name })));
    });

    shuffleArray(quizQuestions);
    quizQuestions = quizQuestions.slice(0, 10);
    currentQuestionIndex = 0;
    selectedAnswer = null;
    showQuizScreen();
}

function startExamTimer() {
    examTimer = setInterval(() => {
        examTimeLeft--;
        updateTimerDisplay();
        if (examTimeLeft <= 0) {
            clearInterval(examTimer);
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('exam-timer');
    if (timerEl) {
        const minutes = Math.floor(examTimeLeft / 60);
        const seconds = examTimeLeft % 60;
        timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        if (examTimeLeft < 60) {
            timerEl.classList.add('text-red-400');
        }
    }
}

function showQuizScreen() {
    hideAllScreens();
    renderQuestion();
    document.getElementById('quiz-screen').classList.remove('hidden');
}

function renderQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    const color = currentData[currentLevel].color || 'indigo';

    let html = `
    <div class="max-w-2xl mx-auto">
        <div class="flex items-center justify-between mb-8">
            <button onclick="${isExamMode ? 'showHome()' : (currentTopic ? `selectTopic('${currentTopic.id}')` : 'showHome()')}" class="flex items-center gap-2 text-gray-400 hover:text-white transition group">
                <span class="transform group-hover:-translate-x-1 transition-transform">←</span> ${isExamMode ? 'Berhenti' : 'Kembali'}
            </button>
            ${isExamMode ? `
                <div class="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-xl border border-red-500/20">
                  <span class="animate-pulse">⏱️</span>
                  <span id="exam-timer" class="font-mono font-bold tracking-wider text-lg">20:00</span>
                </div>
              ` : ''}
        </div>

        <div class="mb-8">
            <div class="flex justify-between items-end mb-3">
                <div>
                    <span class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 block">Pertanyaan</span>
                    <h4 class="text-2xl font-black">${currentQuestionIndex + 1}<span class="text-gray-600 font-normal"> / ${quizQuestions.length}</span></h4>
                </div>
                <div class="text-right">
                    ${question.topicName ? `<span class="px-3 py-1 bg-${color}-500/10 text-${color}-400 rounded-lg text-xs font-bold">${question.topicName}</span>` : ''}
                </div>
            </div>
            <div class="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700" style="width: ${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%"></div>
            </div>
        </div>

        <div class="card-glass rounded-3xl p-6 sm:p-10 mb-8 relative overflow-hidden group">
            <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div class="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors"></div>
            <h3 class="text-xl sm:text-2xl font-bold leading-relaxed relative z-10">${question.q}</h3>
        </div>

        <div class="grid gap-4 mb-10" id="options-container">
            ${question.options.map((opt, i) => `
                <button onclick="selectOption(${i})" class="option-btn group relative card-glass rounded-2xl p-5 text-left transition-all duration-300 border border-transparent hover:border-indigo-500/30 hover:bg-white/5" data-index="${i}">
                    <div class="flex items-center gap-4">
                        <span class="w-10 h-10 rounded-xl bg-gray-800 group-hover:bg-indigo-500 flex items-center justify-center text-gray-400 group-hover:text-white font-bold transition-colors">${String.fromCharCode(65 + i)}</span>
                        <span class="text-gray-300 group-hover:text-white transition-colors font-medium text-lg leading-tight flex-1">${opt}</span>
                    </div>
                </button>
              `).join('')}
        </div>

        <div id="quiz-actions" class="flex justify-center sticky bottom-8 z-20">
            <button id="submit-btn" onclick="submitAnswer()" class="btn-primary px-10 py-4 rounded-2xl font-bold text-xl shadow-2xl shadow-indigo-500/20 transform hover:scale-105 active:scale-95 transition-all opacity-50 cursor-not-allowed" disabled>
                Periksa Jawaban
            </button>
        </div>

        <div id="feedback-area" class="hidden mt-8 mb-12 transform animate-in fade-in slide-in-from-bottom-4"></div>
    </div>
    `;

    document.getElementById('quiz-screen').innerHTML = html;
    if (isExamMode) updateTimerDisplay();
}

function selectOption(index) {
    selectedAnswer = index;
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.disabled = false;
    submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
}

function submitAnswer() {
    const question = quizQuestions[currentQuestionIndex];
    const isCorrect = question.options[selectedAnswer] === question.answer;

    if (currentTopic) {
        updateTopicScore(currentTopic.id, isCorrect);
    } else if (question.topicId) {
        updateTopicScore(question.topicId, isCorrect);
    } else {
        const progress = loadProgress();
        progress.totalAttempted++;
        if (isCorrect) {
            progress.totalCorrect++;
            progress.totalScore += 10;
        }
        saveProgress(progress);
        updateUI();
    }

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (question.options[i] === question.answer) {
            btn.classList.add('correct');
        } else if (i === selectedAnswer && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.classList.remove('hidden');
    feedbackArea.innerHTML = `
    <div class="card-glass rounded-2xl p-6 ${isCorrect ? 'border border-green-500/50' : 'border border-red-500/50'}">
        <div class="flex items-center gap-3 mb-3">
            <span class="text-3xl">${isCorrect ? '🎉' : '😔'}</span>
            <span class="text-xl font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}">
                ${isCorrect ? 'Benar! +10 poin' : 'Kurang tepat'}
            </span>
        </div>
        ${!isCorrect ? `<p class="text-gray-300">Jawaban yang benar: <span class="text-green-400 font-semibold">${question.answer}</span></p>` : ''}
    </div>
    `;

    const actionsArea = document.getElementById('quiz-actions');
    actionsArea.innerHTML = `
    <button onclick="nextQuestion()" class="btn-primary px-8 py-3 rounded-xl font-semibold text-lg">
        ${currentQuestionIndex < quizQuestions.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil'}
    </button>
    `;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        selectedAnswer = null;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }

    const progress = loadProgress();
    hideAllScreens();

    const accuracy = Math.round((progress.totalCorrect / Math.max(progress.totalAttempted, 1)) * 100);

    const html = `
    <div class="max-w-md mx-auto text-center py-8">
        <div class="text-8xl mb-6">🏆</div>
        <h2 class="text-3xl font-bold mb-4">Selesai!</h2>
        <p class="text-gray-400 mb-8">${isExamMode ? 'Ujian selesai!' : 'Latihan selesai!'}</p>

        <div class="card-glass rounded-2xl p-6 mb-8">
            <div class="grid grid-cols-2 gap-4">
                <div class="text-center">
                    <div class="text-3xl font-bold text-yellow-400">${progress.totalScore}</div>
                    <div class="text-sm text-gray-400">Total Skor</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-green-400">${accuracy}%</div>
                    <div class="text-sm text-gray-400">Akurasi</div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-3">
            <button onclick="showHome()" class="btn-primary px-8 py-3 rounded-xl font-semibold text-lg">
                Kembali ke Beranda
            </button>
        </div>
    </div>
    `;

    document.getElementById('quiz-screen').innerHTML = html;
    document.getElementById('quiz-screen').classList.remove('hidden');
}

// Stats Screen
function showStats() {
    hideAllScreens();
    const progress = loadProgress();

    let html = `
    <button onclick="showHome()" class="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition">
        <span>←</span> Kembali
    </button>

    <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <span>📊</span> Statistik Belajar (<span class="active-subject-name"></span>)
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="card-glass rounded-2xl p-4 text-center">
            <div class="text-3xl mb-2">🎯</div>
            <div class="text-2xl font-bold text-yellow-400">${progress.totalScore}</div>
            <div class="text-sm text-gray-400">Total Skor</div>
        </div>
        <div class="card-glass rounded-2xl p-4 text-center">
            <div class="text-3xl mb-2">✅</div>
            <div class="text-2xl font-bold text-green-400">${progress.totalCorrect}</div>
            <div class="text-sm text-gray-400">Soal Benar</div>
        </div>
        <div class="card-glass rounded-2xl p-4 text-center">
            <div class="text-3xl mb-2">📚</div>
            <div class="text-2xl font-bold text-blue-400">${progress.totalAttempted}</div>
            <div class="text-sm text-gray-400">Soal Dikerjakan</div>
        </div>
        <div class="card-glass rounded-2xl p-4 text-center">
            <div class="text-3xl mb-2">📈</div>
            <div class="text-2xl font-bold text-purple-400">${progress.totalAttempted > 0 ? Math.round((progress.totalCorrect / progress.totalAttempted) * 100) : 0}%</div>
            <div class="text-sm text-gray-400">Akurasi</div>
        </div>
    </div>

    <!-- Progress Chart placeholder -->
    <div class="card-glass rounded-2xl p-6 mb-8">
        <h3 class="text-lg font-bold mb-4">📈 Grafik Perkembangan Skor</h3>
        <div class="h-48 flex items-end justify-around gap-2">
            ${renderChart(progress.scoreHistory)}
        </div>
    </div>

    <div class="card-glass rounded-2xl p-6">
        <h3 class="text-lg font-bold mb-4">📚 Progress Per Topik</h3>
        <div class="space-y-4 max-h-96 overflow-y-auto scrollbar-thin pr-2">`;

    ['sd', 'smp', 'sma'].forEach(level => {
        const levelData = currentData[level];
        const color = levelData.color || 'indigo';

        html += `<div class="mb-4"><h4 class="font-semibold text-${color}-400 mb-2">${levelData.icon} Level ${levelData.name}</h4>`;

        levelData.topics.forEach(topic => {
            const topicScore = getTopicScore(topic.id);
            const percent = topicScore.attempted > 0 ? Math.round((topicScore.correct / topicScore.attempted) * 100) : 0;
            html += `
                <div class="flex items-center gap-3 py-2 border-b border-gray-700/50">
                    <span class="text-xl">${topic.icon}</span>
                    <div class="flex-1">
                        <div class="flex justify-between text-sm mb-1">
                            <span>${topic.name}</span>
                            <span class="text-gray-400">${topicScore.correct}/${topicScore.attempted}</span>
                        </div>
                        <div class="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-${color}-500 to-${color}-400" style="width: ${percent}%"></div>
                        </div>
                    </div>
                </div>`;
        });
        html += '</div>';
    });

    html += '</div></div>';
    document.getElementById('stats-screen').innerHTML = html;
    document.getElementById('stats-screen').classList.remove('hidden');
}

function renderChart(history) {
    if (!history || history.length === 0) return '<div class="w-full h-full flex items-center justify-center text-gray-500">Belum ada data</div>';
    const maxScore = Math.max(...history.map(h => h.score), 100);
    const displayHistory = history.slice(-10);
    return displayHistory.map((h, i) => {
        const height = (h.score / maxScore) * 100;
        return `<div class="flex-1 flex flex-col items-center gap-1"><div class="w-full bg-indigo-500 rounded-t-lg" style="height: ${height}%"></div></div>`;
    }).join('');
}

function resetProgress() {
    if (confirm('Reset progress untuk mata pelajaran ini?')) {
        const key = `ruangEdukasiProgress_${currentSubject}`;
        localStorage.removeItem(key);
        updateUI();
        showHome();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Custom Modal Function
function showCustomModal({ title, message, icon, onConfirm }) {
    const modal = document.getElementById('custom-modal');
    const titleEl = document.getElementById('modal-title');
    const msgEl = document.getElementById('modal-message');
    const iconEl = document.getElementById('modal-icon');
    const confirmBtn = document.getElementById('modal-confirm-btn');
    const cancelBtn = document.getElementById('modal-cancel-btn');

    if (!modal) return;

    titleEl.textContent = title || 'Konfirmasi';
    msgEl.textContent = message || '';
    iconEl.textContent = icon || '⚠️';

    modal.classList.remove('hidden');

    const closeModal = () => modal.classList.add('hidden');

    confirmBtn.onclick = () => {
        closeModal();
        if (onConfirm) onConfirm();
    };

    cancelBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

// Logout Function
function logout() {
    showCustomModal({
        title: 'Keluar Aplikasi',
        message: 'Apakah Anda yakin ingin keluar dari Ruang Edukasi? Progress yang belum tersimpan mungkin akan hilang.',
        icon: '🚪',
        onConfirm: () => {
            localStorage.removeItem('ruangEdukasi_loggedIn');
            window.location.href = './login/index.html';
        }
    });
}

// Creator Bio
function showCreatorProfile() {
    hideAllScreens();
    document.getElementById('creator-screen').classList.remove('hidden');
}

// FAQ Toggle Logic
function toggleFaq(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('span:last-child');
    const allContent = document.querySelectorAll('.faq-content');
    const allIcons = document.querySelectorAll('#faq button span:last-child');

    allContent.forEach((c, i) => {
        if (c !== content) {
            c.classList.add('hidden');
            allIcons[i].style.transform = 'rotate(0deg)';
        }
    });

    content.classList.toggle('hidden');
    icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW Registered!', reg))
            .catch(err => console.log('SW Failed!', err));
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
    initData();
    updateUI();

    // Navbar subject dropdown logic
    const dropdownBtn = document.getElementById('subject-dropdown-btn');
    const dropdownMenu = document.getElementById('subject-dropdown-menu');

    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
        });

        // Close on click outside
        window.addEventListener('click', (e) => {
            if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            showHome(); // Ensure we are on home screen for these links

            setTimeout(() => {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }, 100);
        });
    });
});
