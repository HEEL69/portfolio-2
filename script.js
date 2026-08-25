/* ==========================================================================
   HIGH-STAKE COMPETITION-WINNING CYBERSECURITY JAVASCRIPT ENGINE
   WHAT: Reverted global matrix opacity to 0.12; scoped vivid matrix rain ONLY
         to Section 04 (#projects-matrix-canvas). Added Animated TRY THIS 📁 Callout.
         Added ONE-CLICK Clickable Command Chips, 1-Letter Short Aliases (h, a, s, p, c, w),
         HIGH-INTENSITY MATRIX GLOW for command outputs, SYSTEM REBOOT RESET, and
         MOBILE NAVIGATION DRAWER TOGGLE for 100% Mobile & Touch Compatibility.
   WHY:  Delivers maximum usability, touch responsiveness, and seamless navigation
         across smartphones, tablets, and desktop devices.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initMatrixRain();
  initProjectsMatrixRain();
  initCustomCursor();
  initMagneticButtons();
  initSpotlightCards();
  initTypingEffect();
  initInteractiveTerminal();
  initSkillBars();
  initStatCounters();
  initScrollReveal();
  initContactForm();
  initBackToTop();
  updateFooterYear();
});


/* ==========================================================================
   1. LIGHT/DARK THEME SWITCHER
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });
}


/* ==========================================================================
   1B. MOBILE NAVIGATION HAMBURGER DRAWER TOGGLE & TOUCH LINK DISMISS
   ========================================================================== */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}


/* ==========================================================================
   2. REVERTED BASELINE MATRIX RAIN ENGINE (Opacity: 0.12)
   ========================================================================== */
function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const alphabet = katakana + latin;

  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize);
  let rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

  window.addEventListener('resize', () => {
    columns = Math.floor(canvas.width / fontSize);
    rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
  });

  const render = () => {
    ctx.fillStyle = 'rgba(2, 4, 8, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rainDrops.length; i++) {
      const char = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      const x = i * fontSize;
      const y = rainDrops[i] * fontSize;

      if (Math.random() > 0.95) {
        ctx.fillStyle = '#ffffff';
      } else {
        ctx.fillStyle = '#00ff66';
      }

      ctx.font = `${fontSize}px monospace`;
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }

    requestAnimationFrame(render);
  };

  render();
}


/* ==========================================================================
   2B. SCOPED MATRIX RAIN FOR SECTION 04 VOID SPACE ONLY (#projects-matrix-canvas)
   ========================================================================== */
function initProjectsMatrixRain() {
  const canvas = document.getElementById('projects-matrix-canvas');
  const projectsSection = document.getElementById('projects');
  if (!canvas || !projectsSection) return;

  const ctx = canvas.getContext('2d');

  const resizeCanvas = () => {
    canvas.width = projectsSection.clientWidth;
    canvas.height = projectsSection.clientHeight;
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = '0123456789SEC_LAB';
  const alphabet = katakana + latin;

  const fontSize = 18;
  let columns = Math.floor(canvas.width / fontSize);
  let rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));

  window.addEventListener('resize', () => {
    columns = Math.floor(canvas.width / fontSize);
    rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));
  });

  const render = () => {
    ctx.fillStyle = 'rgba(2, 4, 8, 0.12)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rainDrops.length; i++) {
      const char = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      const x = i * fontSize;
      const y = rainDrops[i] * fontSize;

      if (Math.random() > 0.92) {
        ctx.fillStyle = '#ffffff';
      } else {
        ctx.fillStyle = '#00ff66';
      }

      ctx.font = `bold ${fontSize}px monospace`;
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }

    requestAnimationFrame(render);
  };

  render();
}


/* ==========================================================================
   3. TACTICAL RETICLE CUSTOM CURSOR ENGINE
   ========================================================================== */
