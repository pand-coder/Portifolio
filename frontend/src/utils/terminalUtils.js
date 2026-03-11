// Sound Effects using Web Audio API
class SoundEffects {
  constructor() {
    this.enabled = localStorage.getItem('soundEnabled') !== 'false';
    this.audioContext = null;
  }

  init() {
    if (!this.audioContext && this.enabled) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('soundEnabled', this.enabled);
    return this.enabled;
  }

  playKeyPress() {
    if (!this.enabled) return;
    this.init();
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.1;
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.05);
    oscillator.stop(this.audioContext.currentTime + 0.05);
  }

  playCommandExecute() {
    if (!this.enabled) return;
    this.init();
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = 600;
    gainNode.gain.value = 0.15;
    
    oscillator.start();
    oscillator.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
    oscillator.stop(this.audioContext.currentTime + 0.1);
  }

  playError() {
    if (!this.enabled) return;
    this.init();
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = 200;
    gainNode.gain.value = 0.2;
    
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
    oscillator.stop(this.audioContext.currentTime + 0.15);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.1;
    
    oscillator.start();
    oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
    oscillator.stop(this.audioContext.currentTime + 0.15);
  }
}

export const soundEffects = new SoundEffects();

// Typing animation hook
export const useTypingEffect = (text, speed = 20, onComplete) => {
  return new Promise((resolve) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        index++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
        resolve();
      }
    }, speed);
    
    return () => clearInterval(interval);
  });
};

// Generate Matrix Rain Effect
export const generateMatrixRain = () => {
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const columns = Math.floor(window.innerWidth / 20);
  const drops = Array(columns).fill(1);
  
  let output = '';
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < columns; j++) {
      output += chars[Math.floor(Math.random() * chars.length)];
    }
    output += '\\n';
  }
  return output;
};

// Generate Hacking Animation
export const generateHackingSequence = () => {
  const sequences = [
    'Initializing hack sequence...',
    'Scanning for vulnerabilities...',
    '[████████████████████] 100%',
    'Exploiting CVE-2025-XXXX...',
    'Bypassing firewall...',
    'Injecting payload...',
    '[⚠] Access denied... Retrying...',
    'Trying alternative vector...',
    'SQL injection: SELECT * FROM secrets...',
    'XSS payload deployed...',
    'Session hijacked successfully!',
    'Privilege escalation in progress...',
    'Root access: GRANTED',
    '',
    '✓ System compromised!',
    '',
    'Just kidding! I only hack ethically through bug bounties. 😄'
  ];
  
  return sequences.join('\\n');
};

// Generate Neofetch-style system info
export const generateNeofetch = () => {
  return `
     ___           Pavan Shanmukha Madhav Gunda
    /   \\          -------------------------------
   |  👤 |         OS: SecurityOS 2025
   |     |         Host: Cybersecurity Terminal
    \\___/          Kernel: BugBounty 5.2.0
   /|   |\\         Uptime: Hunting bugs since 2022
  / |   | \\        Shell: bash 5.1.16
    |   |          Terminal: xterm-256color
    |   |          CPU: Neural Pattern Recognition
  __/   \\__        Memory: Unlimited CVE Database
                   Skills: C, C++, Python, Bash, JS
                   Tools: Burp Suite, Nmap, Wireshark
                   Hall of Fame: Cognizant, Dell
                   Status: 🟢 Open to opportunities
  `;
};

// Generate cowsay
export const generateCowsay = (message = "Hello! I'm Pavan!") => {
  const msgLength = message.length;
  const border = '-'.repeat(msgLength + 2);
  
  return `
 ${border}
< ${message} >
 ${border}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
  `;
};

// Mobile detection
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Get responsive font size
export const getResponsiveFontSize = () => {
  const width = window.innerWidth;
  if (width < 480) return '10px';
  if (width < 768) return '12px';
  return '14px';
};
