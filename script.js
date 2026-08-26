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
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const checkLowPowerMobile = () => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768;
    const isLowConcurrency = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    return isMobile || isLowConcurrency;
  };

  let isLowPower = checkLowPowerMobile();
  let fontSize = isLowPower ? 24 : 16;
  let columns = Math.floor(window.innerWidth / fontSize);
  let rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
  let animFrameId = null;
  let lastDrawTime = 0;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    isLowPower = checkLowPowerMobile();
    fontSize = isLowPower ? 24 : 16;
    columns = Math.floor(canvas.width / fontSize);
    rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const alphabet = katakana + latin;

  const render = (timestamp) => {
    if (prefersReducedMotion.matches || document.hidden) {
      if (prefersReducedMotion.matches) ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const targetFpsInterval = isLowPower ? 33 : 16; // ~30 FPS on low power/mobile vs ~60 FPS on desktop
    if (timestamp - lastDrawTime >= targetFpsInterval) {
      lastDrawTime = timestamp;

      ctx.fillStyle = 'rgba(2, 4, 8, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const char = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        ctx.fillStyle = Math.random() > 0.95 ? '#ffffff' : '#00ff66';
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    }

    animFrameId = requestAnimationFrame(render);
  };

  // Pause rendering when tab is inactive to save GPU/CPU cycles
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    } else if (!prefersReducedMotion.matches) {
      animFrameId = requestAnimationFrame(render);
    }
  });

  prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else if (!document.hidden) {
      animFrameId = requestAnimationFrame(render);
    }
  });

  if (!prefersReducedMotion.matches && !document.hidden) {
    animFrameId = requestAnimationFrame(render);
  }
}


/* ==========================================================================
   2B. SCOPED MATRIX RAIN FOR PROJECTS SECTION ONLY (#projects-matrix-canvas)
   ========================================================================== */