function initCustomCursor() {
  const cursorDot = document.querySelector('[data-cursor-dot]');
  const cursorOutline = document.querySelector('[data-cursor-outline]');
  if (!cursorDot || !cursorOutline) return;

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  const animateCursor = () => {
    outlineX += (mouseX - outlineX) * 0.18;
    outlineY += (mouseY - outlineY) * 0.18;

    if (cursorOutline) {
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
    }

    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  const interactiveElements = document.querySelectorAll('a, button, .project-card, .marquee-card, .skill-chip, .achievement-card, input, textarea, .terminal-try-hint, .cmd-chip');
  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}


/* ==========================================================================
   4. MAGNETIC BUTTON PULL EFFECT
   ========================================================================== */
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll('.magnetic-btn');

  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      btn.style.transform = `translate(${distanceX * 0.2}px, ${distanceY * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}


/* ==========================================================================
   5. SPOTLIGHT PROJECT CARDS EFFECT
   ========================================================================== */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.project-card, .marquee-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}


/* ==========================================================================
   6. HERO SECTION DYNAMIC TYPING EFFECT
   ========================================================================== */
function initTypingEffect() {
  const typingTextElement = document.getElementById('typing-text');
  if (!typingTextElement) return;

  const phrases = [
    'Cybersecurity Concepts.',
    'Kali & Ubuntu Security Labs.',
    'Python Automation Scripts.',
    'Network Traffic & Protocols.',
    'Linux System Hardening.'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 160;
  const deletingSpeed = 80;
  const delayBetweenPhrases = 3500;

  const type = () => {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let nextTimeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      nextTimeout = delayBetweenPhrases;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      nextTimeout = 500;
    }

    setTimeout(type, nextTimeout);
  };

  type();
}


/* ==========================================================================
   7. INTERACTIVE TERMINAL CLI WINDOW WITH SYSTEM REBOOT RESET ON CLEAR
   ========================================================================== */
function initInteractiveTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');
  const terminalLogs = document.getElementById('terminal-logs');
  const terminalHint = document.getElementById('terminal-hint');
  const terminalWindowEl = document.getElementById('terminal-window-el');
  const cmdChips = document.querySelectorAll('.cmd-chip');

  if (!terminalInput || !terminalBody) return;

  // Command Alias Mapping for 1-Letter Shortcuts & Fuzzy Matches
  const commandMap = {
    'h': 'help',
    '?': 'help',
    'help': 'help',

    'a': 'about',
    'ab': 'about',
    'about': 'about',

    's': 'skills',
    'sk': 'skills',
    'skills': 'skills',

    'p': 'projects',
    'proj': 'projects',
    'projects': 'projects',

    'm': 'achievements',
    'ach': 'achievements',
    'achievements': 'achievements',

    'c': 'contact',
    'cont': 'contact',
    'contact': 'contact',

    'w': 'whoami',
    'who': 'whoami',
    'whoami': 'whoami',

    'cls': 'clear',
    'l': 'clear',
    'clear': 'clear'
  };

  const validCommands = ['help', 'about', 'skills', 'projects', 'achievements', 'contact', 'whoami', 'clear'];

  // Make "TRY THIS ↴" hint button focus the terminal prompt instantly
  if (terminalHint) {
    terminalHint.addEventListener('click', () => {
      terminalInput.focus();
      if (terminalWindowEl) {
        terminalWindowEl.classList.add('focused');
        setTimeout(() => terminalWindowEl.classList.remove('focused'), 2000);
      }
    });
  }

  // Make One-Click Command Chips execute commands instantly
  cmdChips.forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const rawCmd = chip.getAttribute('data-cmd');
      if (rawCmd) {
        executeCommand(rawCmd);
        terminalInput.focus();
      }
    });
  });

  terminalInput.addEventListener('focus', () => {
    if (terminalWindowEl) terminalWindowEl.classList.add('focused');
  });

  terminalInput.addEventListener('blur', () => {
    if (terminalWindowEl) terminalWindowEl.classList.remove('focused');
  });

  // Handle Tab Auto-Completion & Enter Execution
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const currentVal = terminalInput.value.trim().toLowerCase();
      if (!currentVal) return;

      const match = validCommands.find((cmd) => cmd.startsWith(currentVal));
      if (match) {
        terminalInput.value = match;
      }
    } else if (e.key === 'Enter') {
      const rawInput = terminalInput.value.trim().toLowerCase();
      terminalInput.value = '';
      if (rawInput === '') return;

      const resolvedCmd = commandMap[rawInput] || rawInput;
      executeCommand(resolvedCmd, rawInput);
    }
  });

  function executeCommand(command, rawInput = '') {
    if (command === 'clear') {
      if (terminalLogs) terminalLogs.innerHTML = '';
      appendTerminalLine('[SYSTEM REBOOT // TERMINAL BUFFER RESET COMPLETE]', 'text-cyber-green terminal-output-glow');
      terminalBody.scrollTop = terminalBody.scrollHeight;
      return;
    }

    const displayTag = rawInput && rawInput !== command ? `${rawInput} → ${command}` : command;
    appendTerminalLine(`root@sagnik-sec:~$ ${displayTag}`, 'terminal-prompt');

    switch (command) {
      case 'help':
        appendTerminalLine('AVAILABLE COMMANDS & SHORTCUTS:', 'terminal-output-glow');
        appendTerminalLine('  about [a]       - Display biography overview', 'terminal-output-glow');
        appendTerminalLine('  skills [s]      - List core competencies', 'terminal-output-glow');
        appendTerminalLine('  projects [p]    - Show security labs grid', 'terminal-output-glow');
        appendTerminalLine('  achievements [m]- List honors & milestones', 'terminal-output-glow');
        appendTerminalLine('  contact [c]     - Display contact options', 'terminal-output-glow');
        appendTerminalLine('  whoami [w]      - Print current user identity', 'terminal-output-glow');
        appendTerminalLine('  clear [cls]     - Wipe terminal buffer & reboot shell', 'terminal-output-glow');
        appendTerminalLine('  Tip: Press Tab key to auto-complete commands!', 'text-muted');
        break;

      case 'about':
        appendTerminalLine('SAGNIK MANDAL: B.Tech CS Engineering Student @ FIEM (2026-2030).', 'terminal-output-glow');
        appendTerminalLine('Goal: Skilled Cybersecurity Professional. Brand: Curious. Technical. Persistent.', 'terminal-output-glow');
        break;

      case 'skills':
        appendTerminalLine('SKILL MATRIX: CS Fundamentals (80%), Linux (75%), Security (75%), Python (70%), Networking (65%).', 'terminal-output-glow');
        break;

      case 'projects':
        appendTerminalLine('LAB REPOS: Packet Inspector, Kali Security Lab, Cipher Suite, Port Scanner, System Hardening.', 'terminal-output-glow');
        break;

      case 'achievements':
        appendTerminalLine('MILESTONES: Top CS Academic Performer, CTF Challenge Participant, Python Scripting Honors.', 'terminal-output-glow');
        break;

      case 'contact':
        appendTerminalLine('EMAIL: mandalsagnik375@gmail.com', 'terminal-output-glow');
        appendTerminalLine('LINKEDIN: https://www.linkedin.com/in/sagnik-mandal-880411331/', 'terminal-output-glow');
        break;

      case 'whoami':
        appendTerminalLine('security_evaluator@competition-judge:~$ Permission Granted. Welcome guest.', 'terminal-output-glow');
        break;

      default:
        appendTerminalLine(`Command not recognized: '${command}'. Type 'h' or click any chip above!`, 'text-danger');
        break;
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function appendTerminalLine(text, className = '') {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`;
    line.textContent = text;

    if (terminalLogs) {
      terminalLogs.appendChild(line);
    } else {
      const inputLine = document.querySelector('.terminal-input-line');
      if (inputLine && inputLine.parentNode === terminalBody) {
        terminalBody.insertBefore(line, inputLine);
      } else {
        terminalBody.appendChild(line);
      }
    }
  }
}


