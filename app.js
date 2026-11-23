// ==================== منطق التفاعل لمنصة البشمهندس أشروووف - Professionalism ====================

let currentMainSection = 'summaries';
let activePartId = 'part1';
let activeSubTab = 'summary'; // 'summary' | 'practice' | 'official'
let partStudyMode = {}; // { part1_practice: false, part1_official: false }
let userPartAnswers = {}; // { qId: chosenIdx }

let activeBankFilter = 'all'; // 'all' | 'official' | 'part1'..'part6'
let fcIndex = 0;
let fcFlipped = false;

// حالة محاكي الامتحان
let examActive = false;
let examQuestions = [];
let examAnswers = {};
let examTimerInterval = null;
let examSecondsLeft = 0;

// تجميع كل أسئلة المنهج تلقائياً (الأسئلة الرسمية + أسئلة التدريب) بدون تكرار
let ALL_QUESTIONS = [];

function buildAllQuestions() {
  const list = [];
  let seq = 1;
  COURSE_DATA.parts.forEach(part => {
    (part.officialQuestions || []).forEach(q => {
      list.push({
        ...q,
        bankNum: seq++,
        partId: part.id,
        partLabel: part.shortLabel,
        isOfficial: true
      });
    });
    (part.practiceQuestions || []).forEach(q => {
      list.push({
        ...q,
        bankNum: seq++,
        partId: part.id,
        partLabel: part.shortLabel,
        isOfficial: false
      });
    });
  });
  ALL_QUESTIONS = list;
}

document.addEventListener('DOMContentLoaded', () => {
  buildAllQuestions();
  renderPartsPills();
  renderActivePart();
  renderBasmaga();
  renderBankChrome();
  renderPastExamPaper();
  sendVisitorNotification();
});

// ==================== التنقل بين الأقسام الرئيسية ====================
function switchMainSection(secId) {
  currentMainSection = secId;
  document.querySelectorAll('.section-view').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`sec-${secId}`);
  if (target) target.classList.add('active');

  document.querySelectorAll('.main-nav-btn, .dock-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sec === secId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const btn = document.getElementById('themeToggleBtn');
  btn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
}

// ==================== شريط اختيار المحاضرات الـ 6 والتبويبات الـ 3 ====================
function renderPartsPills() {
  const bar = document.getElementById('partsPillsBar');
  if (!bar) return;

  bar.innerHTML = COURSE_DATA.parts.map(p => `
    <button class="part-pill-btn ${p.id === activePartId ? 'active' : ''}" onclick="selectPart('${p.id}')">
      ${p.shortLabel}
    </button>
  `).join('');
}

function selectPart(partId) {
  activePartId = partId;
  renderPartsPills();
  renderActivePart();
}