function initProjectsMatrixRain() {
  const canvas = document.getElementById('projects-matrix-canvas');
  const projectsSection = document.getElementById('projects');
  if (!canvas || !projectsSection) return;

  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const checkLowPowerMobile = () => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768;
    const isLowConcurrency = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    return isMobile || isLowConcurrency;
  };

  let isLowPower = checkLowPowerMobile();
  let fontSize = isLowPower ? 24 : 18;
  let columns = Math.floor(projectsSection.clientWidth / fontSize);
  let rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));
  let animFrameId = null;
  let isIntersecting = false;
  let lastDrawTime = 0;

  const resizeCanvas = () => {
    canvas.width = projectsSection.clientWidth;
    canvas.height = projectsSection.clientHeight;
    isLowPower = checkLowPowerMobile();
    fontSize = isLowPower ? 24 : 18;
    columns = Math.floor(canvas.width / fontSize);
    rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = '0123456789SEC_LAB';
  const alphabet = katakana + latin;

  const render = (timestamp) => {
    if (prefersReducedMotion.matches || !isIntersecting || document.hidden) {
      if (prefersReducedMotion.matches) ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const targetFpsInterval = isLowPower ? 33 : 16;
    if (timestamp - lastDrawTime >= targetFpsInterval) {
      lastDrawTime = timestamp;

      ctx.fillStyle = 'rgba(2, 4, 8, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const char = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        ctx.fillStyle = Math.random() > 0.92 ? '#ffffff' : '#00ff66';
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    }

    animFrameId = requestAnimationFrame(render);
  };

  // Pause render loop when section is scrolled off-screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting && !prefersReducedMotion.matches && !document.hidden) {
        if (!animFrameId) animFrameId = requestAnimationFrame(render);
      } else {
        if (animFrameId) {
          cancelAnimationFrame(animFrameId);
          animFrameId = null;
        }
      }
    });
  }, { threshold: 0.05 });

  observer.observe(projectsSection);

  prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else if (isIntersecting && !document.hidden) {
      animFrameId = requestAnimationFrame(render);
    }
  });
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

    'src': 'sources',
    'ref': 'sources',
    'citations': 'sources',
    'sources': 'sources',

    'aud': 'audience',
    'target': 'audience',
    'audience': 'audience',

    'freq': 'cadence',
    'updates': 'cadence',
    'cadence': 'cadence',

    'm': 'achievements',
    'ach': 'achievements',
    'achievements': 'achievements',

    'c': 'contact',
    'cont': 'contact',
    'contact': 'contact',

    'w': 'whoami',
    'who': 'whoami',
    'whoami': 'whoami',

    'f': 'purpose',
    'focus': 'purpose',
    'summary': 'purpose',
    'purpose': 'purpose',

    'info': 'info',
    'i': 'info',
    'portal': 'info',
    'landing': 'info',

    'cls': 'clear',
    'l': 'clear',
    'clear': 'clear'
  };

  const validCommands = ['help', 'info', 'purpose', 'about', 'skills', 'projects', 'sources', 'achievements', 'contact', 'whoami', 'clear'];

  // Make "TRY THIS ↴" hint button focus the terminal prompt on desktop or execute help on mobile without virtual keyboard popup
  if (terminalHint) {
    terminalHint.addEventListener('click', () => {
      const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768;
      if (isMobile) {
        executeCommand('help');
        terminalInput.blur();
      } else {
        terminalInput.focus();
      }
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
        const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768;
        if (isMobile) {
          terminalInput.blur();
        } else {
          terminalInput.focus();
        }
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
        appendTerminalLine('  info [i, portal]- Executive Candidate Command Portal & Key Metrics', 'terminal-output-glow');
        appendTerminalLine('  purpose [f]     - Executive summary of overall focus & content listings', 'terminal-output-glow');
        appendTerminalLine('  about [a]       - Display biography & credentials overview', 'terminal-output-glow');
        appendTerminalLine('  skills [s]      - List core competency vectors & tools', 'terminal-output-glow');
        appendTerminalLine('  projects [p]    - Show security labs & direct post writeups', 'terminal-output-glow');
        appendTerminalLine('  sources [src]   - List cited framework standards (NIST, OWASP, MITRE, RFCs)', 'terminal-output-glow');
        appendTerminalLine('  achievements [m]- List author honors & milestones', 'terminal-output-glow');
        appendTerminalLine('  contact [c]     - Display direct contact options', 'terminal-output-glow');
        appendTerminalLine('  whoami [w]      - Print current user identity & status', 'terminal-output-glow');
        appendTerminalLine('  clear [cls]     - Wipe terminal buffer & reboot shell', 'terminal-output-glow');
        appendTerminalLine('  Tip: Press Tab key to auto-complete commands!', 'text-muted');
        break;

      case 'info':
        appendTerminalLine('EXECUTIVE INFO PORTAL & COMMAND OVERVIEW:', 'terminal-output-glow');
        appendTerminalLine('  Candidate : Sagnik Mandal | B.Tech CS Engineering Candidate @ FIEM', 'terminal-output-glow');
        appendTerminalLine('  Rank      : TryHackMe Global Top 10% Defense Rank (50+ Machines Solved)', 'terminal-output-glow');
        appendTerminalLine('  Credentials: Google Sec, Cisco TCP/IP, LPI Linux, THM Badge', 'terminal-output-glow');
        appendTerminalLine('  Tooling   : 15+ Open-Source Python Security & Socket Scripts', 'text-cyber-green terminal-output-glow');
        break;

      case 'purpose':
        appendTerminalLine('EXECUTIVE SUMMARY & OVERALL FOCUS:', 'terminal-output-glow');
        appendTerminalLine('  Core Purpose : Cybersecurity engineering portfolio & learning journal.', 'terminal-output-glow');
        appendTerminalLine('  Mission      : Connect theoretical CS fundamentals with practical security skills.', 'terminal-output-glow');
        appendTerminalLine('CONTENT PILLARS:', 'terminal-output-glow');
        appendTerminalLine('  [1] Network Protocol Analysis   (Wireshark PCAPs, TCP/IP handshakes)', 'terminal-output-glow');
        appendTerminalLine('  [2] Linux Systems Administration(Ubuntu/Kali setup, shell scripts)', 'terminal-output-glow');
        appendTerminalLine('  [3] Python Security Scripting   (Port scanners, AES/XOR ciphers)', 'terminal-output-glow');
        appendTerminalLine('  [4] CTF Writeups & Practice     (TryHackMe Top 10%, OWASP writeups)', 'terminal-output-glow');
        appendTerminalLine('  [5] CS Core Fundamentals        (Algorithms, Operating Systems, Data Structures)', 'text-cyber-green terminal-output-glow');
        break;

      case 'about':
        appendTerminalLine('AUTHOR PROFILE SUMMARY:', 'terminal-output-glow');
        appendTerminalLine('  Name        : Sagnik Mandal | B.Tech CS Engineering Student @ FIEM (2026-2030)', 'terminal-output-glow');
        appendTerminalLine('  Focus       : Linux Administration, Python Scripting & Packet Analysis', 'terminal-output-glow');
        appendTerminalLine('  Credentials : Google Cybersecurity Certificate, Cisco Networking, LPI Linux Essentials', 'terminal-output-glow');
        appendTerminalLine('  CTF Status  : Top 10% Global Rank on TryHackMe (50+ Rooms Solved)', 'text-cyber-green terminal-output-glow');
        break;

      case 'skills':
        appendTerminalLine('SKILL AREAS & STATUS:', 'terminal-output-glow');
        appendTerminalLine('  1. CS Fundamentals & Algorithms [B.TECH CSE COURSEWORK]', 'terminal-output-glow');
        appendTerminalLine('  2. Linux (Ubuntu & Kali Linux)  [SYSTEM ADMIN & HARDENING]', 'terminal-output-glow');
        appendTerminalLine('  3. Cybersecurity Fundamentals   [CONTINUOUS PRACTICE]', 'terminal-output-glow');
        appendTerminalLine('  4. Python Scripting             [SCRIPTING & AUTOMATION]', 'terminal-output-glow');
        appendTerminalLine('  5. Networking Fundamentals      [PACKET ANALYSIS & TCP/IP]', 'terminal-output-glow');
        break;

      case 'projects':
        appendTerminalLine('TOPIC CATEGORY POSTS & DIRECT REPO CITATIONS:', 'terminal-output-glow');
        appendTerminalLine('  1. Network Security : Packet Inspector (github.com/HEEL69/network-packet-inspector)', 'terminal-output-glow');
        appendTerminalLine('  2. Linux Hardening  : CIS Audit Suite  (github.com/HEEL69/linux-hardening-config)', 'terminal-output-glow');
        appendTerminalLine('  3. Cryptography     : AES/XOR Ciphers  (github.com/HEEL69/cipher-suite-python)', 'terminal-output-glow');
        appendTerminalLine('  4. Port Scanning    : Async SYN Scanner(github.com/HEEL69/port-scanner-py)', 'terminal-output-glow');
        appendTerminalLine('  5. CTF Walkthroughs : Kenobi POC Writeup(github.com/HEEL69/ctf-writeups)', 'terminal-output-glow');
        appendTerminalLine('  6. CS Algorithms    : Problem Solving  (github.com/HEEL69/cs-problem-solving-python)', 'terminal-output-glow');
        appendTerminalLine('  TryHackMe Profile   : tryhackme.com/p/SagnikMandal', 'text-cyber-green terminal-output-glow');
        break;

      case 'sources':
        appendTerminalLine('AUTHORITATIVE CITATIONS & TECHNICAL STANDARDS:', 'terminal-output-glow');
        appendTerminalLine('  1. NIST CSF 2.0   - Cybersecurity Risk Governance (nist.gov/cyberframework)', 'terminal-output-glow');
        appendTerminalLine('  2. OWASP Top 10   - Web Application & API Security Standards (owasp.org)', 'terminal-output-glow');
        appendTerminalLine('  3. MITRE ATT&CK   - Adversary Tactics, Techniques & Procedures (attack.mitre.org)', 'terminal-output-glow');
        appendTerminalLine('  4. CISA KEV       - Known Exploited Vulnerabilities Catalog (cisa.gov)', 'terminal-output-glow');
        appendTerminalLine('  5. ISO/IEC 27001  - Information Security Management System Controls (iso.org)', 'terminal-output-glow');
        appendTerminalLine('  6. IETF RFC Specs - Internet Protocol Standards TCP/TLS/HTTP (ietf.org)', 'terminal-output-glow');
        appendTerminalLine('  7. CIS Benchmarks - OS, Server & Firewall Hardening Guidelines (cisecurity.org)', 'terminal-output-glow');
        appendTerminalLine('  8. FIRST CVSS v4.0- Vulnerability Severity & Metric Scoring (first.org)', 'terminal-output-glow');
        appendTerminalLine('  9. Linux / POSIX  - Kernel System Calls & POSIX Specifications (tldp.org)', 'terminal-output-glow');
        appendTerminalLine('  10. Python Sec    - Socket & Cryptographic Safety Guidelines (docs.python.org)', 'terminal-output-glow');
        break;

      case 'achievements':
        appendTerminalLine('AUTHOR HONORS & ACCOMPLISHMENTS:', 'terminal-output-glow');
        appendTerminalLine('  [1] Winner: Portfolio Engineering Showcase (Zero-Framework Vanilla JS Engine)', 'terminal-output-glow');
        appendTerminalLine('  [2] Global Top 10% Rank: TryHackMe Cyber Defense Track (50+ Solved Machines)', 'terminal-output-glow');
        appendTerminalLine('  [3] Author: 15+ Open-Source Python Security Automation & Socket Tools', 'terminal-output-glow');
        appendTerminalLine('  [4] Academic Distinction: FIEM Computer Science Engineering Student Track', 'terminal-output-glow');
        appendTerminalLine('  [5] Systems Focus: Linux Server Hardening & Shell Scripting', 'terminal-output-glow');
        appendTerminalLine('  [6] Network Analysis: Wireshark & TShark Packet Inspection Projects', 'terminal-output-glow');
        break;

      case 'contact':
        appendTerminalLine('DIRECT EMAIL : mandalsagnik375@gmail.com', 'terminal-output-glow');
        appendTerminalLine('LINKEDIN     : https://www.linkedin.com/in/sagnik-mandal-880411331/', 'terminal-output-glow');
        appendTerminalLine('ACADEMICS    : B.Tech CSE Candidate @ Future Institute of Engineering and Management', 'terminal-output-glow');
        break;

      case 'whoami':
        appendTerminalLine('sagnik_sec_evaluator@system:~$ Sagnik Mandal Portfolio Dossier loaded.', 'text-cyber-green terminal-output-glow');
        appendTerminalLine('Status: Active Student Dossier. All coursework, learning tracks, and source references logged.', 'terminal-output-glow');
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
function animateStatCounter(statElement) {
  const targetValue = parseInt(statElement.getAttribute('data-target'), 10);
  if (isNaN(targetValue)) return;

  if (statElement._animId) {
    cancelAnimationFrame(statElement._animId);
  }

  const duration = 1800;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(targetValue * easeProgress);

    statElement.textContent = currentValue;

    if (progress < 1) {
      statElement._animId = requestAnimationFrame(update);
    } else {
      statElement.textContent = targetValue;
      statElement._animId = null;
    }
  }

  statElement._animId = requestAnimationFrame(update);
}

function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStatCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  statNumbers.forEach((stat) => {
    const rect = stat.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      animateStatCounter(stat);
    } else {
      observer.observe(stat);
    }
  });
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
/* ==========================================================================
   11. CONTACT FORM WITH INLINE VALIDATION & ASYNC PAYLOAD TRANSMISSION
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');
  const submitBtn = document.getElementById('submit-btn');

  if (!contactForm) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  // Real-time validation on input & blur events
  [nameInput, emailInput, subjectInput, messageInput].forEach((inputEl) => {
    if (!inputEl) return;
    inputEl.addEventListener('input', () => validateField(inputEl));
    inputEl.addEventListener('blur', () => validateField(inputEl));
  });

  function validateField(inputEl) {
    if (!inputEl) return true;
    const val = inputEl.value.trim();

    if (inputEl.id === 'name') {
      if (!val) {
        showError(inputEl, 'Please enter your name');
        return false;
      }
      clearError(inputEl);
      return true;
    }

    if (inputEl.id === 'email') {
      if (!val || !validateEmail(val)) {
        showError(inputEl, 'Please enter a valid email address');
        return false;
      }
      clearError(inputEl);
      return true;
    }

    if (inputEl.id === 'subject') {
      if (!val) {
        showError(inputEl, 'Please enter a subject header');
        return false;
      }
      clearError(inputEl);
      return true;
    }

    if (inputEl.id === 'message') {
      if (!val) {
        showError(inputEl, 'Please enter your message payload');
        return false;
      }
      clearError(inputEl);
      return true;
    }

    return true;
  }

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isSubjectValid = validateField(subjectInput);
    const isMessageValid = validateField(messageInput);

    const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

    if (!isFormValid) {
      if (!isNameValid && nameInput) nameInput.focus();
      else if (!isEmailValid && emailInput) emailInput.focus();
      else if (!isSubjectValid && subjectInput) subjectInput.focus();
      else if (!isMessageValid && messageInput) messageInput.focus();
      return;
    }

    // Reset banner displays
    if (formSuccess) formSuccess.hidden = true;
    if (formError) formError.hidden = true;

    // Set Submit Button Loading State
    const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>[TRANSMITTING PAYLOAD...]</span> <svg class="spin-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="12"></circle></svg>`;
    }

    const payload = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      _subject: `[Portfolio Contact] ${subjectInput.value.trim()}`,
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim()
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/mandalsagnik375@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        if (formSuccess) formSuccess.hidden = false;
        if (formError) formError.hidden = true;
        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach(clearError);
      } else {
        throw new Error(`Server returned HTTP ${response.status}`);
      }
    } catch (err) {
      console.warn('Form submission endpoint unreachable:', err);
      if (formError) {
        formError.hidden = false;
        const errorText = document.getElementById('form-error-text');
        if (errorText) {
          const mailtoUrl = `mailto:mandalsagnik375@gmail.com?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(payload.message)}`;
          errorText.innerHTML = `[STATUS 500: TRANSMISSION FAILED] Endpoint unreachable. <a href="${mailtoUrl}" target="_blank" style="color: #ff0055; text-decoration: underline; font-weight: bold;">Click to send via mail client</a>`;
        }
      }
      if (formSuccess) formSuccess.hidden = true;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    }
  });

  function showError(inputEl, msg) {
    if (!inputEl) return;
    const parentGroup = inputEl.closest('.form-group');
    if (parentGroup) {
      parentGroup.classList.add('has-error');
      const errEl = parentGroup.querySelector('.error-msg');
      if (errEl) errEl.textContent = msg;
    }
  }

  function clearError(inputEl) {
    if (!inputEl) return;
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