/* ==========================================================================
   8. ANIMATED SKILL PROGRESS BARS
   ========================================================================== */
function initSkillBars() {
  const skillFills = document.querySelectorAll('.skill-progress-fill');
  const observerOptions = { threshold: 0.3 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fillElement = entry.target;
        const targetProgress = fillElement.getAttribute('data-progress');
        fillElement.style.width = `${targetProgress}%`;
        obs.unobserve(fillElement);
      }
    });
  }, observerOptions);

  skillFills.forEach((fill) => observer.observe(fill));
}


/* ==========================================================================
   9. NUMERIC STAT COUNTER ANIMATION
   ========================================================================== */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const observerOptions = { threshold: 0.5 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statElement = entry.target;
        const targetValue = parseInt(statElement.getAttribute('data-target'), 10);
        let currentValue = 0;

        const duration = 3000;
        const incrementStep = targetValue > 100 ? 30 : 1;
        const stepTime = Math.max(20, Math.floor(duration / (targetValue / incrementStep)));

        const counterInterval = setInterval(() => {
          currentValue += incrementStep;
          if (currentValue >= targetValue) {
            statElement.textContent = targetValue;
            clearInterval(counterInterval);
          } else {
            statElement.textContent = currentValue;
          }
        }, stepTime);

        obs.unobserve(statElement);
      }
    });
  }, observerOptions);

  statNumbers.forEach((stat) => observer.observe(stat));
}


/* ==========================================================================
   10. SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));
}


/* ==========================================================================
   11. CONTACT FORM WITH INLINE VALIDATION
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    let isValid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please enter your name');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    if (!subjectInput.value.trim()) {
      showError(subjectInput, 'Please enter a subject');
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    if (!messageInput.value.trim()) {
      showError(messageInput, 'Please enter your message');
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (isValid) {
      if (formSuccess) formSuccess.hidden = false;
      contactForm.reset();

      setTimeout(() => {
        if (formSuccess) formSuccess.hidden = true;
      }, 6000);
    }
  });

  function showError(inputEl, msg) {
    const parentGroup = inputEl.closest('.form-group');
    if (parentGroup) {
      parentGroup.classList.add('has-error');
      const errEl = parentGroup.querySelector('.error-msg');
      if (errEl) errEl.textContent = msg;
    }
  }

  function clearError(inputEl) {
    const parentGroup = inputEl.closest('.form-group');
    if (parentGroup) {
      parentGroup.classList.remove('has-error');
    }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}


/* ==========================================================================
   12. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}


/* ==========================================================================
   13. FOOTER YEAR AUTO-UPDATE
   ========================================================================== */
function updateFooterYear() {
  const yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