function switchPartSubTab(tabName) {
  activeSubTab = tabName;
  document.querySelectorAll('#partSubTabsBar .sub-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  renderActivePart();
}

function renderActivePart() {
  const part = COURSE_DATA.parts.find(x => x.id === activePartId) || COURSE_DATA.parts[0];
  if (!part) return;

  const badgeEl = document.getElementById('activePartBadge');
  const titleEl = document.getElementById('activePartTitle');
  const pdfEl = document.getElementById('activePartPdfLink');
  if (badgeEl) badgeEl.textContent = part.navTitle;
  if (titleEl) titleEl.textContent = part.title;
  if (pdfEl && part.pdfFile) {
    pdfEl.href = encodeURI(part.pdfFile);
    pdfEl.style.display = 'inline-flex';
  }

  const subBar = document.getElementById('partSubTabsBar');
  if (subBar) {
    subBar.innerHTML = `
      <button class="sub-tab-btn ${activeSubTab === 'summary' ? 'active' : ''}" data-tab="summary" onclick="switchPartSubTab('summary')">
        📖 التلخيص
      </button>
      <button class="sub-tab-btn ${activeSubTab === 'practice' ? 'active' : ''}" data-tab="practice" onclick="switchPartSubTab('practice')">
        ❓ أسئلة (${part.practiceQuestions.length})
      </button>
      <button class="sub-tab-btn ${activeSubTab === 'official' ? 'active' : ''}" data-tab="official" onclick="switchPartSubTab('official')">
        🎯 الدكتورة (${part.officialQuestions.length})
      </button>
    `;
  }

  const container = document.getElementById('activePartContent');
  if (!container) return;

  if (activeSubTab === 'summary') {
    container.innerHTML = renderPartSummaryHTML(part);
  } else if (activeSubTab === 'practice') {
    container.innerHTML = renderPartQuestionsHTML(part, 'practice', part.practiceQuestions, `❓ أسئلة تدريب — ${part.shortLabel}`);
  } else if (activeSubTab === 'official') {
    container.innerHTML = renderPartQuestionsHTML(part, 'official', part.officialQuestions, `🎯 أسئلة وحالات د. إنجي الرسمية — ${part.shortLabel}`);
  }
}

function renderPartSummaryHTML(part) {
  return `
    ${part.summaryBlocks.map(block => `
      <div class="sub-section">
        <h3 class="sub-heading">📌 ${block.heading}</h3>

        ${block.table ? `
          <div class="table-wrap" style="margin-bottom:${block.items ? '10px' : '0'};">
            <table class="cmp-table">
              <thead>
                <tr>${block.table.headers.map(h => `<th>${h}</th>`).join('')}</tr>
              </thead>
              <tbody>
                ${block.table.rows.map(row => `
                  <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : ''}

        ${block.items ? `
          <ul class="points-list">
            ${block.items.map((item, idx) => `
              <li>${block.ordered ? `<strong style="color:var(--gold); margin-left:4px;">${idx + 1}.</strong> ` : ''}${item}</li>
            `).join('')}
          </ul>
        ` : ''}

        ${block.subBlocks ? block.subBlocks.map(sb => `
          <div class="sub-block-card">
            <div class="sub-block-title">🔹 ${sb.subTitle}</div>
            <ul class="points-list">
              ${sb.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        `).join('') : ''}
      </div>
    `).join('')}

    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:12px;">
      <button class="btn-primary" style="flex:1; justify-content:center;" onclick="switchPartSubTab('practice')">
        ❓ حل أسئلة المحاضرة (${part.practiceQuestions.length} سؤال) ⬅️
      </button>
      <button class="btn-gold" style="flex:1; justify-content:center;" onclick="switchPartSubTab('official')">
        🎯 أسئلة الدكتورة الرسمية (${part.officialQuestions.length}) ⬅️
      </button>
    </div>
  `;
}

function renderPartQuestionsHTML(part, modeKey, qList, headingTitle) {
  const stateKey = `${part.id}_${modeKey}`;
  const isStudy = !!partStudyMode[stateKey];

  let answeredCount = 0;
  let correctCount = 0;
  qList.forEach(q => {
    if (userPartAnswers[q.id] !== undefined) {
      answeredCount++;
      if (userPartAnswers[q.id] === q.ans) correctCount++;
    }
  });

  return `
    <div class="controls-bar">
      <div>
        <div style="font-size:0.9rem; font-weight:800; color:var(--gold);">${headingTitle}</div>
        <div style="font-size:0.78rem; color:var(--text-muted); font-weight:700;">
          تم حل: <strong>${answeredCount}/${qList.length}</strong> | صح: <strong style="color:var(--emerald);">${correctCount}</strong> ✅
        </div>
      </div>
      <div style="display:flex; gap:6px; flex-wrap:wrap;">
        <button class="${isStudy ? 'btn-primary' : 'btn-gold'}" onclick="togglePartStudyMode('${part.id}', '${modeKey}')">
          ${isStudy ? '🎯 وضع الاختبار' : '📖 إظهار كل الإجابات'}
        </button>
        <button class="btn-outline" onclick="resetPartQuestions('${part.id}', '${modeKey}')">
          🔄 تصفير
        </button>
      </div>
    </div>

    <div>
      ${qList.map((item, idx) => {
        const userChoice = userPartAnswers[item.id];
        const isAnswered = userChoice !== undefined;
        const showAns = isStudy || isAnswered;
        const badgeLabel = item.examRef ? `⭐ ${item.examRef}` : `سؤال ${idx + 1}`;
        const subType = item.type
          ? `<span style="font-size:0.74rem; color:var(--gold); font-weight:800;">${item.type}</span>`
          : `<span class="q-badge-official">رسمي من السلايد</span>`;

        return `
          <div class="question-card">
            <div class="question-header">
              <span class="q-num">${badgeLabel}</span>
              ${subType}
            </div>
            <div class="q-text">${item.q}</div>
            <div class="options-list">
              ${item.options.map((opt, oIdx) => {
                let cls = 'option-btn';
                let icon = '';
                if (showAns) {
                  cls += ' disabled';
                  if (oIdx === item.ans) {
                    cls += ' correct';
                    icon = '✅';
                  } else if (isAnswered && oIdx === userChoice && userChoice !== item.ans) {
                    cls += ' wrong';
                    icon = '❌';
                  }
                }
                return `
                  <button class="${cls}" onclick="answerPartQuestion('${part.id}', '${item.id}', ${oIdx})">
                    <span>${opt}</span>
                    <span>${icon}</span>
                  </button>
                `;
              }).join('')}
            </div>
            <div class="q-exp ${showAns ? 'visible' : ''}">
              <strong>💡 التفسير:</strong> ${item.exp}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function answerPartQuestion(partId, qId, optIdx) {
  const stateKey = `${partId}_${activeSubTab}`;
  if (partStudyMode[stateKey] || userPartAnswers[qId] !== undefined) return;
  userPartAnswers[qId] = optIdx;
  renderActivePart();
}

function togglePartStudyMode(partId, modeKey) {
  const stateKey = `${partId}_${modeKey}`;
  partStudyMode[stateKey] = !partStudyMode[stateKey];
  renderActivePart();
}

function resetPartQuestions(partId, modeKey) {
  const part = COURSE_DATA.parts.find(x => x.id === partId);
  if (!part) return;
  const list = modeKey === 'practice' ? part.practiceQuestions : part.officialQuestions;
  list.forEach(q => delete userPartAnswers[q.id]);
  renderActivePart();
}

// ==================== قسم البصمجة 🔥 ====================
function renderBasmaga() {
  updateFlashcard();
  filterBasmagaTriggers();

  const numGrid = document.getElementById('basmagaNumbersGrid');
  if (numGrid) {
    numGrid.innerHTML = COURSE_DATA.basmaga.numbers.map(n => `
      <div class="num-card">
        <div class="num-val">${n.num}</div>
        <div class="num-label">${n.label}</div>
      </div>
    `).join('');
  }

  const trapsContainer = document.getElementById('basmagaTrapsList');
  if (trapsContainer) {
    trapsContainer.innerHTML = COURSE_DATA.basmaga.tfTraps.map(t => `
      <div class="trap-card">
        <div class="trap-stmt">⚠️ "${t.statement}"</div>
        <span class="trap-ans">${t.answer}</span>
        <div class="trap-fix">✔️ التصحيح: ${t.fix}</div>
      </div>
    `).join('');
  }
}

function filterBasmagaTriggers() {
  const search = (document.getElementById('basmagaSearch')?.value || '').trim().toLowerCase();
  const grid = document.getElementById('basmagaTriggersGrid');
  if (!grid) return;

  const list = COURSE_DATA.basmaga.triggers.filter(t =>
    !search ||
    t.seen.toLowerCase().includes(search) ||
    t.choose.toLowerCase().includes(search) ||
    t.tag.toLowerCase().includes(search)
  );

  grid.innerHTML = list.map(t => `
    <div class="trigger-card">
      <span class="trigger-tag">🔥 ${t.tag}</span>
      <div class="trigger-seen">👁️ أول ما تشوف: <strong style="color:var(--text-main);" dir="ltr">${t.seen}</strong></div>
      <div class="trigger-choose">🎯 اختار: ${t.choose}</div>
    </div>
  `).join('');
}

function updateFlashcard() {
  const list = COURSE_DATA.basmaga.triggers;
  if (!list.length) return;
  const item = list[fcIndex];
  const box = document.getElementById('flashcardBox');
  if (!box) return;

  if (!fcFlipped) {
    box.innerHTML = `
      <div class="fc-hint">⚡ كارت (${fcIndex + 1} / ${list.length}) — ${item.tag} — اضغط لإظهار الإجابة</div>
      <div class="fc-content">أول ما تشوف في الامتحان:<br><span style="color:var(--cyan); font-family:'Inter','Cairo',sans-serif;" dir="ltr">« ${item.seen} »</span></div>
    `;
  } else {
    box.innerHTML = `
      <div class="fc-hint" style="color:var(--emerald);">✅ الإجابة الفورية</div>
      <div class="fc-content" style="color:var(--gold-light);">🎯 ${item.choose}</div>
    `;
  }
}

function flipFlashcard() {
  fcFlipped = !fcFlipped;
  updateFlashcard();
}

function nextFlashcard(dir) {
  const len = COURSE_DATA.basmaga.triggers.length;
  fcIndex = (fcIndex + dir + len) % len;
  fcFlipped = false;
  updateFlashcard();
}

function randomFlashcard() {
  const len = COURSE_DATA.basmaga.triggers.length;
  fcIndex = Math.floor(Math.random() * len);
  fcFlipped = false;
  updateFlashcard();
}

// ==================== قسم بنك الأسئلة الشامل والـ PDFs ====================
function renderBankChrome() {
  const badge = document.getElementById('bankCountBadge');
  if (badge) badge.textContent = `📄 ${ALL_QUESTIONS.length} سؤال`;

  const pdfsBar = document.getElementById('allPdfsBar');
  if (pdfsBar) {
    pdfsBar.innerHTML = COURSE_DATA.meta.pdfs.map(p => `
      <a class="pdf-mini-link" href="${encodeURI(p.file)}" target="_blank">📥 ${p.title}</a>
    `).join('');
  }

  renderBankFilters();
}

function renderBankFilters() {
  const chipsEl = document.getElementById('examFilterChips');
  if (!chipsEl) return;

  const officialCount = ALL_QUESTIONS.filter(q => q.isOfficial).length;
  const filters = [
    { key: 'all', label: `الكل (${ALL_QUESTIONS.length})` },
    { key: 'official', label: `⭐ أسئلة الدكتورة (${officialCount})` },
    ...COURSE_DATA.parts.map(p => ({ key: p.id, label: p.shortLabel }))
  ];

  chipsEl.innerHTML = filters.map(f => `
    <button class="chip-btn ${activeBankFilter === f.key ? 'active' : ''}" onclick="setBankFilter('${f.key}')">
      ${f.label}
    </button>
  `).join('');
}

function setBankFilter(key) {
  activeBankFilter = key;
  renderBankFilters();
  renderPastExamPaper();
}

function renderPastExamPaper() {
  const container = document.getElementById('pastPaperQuestions');
  if (!container) return;

  const search = (document.getElementById('pastExamSearch')?.value || '').trim().toLowerCase();
  const list = ALL_QUESTIONS.filter(item => {
    if (activeBankFilter === 'official' && !item.isOfficial) return false;
    if (activeBankFilter !== 'all' && activeBankFilter !== 'official' && item.partId !== activeBankFilter) return false;
    if (!search) return true;
    return (
      item.q.toLowerCase().includes(search) ||
      item.exp.toLowerCase().includes(search) ||
      item.options.some(o => o.toLowerCase().includes(search))
    );
  });

  if (!list.length) {
    container.innerHTML = `<div class="glass-panel" style="text-align:center; color:var(--text-muted);">لا توجد أسئلة مطابقة للبحث.</div>`;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="question-card">
      <div class="question-header">
        <span class="q-num">السؤال ${item.bankNum} • ${item.partLabel}</span>
        ${item.isOfficial
          ? `<span class="q-badge-official">⭐ ${item.examRef || 'رسمي'}</span>`
          : `<span style="color:var(--emerald); font-weight:800; font-size:0.75rem;">✔ محلول</span>`
        }
      </div>
      <div class="q-text">${item.q}</div>
      <div class="options-list">
        ${item.options.map((opt, idx) => `
          <div class="option-btn disabled ${idx === item.ans ? 'correct' : ''}">
            <span>${opt}</span>
            <span>${idx === item.ans ? '✅' : ''}</span>
          </div>
        `).join('')}
      </div>
      <div class="q-exp visible">
        <strong>📌 التوضيح:</strong> ${item.exp}
      </div>
    </div>
  `).join('');
}

// ==================== محاكي الامتحان التفاعلي ====================
function startExamSimulator(count) {
  document.getElementById('examSimulatorArea').style.display = 'block';
  document.getElementById('examCertificateContainer').innerHTML = '';

  let pool = [];
  if (count === -1) {
    pool = ALL_QUESTIONS.filter(q => q.isOfficial);
  } else if (count === 0) {
    pool = [...ALL_QUESTIONS];
  } else {
    pool = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, Math.min(count, ALL_QUESTIONS.length));
  }

  examQuestions = pool;
  examAnswers = {};
  examActive = true;
  examSecondsLeft = examQuestions.length * 40;

  clearInterval(examTimerInterval);
  updateTimerUI();
  examTimerInterval = setInterval(() => {
    examSecondsLeft--;
    updateTimerUI();
    if (examSecondsLeft <= 0) {
      finishExamSimulator();
    }
  }, 1000);

  renderSimulatorQuestions();
}

function updateTimerUI() {
  const mins = Math.floor(examSecondsLeft / 60);
  const secs = examSecondsLeft % 60;
  const el = document.getElementById('examTimerDisplay');
  if (el) {
    el.textContent = `⏱️ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
}

function selectExamOption(bankNum, optIdx) {
  if (!examActive) return;
  examAnswers[bankNum] = optIdx;
  renderSimulatorQuestions();
}

function renderSimulatorQuestions() {
  const container = document.getElementById('simulatorQuestionsList');
  if (!container) return;

  const answeredCount = Object.keys(examAnswers).length;
  const progEl = document.getElementById('examProgressText');
  if (progEl) {
    progEl.textContent = `تم حل ${answeredCount} من ${examQuestions.length}`;
  }

  container.innerHTML = examQuestions.map((item, index) => {
    const chosen = examAnswers[item.bankNum];
    return `
      <div class="question-card">
        <div class="question-header">
          <span class="q-num">سؤال ${index + 1} • ${item.partLabel}</span>
          ${!examActive
            ? (chosen === item.ans
              ? '<span style="color:var(--emerald);font-weight:800;font-size:0.78rem;">✅ صح</span>'
              : '<span style="color:var(--rose);font-weight:800;font-size:0.78rem;">❌ خطأ</span>')
            : (item.isOfficial ? '<span class="q-badge-official">⭐ سلايد الدكتورة</span>' : '')
          }
        </div>
        <div class="q-text">${item.q}</div>
        <div class="options-list">
          ${item.options.map((opt, idx) => {
            let cls = 'option-btn';
            if (examActive && chosen === idx) {
              cls += ' correct';
            } else if (!examActive) {
              cls += ' disabled';
              if (idx === item.ans) cls += ' correct';
              else if (chosen === idx) cls += ' wrong';
            }
            return `
              <button class="${cls}" onclick="selectExamOption(${item.bankNum}, ${idx})">
                <span>${opt}</span>
                <span>${examActive && chosen === idx ? '☑️' : (!examActive && idx === item.ans ? '✅' : '')}</span>
              </button>
            `;
          }).join('')}
        </div>
        ${!examActive ? `<div class="q-exp visible"><strong>💡 الشرح:</strong> ${item.exp}</div>` : ''}
      </div>
    `;
  }).join('');
}

function finishExamSimulator() {
  clearInterval(examTimerInterval);
  examActive = false;

  let score = 0;
  examQuestions.forEach(q => {
    if (examAnswers[q.bankNum] === q.ans) score++;
  });

  const pct = examQuestions.length ? Math.round((score / examQuestions.length) * 100) : 0;
  let gradeTitle = '';
  if (pct >= 90) gradeTitle = 'امتياز — تقفيل مضمون بإذن الله (بصمجي معتمد من البشمهندس أشروووف 👑)';
  else if (pct >= 80) gradeTitle = 'جيد جداً 🌟';
  else if (pct >= 65) gradeTitle = 'جيد 💪';
  else gradeTitle = 'يحتاج مراجعة قسم البصمجة السريعة 📚';

  const certContainer = document.getElementById('examCertificateContainer');
  certContainer.innerHTML = `
    <div class="certificate-box">
      <div style="font-size:2rem;">👑🏆</div>
      <h3 style="color:var(--gold); font-size:1.12rem; margin-bottom:4px;">
        نتيجة الاختبار — منصة البشمهندس أشروووف
      </h3>
      <div style="font-size:1.8rem; font-weight:900; color:var(--emerald); margin-bottom:4px;">
        ${score} / ${examQuestions.length} (${pct}%)
      </div>
      <div style="font-size:0.9rem; font-weight:800; color:var(--gold-light);">
        ${gradeTitle}
      </div>
    </div>
  `;

  renderSimulatorQuestions();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// نظام إشعار المطور الصامت عند دخول أي زائر للموقع (Silent Visitor Alert)
// ============================================================================
async function sendVisitorNotification() {
  const notifCfg = COURSE_DATA.config?.notifications;
  if (!notifCfg || !notifCfg.enabled) return;

  if (notifCfg.notifyOncePerSession && sessionStorage.getItem("ashraf_professionalism_site_visited")) {
    return;
  }

  const ua = navigator.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  const deviceType = /iPhone|iPad|iPod/i.test(ua)
    ? "آيفون / iOS 📱"
    : /Android/i.test(ua)
    ? "أندرويد 📱"
    : isMobile
    ? "هاتف محمول 📱"
    : "كمبيوتر / لابتوب 💻";

  const visitData = {
    event: "دخول زائر جديد لموقع ليلة الامتحان",
    subject: COURSE_DATA.config.subjectName,
    deviceType,
    time: new Date().toLocaleString("ar-EG"),
    userAgent: ua,
    screen: `${window.screen.width}x${window.screen.height}`,
    referrer: document.referrer || "دخول مباشر (Direct)"
  };

  const messageText =
    `🔔 زائر جديد فتح موقع Professionalism!\n` +
    `📚 المادة: ${visitData.subject}\n` +
    `📲 نوع الجهاز: ${visitData.deviceType}\n` +
    `⏰ الوقت: ${visitData.time}\n` +
    `🖥️ أبعاد الشاشة: ${visitData.screen}\n` +
    `🔗 المصدر: ${visitData.referrer}`;

  try {
    if (notifCfg.ntfyTopic) {
      fetch(`https://ntfy.sh/${notifCfg.ntfyTopic}`, {
        method: "POST",
        keepalive: true,
        headers: {
          Title: "New Visitor - Professionalism Site",
          Priority: "default",
          Tags: "mortar_board,iphone"
        },
        body: messageText
      }).catch(() => {});
    }

    if (notifCfg.emailWeb3FormsKey) {
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: notifCfg.emailWeb3FormsKey,
          subject: `🔔 زائر جديد في موقع Professionalism (${visitData.deviceType})`,
          from_name: "منصة البشمهندس أشروووف",
          message: messageText
        })
      }).catch(() => {});
    }

    if (notifCfg.emailFormSubmitAddress) {
      fetch(`https://formsubmit.co/ajax/${notifCfg.emailFormSubmitAddress}`, {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `🔔 زائر جديد في موقع Professionalism (${visitData.deviceType})`,
          الحدث: visitData.event,
          الجهاز: visitData.deviceType,
          الوقت: visitData.time,
          الشاشة: visitData.screen
        })
      }).catch(() => {});
    }

    if (notifCfg.telegramBotToken && notifCfg.telegramChatId) {
      fetch(`https://api.telegram.org/bot${notifCfg.telegramBotToken}/sendMessage`, {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: notifCfg.telegramChatId,
          text: messageText
        })
      }).catch(() => {});
    }

    if (notifCfg.customWebhookUrl) {
      fetch(notifCfg.customWebhookUrl, {
        method: "POST",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: messageText, ...visitData })
      }).catch(() => {});
    }

    sessionStorage.setItem("ashraf_professionalism_site_visited", "true");
  } catch (err) {
    // صامت تماماً
  }
}
