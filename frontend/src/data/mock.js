export const profileData = {
  name: "Pavan Shanmukha Madhav Gunda",
  title: "Cybersecurity Enthusiast | Bug Bounty Hunter | Penetration Tester",
  username: "pavan",
  prompt: "visitor@pavan:~$",
  
  about: {
    text: `Hello! I'm Pavan Shanmukha Madhav Gunda, a passionate cybersecurity professional and bug bounty hunter specializing in web application security, penetration testing, and vulnerability research.

Currently pursuing B.Tech in Computer Science and Engineering (Cyber Security) at Amrita Vishwa Vidyapeetham. I actively contribute to security research through bug bounty programs.

My expertise lies in identifying and responsibly disclosing security vulnerabilities, with a focus on API and web application security flaws. I'm passionate about open-source contribution and continuous learning in the ever-evolving field of cybersecurity.`,
    location: "Coimbatore, Tamil Nadu, India",
    education: "Amrita Vishwa Vidyapeetham",
    status: "Open to Security Research Opportunities"
  },

  contact: {
    email: "pavanshanmukha2004@gmail.com",
    phone: "+91-9182335910",
    portfolio: "pand-coder",
    linkedin: "https://www.linkedin.com/in/pavan-shanmukha-madhav-gunda-45031b252/",
    hackthebox: "Shanxm",
    tryhackme: "Shanxm",
    github: "pand-coder"
  },

  education: [
    {
      degree: "Bachelor of Technology",
      major: "Computer Science and Engineering (Cyber Security)",
      institution: "Amrita Vishwa Vidyapeetham",
      location: "Coimbatore, Tamil Nadu - 641112",
      duration: "2022 - 2026",
      cgpa: "7.86"
    }
  ],

experience: [
  {
  role: "Associate Security Engineer Intern",
  organization: "Medha Servo Drives",
  type: "Internship",
  duration: "January 2025 - March 2025",
  location: "Hyderabad, India",
  description: [
    "Conducted user-level and system-level penetration testing using tools such as OpenVAS,winaudit,WinPEAS.",
    "Assessed system vulnerabilities and identified potential privilege escalation paths.",
    "Strengthened network security architecture by restricting subdomains of whitelisted domains.",
    "Blocked exposed API endpoints associated with whitelisted domains to prevent misuse.",
    "Ensured there was no explicit code or sensitive data leakage across internal systems.",
    "Contributed to improving internal network segmentation to enhance overall security posture."
  ]
},
  {
    role: "Bug Bounty Hunter",
    organization: "HackerOne",
    type: "Self-employed",
    duration: "May 2025 - Jul 2025",
    location: "India · Remote",
    description: [
      "Submitted multiple vulnerability reports related to sensitive information disclosure through OSINT and Google Dorking.",
      "Identified improper cryptographic signature verification issues in JWT tokens.",
      "Tested platforms including Dell, Bumba Global, GeeksforGeeks, LeetCode, SAP Labs, Cognizant, and MedicalBabaji.",
      "Successfully earned Hall of Fame recognition from Cognizant through responsible vulnerability disclosure."
    ]
  },
  {
    role: "Open-source Contributor",
    organization: "Hacktoberfest",
    type: "Part-time",
    duration: "Oct 2024 - Nov 2024",
    location: "India · Remote",
    description: [
      "Contributed to multiple open-source repositories on GitHub.",
      "Identified and helped resolve security issues including input sanitization flaws, injection vulnerabilities, and command injection.",
      "Collaborated with maintainers to improve code quality and security practices."
    ]
  },
  {
    role: "Blogger",
    organization: "Medium",
    type: "Self-employed",
    duration: "Dec 2023 - Oct 2024",
    location: "Remote",
    description: [
      "Published technical articles related to cybersecurity concepts and development topics.",
      "Shared learning experiences, tools, and practical insights from security research and bug bounty activities."
    ]
  },
  {
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code",
    type: "Part-time",
    duration: "May 2024 - Aug 2024",
    location: "Remote",
    description: [
      "Contributed to open-source projects and resolved assigned GitHub issues.",
      "Gained hands-on experience with Git workflows, pull requests, and collaborative development.",
      "Developed skills in JavaScript, DOM manipulation, and open-source contribution practices."
    ]
  }
],

  skills: {
    languages: ["C", "C++", "Python", "Bash Scripting", "JavaScript"],
    libraries: ["C++ STL"],
    security_tools: [
      "Burp Suite",
      "Nmap",
      "Wireshark",
      "Dirbuster",
      "Maltego",
      "FFUF",
      "curl",
      "Postman API",
      "OpenVas",
      "Winpeas",
      "Winaudit",
      "Kiterunner",
      "Armitage",
      "Metasploit",
      "Google Dorking"
    ],
    dev_tools: ["VSCode", "Git", "GitHub"],
    cloud: ["Docker (Fundamentals)", "AWS (Fundamentals)", "Kubernetes (Fundamentals)"],
    coursework: [
      "System Security",
      "Linux",
      "Computer Networks",
      "Digital Forensics",
      "Network Security",
      "Cryptography"
    ]
  },

  projects: [
    {
      name: "Automated Authentication Testing Toolkit",
      subtitle: "JWT, OAuth 2.0, General Authentication",
      status: "In Development",
      description: "A comprehensive security testing toolkit for validating authentication implementations during development. Features a modular attack suite for JWT, OAuth 2.0, and general authentication mechanisms with parameter manipulation, attack simulation, detection, and remediation guidance.",
      technologies: ["Python", "hashlib", "hmac", "cryptography", "pyjwt", "mitmproxy", "base64", "json"],
      features: [
        "JWT token manipulation and validation testing",
        "OAuth 2.0 flow analysis",
        "Automated attack simulation with detailed reports",
      ]
    },
    {
      name: "Implementation of AES in Five Modes of Operation",
      description: "A Flask web application demonstrating AES encryption and decryption across five different modes of operation (ECB, CBC, CFB, OFB, CTR) for secure data transmission. Interactive interface for understanding cryptographic modes.",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
      features: [
        "Support for ECB, CBC, CFB, OFB, and CTR modes",
        "Interactive web interface for encryption/decryption",
        "Educational tool for cryptography concepts",
        "Visual comparison of different AES modes"
      ]
    },
    {
      name: "Query Dorker - Google Dork Generator",
      description: "An automation tool that generates and utilizes Google Dorks for comprehensive web security assessments. Implements advanced search techniques and query customization for identifying exposed resources, sensitive files, login pages, exposed APIs, and potential security risks.",
      technologies: ["Python"],
      features: [
        "Automated Google Dork generation",
        "Custom query building for targeted searches",
        "Detection of exposed sensitive files and endpoints",
        "Security assessment reporting"
      ]
    }
  ],

  bugBounty: [
    {
      title: "Broken Access Control Vulnerability – University Web Portal",
      date: "April 2025",
      severity: "Critical",
      description: "Discovered an access control misconfiguration in university web portal allowing unauthorized access to restricted resources. Reported through responsible disclosure process.",
      recognition: "Letter of Appreciation",
      impact: "Prevented potential unauthorized data access",
      link: "https://www.linkedin.com/posts/pavan-shanmukha-madhav-gunda-45031b252_cybersecurity-responsibledisclosure-bugbounty-activity-7325403926420164611-IOZC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5W4bwB0eKDvP60r0gxJOn5uKOicadAyjA"
    },
    {
      title: "Cognizant Hall of Fame 2025 – Unauthenticated Employee Data Exposure",
      platform: "HackerOne",
      severity: "High",
      description: "Identified and reported a public API endpoint exposing sensitive employee data without authentication requirements.",
      recognition: "Cognizant Hall of Fame 2025",
      cwe: "CWE-200: Information Exposure",
      link:"https://hackerone.com/cognizant/thanks/2025"
    },
    {
      title: "JWT Authentication Bypass – Dell.com Bug Bounty(Duplicate)",
      platform: "Bugcrowd",
      date: "June 2025",
      severity: "Critical",
      description: "Identified a critical JWT signature validation flaw allowing authentication bypass through 'alg: none' attack, signature removal, and exp claim bypass.",
      recognition: "Dell Bug Bounty Program",
      cwe: "CWE-347: Improper Verification of Cryptographic Signature",
      techniques: ["alg: none attack", "Signature removal", "Exp claim bypass"],
      link:"https://www.linkedin.com/posts/pavan-shanmukha-madhav-gunda-45031b252_bugbounty-ethicalhacking-cybersecurity-activity-7346574005451091968-xu5o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5W4bwB0eKDvP60r0gxJOn5uKOicadAyjA"
    },
    {
      title: "XSS Vulnerability – Retro",
      severity: "Medium",
      description: "Identified a stored XSS vulnerability due to improper input validation. Reported via GitHub, developer acknowledged and fixed the flaw.",
      status: "CVE Requested",
      cwe: "CWE-79: Improper Neutralization of Input",
      link: "https://nvd.nist.gov/vuln/detail/CVE-2025-66036"
    },
    {
      title: "Git Repository Exposure – Haveloc Insider",
      method: "Responsible Disclosure",
      severity: "Medium",
      description: "Discovered publicly accessible /.git/config file exposing internal Git repository metadata, configuration details, and potential source code disclosure.",
      cwe: "CWE-540: Information Exposure Through Source Code",
      link:"https://www.linkedin.com/posts/pavan-shanmukha-madhav-gunda-45031b252_bugbounty-vulnerability-git-activity-7422559516191309824--Szz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5W4bwB0eKDvP60r0gxJOn5uKOicadAyjA"
    },
     {
      title: "JWT Weak Signing Key - Talentd Portal",
      method: "Responsible Disclosure",
      severity: "critical",
      description: "the JWT signing key was weak and easily guessable, allowing attackers to forge valid tokens and gain unauthorized access to user accounts. Reported through responsible disclosure process.",
      cwe: "CWE-1391: Use of Weak Cryptographic Key",
      impact: "Prevented potential account compromise and unauthorized access",
      link:"https://www.linkedin.com/posts/pavan-shanmukha-madhav-gunda-45031b252_talentd-dsa-development-activity-7429900743098191872-sTIn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5W4bwB0eKDvP60r0gxJOn5uKOicadAyjA"
    }
  ],

  certifications: [
    {
      name: "Junior Penetration Tester",
      issuer: "TryHackMe",
      status: "Completed"
    },
    {
      name: "Networking Basics",
      issuer: "Cisco",
      status: "Completed"
    },
    {
      name: "Postman API Fundamentals",
      issuer: "Postman API",
      status: "Completed"
    },
    {
      name: "NMAP Hands-on Course",
      issuer: "Udemy",
      status: "Completed"
    },
    {
      name: "Burp Suite Certified Practitioner (BSCP)",
      issuer: "PortSwigger",
      status: "In Progress"
    }
  ],

  asciiArt: `
    ██████╗  █████╗ ██╗   ██╗ █████╗ ███╗   ██╗
    ██╔══██╗██╔══██╗██║   ██║██╔══██╗████╗  ██║
    ██████╔╝███████║██║   ██║███████║██╔██╗ ██║
    ██╔═══╝ ██╔══██║╚██╗ ██╔╝██╔══██║██║╚██╗██║
    ██║     ██║  ██║ ╚████╔╝ ██║  ██║██║ ╚████║
    ╚═╝     ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═══╝
                                                 
    ███████╗██╗  ██╗ █████╗ ███╗   ██╗███╗   ███╗██╗   ██╗██╗  ██╗██╗  ██╗ █████╗ 
    ██╔════╝██║  ██║██╔══██╗████╗  ██║████╗ ████║██║   ██║██║ ██╔╝██║  ██║██╔══██╗
    ███████╗███████║███████║██╔██╗ ██║██╔████╔██║██║   ██║█████╔╝ ███████║███████║
    ╚════██║██╔══██║██╔══██║██║╚██╗██║██║╚██╔╝██║██║   ██║██╔═██╗ ██╔══██║██╔══██║
    ███████║██║  ██║██║  ██║██║ ╚████║██║ ╚═╝ ██║╚██████╔╝██║  ██╗██║  ██║██║  ██║
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
                                                                                     
    ███╗   ███╗ █████╗ ██████╗ ██╗  ██╗ █████╗ ██╗   ██╗    ██████╗ ██╗   ██╗███╗   ██╗██████╗  █████╗ 
    ████╗ ████║██╔══██╗██╔══██╗██║  ██║██╔══██╗██║   ██║   ██╔════╝ ██║   ██║████╗  ██║██╔══██╗██╔══██╗
    ██╔████╔██║███████║██║  ██║███████║███████║██║   ██║   ██║  ███╗██║   ██║██╔██╗ ██║██║  ██║███████║
    ██║╚██╔╝██║██╔══██║██║  ██║██╔══██║██╔══██║╚██╗ ██╔╝   ██║   ██║██║   ██║██║╚██╗██║██║  ██║██╔══██║
    ██║ ╚═╝ ██║██║  ██║██████╔╝██║  ██║██║  ██║ ╚████╔╝    ╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝██║  ██║
    ╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝
  `,

  welcomeMessage: `
Welcome to Pavan's Terminal Portfolio v1.0

╔════════════════════════════════════════════════════════════════════════╗
║  Cybersecurity Enthusiast | Bug Bounty Hunter | Penetration Tester    ║
╚════════════════════════════════════════════════════════════════════════╝

Type 'help' to see available commands.
Type 'about' to learn more about me.
  `
};

