import React, { useState, useEffect, useRef } from 'react';
import { profileData, commands, securityQuotes } from '../data/mock';
import { 
  soundEffects, 
  generateMatrixRain, 
  generateHackingSequence, 
  generateNeofetch,
  generateCowsay,
  isMobile
} from '../utils/terminalUtils';
import TypingText from './TypingText';

const Terminal = () => {
  const [output, setOutput] = useState([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSpeed] = useState(15);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const outputEndRef = useRef(null);
  const typingIntervalRef = useRef(null);

  useEffect(() => {
    // Display welcome message on load
    const welcomeOutput = [
      { type: 'ascii', content: profileData.asciiArt },
      { type: 'text', content: profileData.welcomeMessage }
    ];
    setOutput(welcomeOutput);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  useEffect(() => {
    // Focus input when clicking anywhere on terminal
    const handleClick = () => {
      inputRef.current?.focus();
    };
    terminalRef.current?.addEventListener('click', handleClick);
    return () => terminalRef.current?.removeEventListener('click', handleClick);
  }, []);

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [mainCmd, ...args] = trimmedCmd.split(' ');

    let result = { type: 'text', content: '', animate: true };

    switch (mainCmd) {
      case 'help':
        result.content = generateHelp();
        break;
      case 'about':
      case 'whoami':
        result.content = generateAbout();
        break;
      case 'skills':
        result.content = generateSkills();
        break;
      case 'projects':
        result.content = generateProjects();
        break;
      case 'experience':
      case 'work':
        result.content = generateExperience();
        break;
      case 'bugs':
      case 'bugbounty':
      case 'achievements':
        result.content = generateBugs();
        break;
      case 'certifications':
      case 'certs':
        result.content = generateCertifications();
        break;
      case 'education':
      case 'edu':
        result.content = generateEducation();
        break;
      case 'contact':
        result.content = generateContact();
        break;
      case 'blogs':
      case 'blog':
      case 'medium':
        result.content = generateBlogs();
        result.animate = false;
        break;
      case 'ls':
        result.content = generateLs();
        result.animate = false;
        break;
      case 'clear':
      case 'cls':
        setOutput([]);
        soundEffects.playSuccess();
        return;
      case 'banner':
        result = { type: 'ascii', content: profileData.asciiArt + '\n' + profileData.welcomeMessage, animate: false };
        break;
      case 'history':
        result.content = generateHistory();
        result.animate = false;
        break;
      case 'hack':
      case 'hacker':
        result.content = generateHackingSequence();
        soundEffects.playSuccess();
        break;
      case 'matrix':
        result.content = generateMatrixRain();
        result.type = 'matrix';
        result.animate = false;
        break;
      case 'neofetch':
        result.content = generateNeofetch();
        result.animate = false;
        break;
      case 'cowsay':
        const message = args.join(' ') || "Hello! I'm Pavan, the bug bounty hunter!";
        result.content = generateCowsay(message);
        result.animate = false;
        break;
      case 'fortune':
        result.content = '\n' + securityQuotes[Math.floor(Math.random() * securityQuotes.length)] + '\n';
        break;
      case 'exit':
        result.content = `\nYou can't exit the Matrix! \n\nJust kidding... but there's no escape from this awesome terminal.\nTry 'help' to see what else you can do!\n`;
        break;
      case 'pwd':
        result.content = '\n/home/visitor/portfolio/pavan\n';
        result.animate = false;
        break;
      case 'date':
        result.content = '\n' + new Date().toString() + '\n';
        result.animate = false;
        break;
      case 'ping':
        result.content = `\nPING pavan's skills (cybersecurity.local): 56 data bytes\n64 bytes from pavan: icmp_seq=0 ttl=64 time=0.001 ms\n64 bytes from pavan: icmp_seq=1 ttl=64 time=0.001 ms\n64 bytes from pavan: icmp_seq=2 ttl=64 time=0.001 ms\n\n--- pavan's skills ping statistics ---\n3 packets transmitted, 3 packets received, 0.0% packet loss\nSkills are HIGHLY responsive! 🚀\n`;
        break;
      case 'sound':
        const action = args[0];
        if (action === 'off') {
          soundEffects.enabled = false;
          localStorage.setItem('soundEnabled', 'false');
          result.content = '\n Sound effects disabled\n';
        } else if (action === 'on') {
          soundEffects.enabled = true;
          localStorage.setItem('soundEnabled', 'true');
          soundEffects.playSuccess();
          result.content = '\n Sound effects enabled\n';
        } else {
          const status = soundEffects.enabled ? 'ON' : 'OFF';
          result.content = `\nSound effects are currently: ${status}\nUsage: sound [on/off]\n`;
        }
        result.animate = false;
        break;
      case 'sudo':
        result.content = `[sudo] password for visitor: \nSorry, visitor is not in the sudoers file. This incident will be reported.\n\n  Nice try! But you don't have root access here. \nOnly Pavan has sudo privileges in this terminal.\n`;
        soundEffects.playError();
        break;
      case 'rm':
        if (args.includes('-rf') || args.includes('/')) {
          result.content = `rm: cannot remove '/': Permission denied\n\n Nice try! The system is protected. \nBesides, I backup everything to the blockchain!\n`;
          soundEffects.playError();
        } else {
          result.content = `rm: missing operand\nTry 'help' for more information.`;
        }
        break;
      case '':
        return;
      default:
        result.content = `Command not found: ${mainCmd}\nType 'help' for available commands.`;
        soundEffects.playError();
    }

    soundEffects.playCommandExecute();

    setOutput(prev => [
      ...prev,
      { type: 'command', content: cmd },
      result
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      processCommand(input);
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    soundEffects.playKeyPress();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleTabComplete();
    }
  };

  const handleTabComplete = () => {
    const partial = input.toLowerCase();
    const availableCommands = Object.keys(commands);
    const matches = availableCommands.filter(cmd => cmd.startsWith(partial));
    
    if (matches.length === 1) {
      setInput(matches[0]);
    } else if (matches.length > 1) {
      setOutput(prev => [
        ...prev,
        { type: 'command', content: input },
        { type: 'text', content: matches.join('  ') }
      ]);
    }
  };

  // Generate functions for each command
  const generateHelp = () => {
    let help = `\nAvailable Commands:\n${'='.repeat(70)}\n\n`;
    Object.entries(commands).forEach(([cmd, info]) => {
      help += `  ${cmd.padEnd(20)} - ${info.description}\n`;
      if (info.aliases) {
        help += `  ${' '.repeat(20)}   Aliases: ${info.aliases.join(', ')}\n`;
      }
    });
    help += `\n${'='.repeat(70)}\n`;
    return help;
  };

  const generateAbout = () => {
    return `\n${profileData.about.text}\n\n Location: ${profileData.about.location}\n Education: ${profileData.about.education}\n Status: ${profileData.about.status}\n`;
  };

  const generateSkills = () => {
    let output = `\nTechnical Skills\n${'='.repeat(70)}\n\n`;
    output += ` Programming Languages:\n`;
    output += `   ${profileData.skills.languages.join(', ')}\n\n`;
    output += `  Security Tools:\n`;
    output += `   ${profileData.skills.security_tools.join(', ')}\n\n`;
    output += ` Development Tools:\n`;
    output += `   ${profileData.skills.dev_tools.join(', ')}\n\n`;
    output += `  Cloud & Containerization:\n`;
    output += `   ${profileData.skills.cloud.join(', ')}\n\n`;
    output += ` Relevant Coursework:\n`;
    output += `   ${profileData.skills.coursework.join(', ')}\n\n`;
    output += `${'='.repeat(70)}\n`;
    return output;
  };

  const generateProjects = () => {
    let output = `\nProjects\n${'='.repeat(70)}\n\n`;
    profileData.projects.forEach((project, idx) => {
      output += `${idx + 1}. ${project.name}\n`;
      if (project.subtitle) output += `   ${project.subtitle}\n`;
      if (project.status) output += `   Status: ${project.status}\n`;
      output += `\n   ${project.description}\n\n`;
      output += `   Technologies: ${project.technologies.join(', ')}\n\n`;
      if (project.features) {
        output += `   Key Features:\n`;
        project.features.forEach(feature => {
          output += `   • ${feature}\n`;
        });
      }
      output += `\n${'-'.repeat(70)}\n\n`;
    });
    return output;
  };

  const generateExperience = () => {
    let output = `\nWork Experience\n${'='.repeat(70)}\n\n`;
    profileData.experience.forEach((exp, idx) => {
      output += `${exp.role}\n`;
      output += `${exp.organization} | ${exp.duration} | ${exp.location}\n\n`;
      exp.description.forEach(desc => {
        output += `• ${desc}\n`;
      });
      output += `\n${'-'.repeat(70)}\n\n`;
    });
    return output;
  };

const generateBugs = () => {
  let output = `\nBug Bounty Achievements & CVEs\n${'='.repeat(70)}\n\n`;

  profileData.bugBounty.forEach((bug, idx) => {

    output += `${idx + 1}. ${bug.title}\n`;

    if (bug.date) output += `   Date: ${bug.date}\n`;

    if (bug.platform) output += `   Platform: ${bug.platform}\n`;

    output += `   Severity: ${bug.severity}\n\n`;

    output += `   ${bug.description}\n\n`;

    if (bug.recognition) output += `   Recognition: ${bug.recognition}\n`;

    if (bug.cwe) output += `   CWE: ${bug.cwe}\n`;

    if (bug.techniques) output += `   Techniques: ${bug.techniques.join(', ')}\n`;

    if (bug.status) output += `   Status: ${bug.status}\n`;

    // ⭐ ADD THIS LINE
    if (bug.link) output += `   Link: ${bug.link}\n`;

    output += `\n${'-'.repeat(70)}\n\n`;

  });

  return output;
};

  const generateCertifications = () => {
    let output = `\nCertifications & Courses\n${'='.repeat(70)}\n\n`;
    profileData.certifications.forEach((cert, idx) => {
      const statusIcon = cert.status === 'Completed' ? '✅' : '🔄';
      output += `${statusIcon} ${cert.name}\n`;
      output += `   Issuer: ${cert.issuer}\n`;
      output += `   Status: ${cert.status}\n\n`;
    });
    output += `${'='.repeat(70)}\n`;
    return output;
  };

  const generateEducation = () => {
    let output = `\nEducation\n${'='.repeat(70)}\n\n`;
    profileData.education.forEach(edu => {
      output += `${edu.degree} - ${edu.major}\n`;
      output += `${edu.institution}\n`;
      output += `${edu.location}\n`;
      output += `Duration: ${edu.duration}\n`;
      output += `CGPA: ${edu.cgpa}\n\n`;
    });
    output += `${'='.repeat(70)}\n`;
    return output;
  };

  const generateContact = () => {
    let output = `\nContact Information\n${'='.repeat(70)}\n\n`;
    output += ` Email:       ${profileData.contact.email}\n`;
    output += ` Phone:       ${profileData.contact.phone}\n`;
    output += ` LinkedIn:    ${profileData.contact.linkedin}\n`;
    output += ` GitHub:      ${profileData.contact.github}\n`;
    output += ` HackTheBox:  ${profileData.contact.hackthebox}\n`;
    output += ` TryHackMe:   ${profileData.contact.tryhackme}\n`;
    output += ` Portfolio:   ${profileData.contact.portfolio}\n\n`;
    output += `${'='.repeat(70)}\n`;
    return output;
  };
  const generateBlogs = () => {
  let output = `\nBlog Posts\n${'='.repeat(70)}\n\n`;

  output += `Visit my Medium articles:\n`;
  output += `https://medium.com/@pavanshanmukhmadhav\n\n`;

  output += `Tip: Copy the link and open in your browser.\n`;

  output += `\n${'='.repeat(70)}\n`;

  return output;
};

 const generateLs = () => {
  return `\nabout          skills         projects       experience\nbugs           certifications eduScation      contact\nblogs          help           history        banner\nclear\n`;
};

  const generateHistory = () => {
    if (commandHistory.length === 0) {
      return '\nNo command history yet.\n';
    }
    let output = `\nCommand History:\n${'='.repeat(70)}\n\n`;
    commandHistory.forEach((cmd, idx) => {
      output += `${(idx + 1).toString().padStart(4)} ${cmd}\n`;
    });
    output += `\n${'='.repeat(70)}\n`;
    return output;
  };

  const renderOutput = (item, index) => {
    if (item.type === 'command') {
      return (
        <div key={index} className="command-line">
          <span className="prompt">{profileData.prompt}</span>
          <span className="command-text">{item.content}</span>
        </div>
      );
    } else if (item.type === 'ascii') {
      return (
        <pre key={index} className="ascii-art">
          {item.content}
        </pre>
      );
    } else if (item.type === 'matrix') {
      return (
        <pre key={index} className="matrix-text">
          {item.content}
        </pre>
      );
    } else {
      // Use typing animation for text outputs if animate is true
      if (item.animate !== false && item.content.length > 50) {
        return <TypingText key={index} text={item.content} speed={typingSpeed} />;
      }
      return (
        <pre key={index} className="output-text">
          {item.content}
        </pre>
      );
    }
  };

  return (
    <div className="terminal-container" ref={terminalRef}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <div className="terminal-title">visitor@pavan: ~</div>
      </div>
      <div className="terminal-body">
        {output.map((item, index) => renderOutput(item, index))}
        <form onSubmit={handleSubmit} className="input-line">
          <span className="prompt">{profileData.prompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
          <span className="cursor">█</span>
        </form>
        <div ref={outputEndRef} />
      </div>
    </div>
  );
};

export default Terminal;