export const commands = {
  help: {
    description: "Display all available commands",
    usage: "help"
  },
  about: {
    description: "Display information about Pavan",
    usage: "about",
    aliases: ["whoami"]
  },
  skills: {
    description: "List technical skills and tools",
    usage: "skills"
  },
  projects: {
    description: "Show all projects",
    usage: "projects"
  },
  experience: {
    description: "Display work experience",
    usage: "experience",
    aliases: ["work"]
  },
  bugs: {
    description: "Show bug bounty achievements and CVEs",
    usage: "bugs",
    aliases: ["bugbounty", "achievements"]
  },
  certifications: {
    description: "List certifications and courses",
    usage: "certifications",
    aliases: ["certs"]
  },
  education: {
    description: "Display educational background",
    usage: "education",
    aliases: ["edu"]
  },
  contact: {
    description: "Show contact information",
    usage: "contact"
  },
  ls: {
    description: "List available sections",
    usage: "ls"
  },
  clear: {
    description: "Clear the terminal screen",
    usage: "clear",
    aliases: ["cls"]
  },
  banner: {
    description: "Display the welcome banner",
    usage: "banner"
  },
  history: {
    description: "Show command history",
    usage: "history"
  },
  hack: {
    description: "Initiate hacking sequence",
    usage: "hack",
    aliases: ["hacker"]
  },
  matrix: {
    description: "Enter the Matrix",
    usage: "matrix"
  },
  neofetch: {
    description: "Display system information",
    usage: "neofetch"
  },
  cowsay: {
    description: "Make the cow say something",
    usage: "cowsay [message]"
  },
  fortune: {
    description: "Get a random security wisdom",
    usage: "fortune"
  },
blogs: {
  description: "Open my Medium blog posts",
  usage: "blogs",
  link: "https://medium.com/@pavanshanmukhmadhav"
},
  exit: {
    description: "Try to exit the terminal",
    usage: "exit"
  },
  pwd: {
    description: "Print working directory",
    usage: "pwd"
  },
  date: {
    description: "Display current date and time",
    usage: "date"
  },
  ping: {
    description: "Ping Pavan's skills",
    usage: "ping"
  },
  sound: {
    description: "Toggle sound effects on/off",
    usage: "sound [on/off]"
  }
};

export const securityQuotes = [
  "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room. - Gene Spafford",
  "Security is not a product, but a process. - Bruce Schneier",
  "Passwords are like underwear: don't let people see it, change it regularly, and don't share it. - Chris Pirillo",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Hackers are breaking the systems for profit. Before, it was about intellectual curiosity. - Kevin Mitnick",
  "If you think technology can solve your security problems, then you don't understand the problems. - Bruce Schneier",
  "There are two types of companies: those that have been hacked, and those that will be.",
  "Cybersecurity is much more than a matter of IT. - Stephane Nappo",
  "The weakest link in the security chain is the human. - Kevin Mitnick",
  "Don't trust, verify. - Russian Proverb (Cybersecurity Edition)"
];