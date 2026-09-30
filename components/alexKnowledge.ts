/**
 * Knowledge base for Alex, the OTassets support assistant.
 *
 * Every answer here is grounded in content that actually exists on the page
 * (UpdateCard, CompatibilityCard, ReleaseNotesAccordion, the views, etc.) so
 * Alex never invents version numbers, checksums or advisory IDs.
 */

export type SupportTab =
  | 'Firmware Updates'
  | 'Product Documentation'
  | 'Security Advisories'
  | 'Troubleshooting'
  | 'Knowledge Base'
  | 'Contact Support';

export interface AlexAction {
  label: string;
  tab: SupportTab;
}

export interface AlexTopic {
  id: string;
  /** Multi-word phrases score much higher than single keywords. */
  phrases?: string[];
  keywords: string[];
  answer: string;
  suggestions?: string[];
  action?: AlexAction;
}

export const PATCH = {
  name: 'OT Workstation Security Patch',
  version: '3.2.1.0',
  file: 'patch.exe',
  size: '48.5 MB',
  released: '15 Sep 2026',
  checksum: '7f3e2e9c4b7d8a1c0f9e6d2b4a7c1e8f9d3b6a2c4e7f1d9a8b3c5d6e9f0',
} as const;

export const GREETING =
  "Hi, I'm **Alex** — your OTassets support assistant. 👋\n\nI can help with firmware updates, security advisories, installation issues, documentation and support tickets. What do you need?";

export const DEFAULT_SUGGESTIONS = [
  'What is the latest firmware version?',
  'How do I install the patch?',
  'Is my system compatible?',
  'Show me the security advisories',
];

export const TOPICS: AlexTopic[] = [
  {
    id: 'greeting',
    phrases: ['good morning', 'good evening', 'good afternoon'],
    keywords: ['hi', 'hello', 'hey', 'greetings', 'namaste'],
    answer:
      "Hello! 👋 I'm Alex. Ask me anything about the OT Workstation patch, security advisories, installation or support — I'll point you to the right place.",
    suggestions: DEFAULT_SUGGESTIONS,
  },
  {
    id: 'identity',
    phrases: ['who are you', 'what are you', 'your name', 'what can you do', 'how can you help'],
    keywords: ['alex', 'bot', 'assistant'],
    answer:
      "I'm **Alex**, the virtual support assistant for OTassets. I answer using this support portal's own data — firmware versions, checksums, advisories, troubleshooting steps and documentation.\n\nI can also jump you straight to the right section of the page.",
    suggestions: [
      'What is the latest firmware version?',
      'What changed in v3.2.1?',
      'How do I contact support?',
    ],
  },
  {
    id: 'latest-version',
    phrases: [
      'latest version',
      'latest firmware',
      'newest version',
      'current version',
      'latest patch',
      'latest release',
      'what version',
      'new update',
    ],
    keywords: ['version', 'firmware', 'latest', 'update', 'release', 'newest', 'current'],
    answer: `The latest release is **${PATCH.name} v${PATCH.version}**.\n\n• Released: ${PATCH.released}\n• File: ${PATCH.file} (${PATCH.size})\n• Status: Latest Release, classified as a Critical Patch\n\nIt ships security fixes, stability improvements and performance enhancements for OT environment workstations.`,
    suggestions: ['How do I download it?', 'Is my system compatible?', 'Show release history'],
    action: { label: 'Open Firmware Updates', tab: 'Firmware Updates' },
  },
  {
    id: 'download',
    phrases: [
      'how do i download',
      'where to download',
      'download the patch',
      'get the patch',
      'download link',
      'download file',
    ],
    keywords: ['download', 'mirror', 'exe'],
    answer: `Use the red **Download Patch.exe** button on the Firmware Updates card.\n\n• File: ${PATCH.file}\n• Size: ${PATCH.size}\n• Version: ${PATCH.version}\n\nA Direct Mirror Link sits under the button if your network blocks the primary host. Verify the SHA256 checksum before you run the installer.`,
    suggestions: ['What is the SHA256 checksum?', 'How do I install the patch?'],
    action: { label: 'Go to download', tab: 'Firmware Updates' },
  },
  {
    id: 'checksum',
    phrases: [
      'sha256',
      'check sum',
      'verify the file',
      'verify download',
      'file integrity',
      'hash of the file',
    ],
    keywords: ['checksum', 'sha', 'hash', 'integrity', 'authentic', 'tamper'],
    answer: `The SHA256 checksum for ${PATCH.file} is:\n\n\`${PATCH.checksum}\`\n\nCopy it with the **Copy Hash** button on the System Compatibility card. To verify on Windows:\n\n\`certutil -hashfile patch.exe SHA256\`\n\nIf the output does not match exactly, do **not** run the file — re-download it from the official source.`,
    suggestions: ['How do I install the patch?', 'Is my system compatible?'],
    action: { label: 'Show checksum', tab: 'Firmware Updates' },
  },
  {
    id: 'compatibility',
    phrases: [
      'is my system compatible',
      'system requirements',
      'supported operating system',
      'which os',
      'does it work on',
      'minimum requirements',
    ],
    keywords: [
      'compatible',
      'compatibility',
      'requirements',
      'windows',
      'hmi',
      'workstation',
      'supported',
    ],
    answer:
      'v3.2.1.0 is supported on:\n\n• Windows 10 (64-bit)\n• Windows 11 (64-bit)\n• OT Workstation Series\n• Industrial HMI Systems\n\n32-bit builds are not supported. Full hardware and OS detail is in the *OT Workstation Hardware & OS Requirements Guide* under Product Documentation.',
    suggestions: ['How do I install the patch?', 'Show me the documentation'],
    action: { label: 'See compatibility', tab: 'Firmware Updates' },
  },
  {
    id: 'install',
    phrases: [
      'how do i install',
      'how to install',
      'installation steps',
      'installation instructions',
      'apply the patch',
      'run the patch',
      'setup steps',
    ],
    keywords: ['install', 'installation', 'setup', 'steps', 'instructions', 'deploy'],
    answer:
      'Installation is four steps:\n\n**1. Download** — get patch.exe from the Firmware Updates card.\n**2. Run** — right-click the file and choose *Run as Administrator*.\n**3. Follow Setup** — work through the on-screen installation steps.\n**4. Auto Update** — future updates are applied automatically when available.\n\nWorkstation monitoring services restart during setup, so schedule it inside a maintenance window where you can.',
    suggestions: [
      'Installation failed with error 0x80070005',
      'How do I verify the update applied?',
      'Will this disrupt my PLC?',
    ],
    action: { label: 'Open installation steps', tab: 'Firmware Updates' },
  },
  {
    id: 'error-privileges',
    phrases: [
      '0x80070005',
      'installation failed',
      'install failed',
      'error code',
      'access denied',
      'permission denied',
      'will not install',
    ],
    keywords: ['error', 'fail', 'failed', 'failing', 'denied', 'privilege', 'admin', 'blocked'],
    answer:
      'Error **0x80070005** means insufficient administrative privileges.\n\nFix it like this:\n\n• Right-click patch.exe and select **Run as Administrator**\n• Temporarily pause third-party antivirus during installation\n• Confirm your account is a local administrator on the workstation\n\nIf it still fails, raise a ticket with the installer log attached and an engineer will follow up.',
    suggestions: ['How do I verify the update applied?', 'How do I contact support?'],
    action: { label: 'Open Troubleshooting', tab: 'Troubleshooting' },
  },
  {
    id: 'verify-install',
    phrases: [
      'verify the update',
      'verify installation',
      'did it install',
      'confirm the update',
      'check if installed',
      'installation successful',
      'update applied',
    ],
    keywords: ['verify', 'confirm', 'successful', 'applied', 'diagnostic', 'installed'],
    answer:
      'Open the **OT Workstation Diagnostic Utility** from the Start Menu and check two things:\n\n• The version string reads **3.2.1.0**\n• Integrity status reports **Verified**\n\nIf either differs, the patch did not apply cleanly — re-run the installer as Administrator.',
    suggestions: ['Installation failed with error 0x80070005', 'Show release history'],
    action: { label: 'Open Troubleshooting', tab: 'Troubleshooting' },
  },
  {
    id: 'plc-impact',
    phrases: [
      'disrupt plc',
      'affect plc',
      'controller downtime',
      'production downtime',
      'stop the controller',
      'do i need downtime',
      'will it restart',
    ],
    keywords: ['plc', 'controller', 'downtime', 'disrupt', 'production', 'reboot', 'restart', 'outage'],
    answer:
      'No — the patch updates workstation diagnostic binaries and driver layers, not controller logic.\n\nController operations stay active. Workstation monitoring services do restart automatically during setup, so expect a short gap in monitoring data. Plan it into a maintenance window if your site needs continuous visibility.',
    suggestions: ['How do I install the patch?', 'Show me the security advisories'],
    action: { label: 'Open Troubleshooting', tab: 'Troubleshooting' },
  },
  {
    id: 'advisories',
    phrases: [
      'security advisory',
      'security advisories',
      'vulnerability bulletin',
      'security bulletin',
      'known vulnerabilities',
      'cvss score',
    ],
    keywords: ['advisory', 'advisories', 'cve', 'vulnerability', 'vulnerabilities', 'cvss', 'exploit', 'bulletin'],
    answer:
      'Three advisories are currently published:\n\n• **OTASSETS-SA-2026-08** — OT Workstation Service Remote Execution Vulnerability · *Critical*, CVSS 9.1 · 15 Sep 2026\n• **OTASSETS-SA-2026-07** — EtherNet/IP Interface Out-of-Memory Condition · *High*, CVSS 7.8 · 28 Aug 2026\n• **OTASSETS-SA-2026-06** — Improper Authorization in HMI Web API Server · *Medium*, CVSS 6.4 · 11 Jul 2026\n\nPatch v3.2.1.0 resolves the bulletins listed under the Resolved Security Bulletins tab.',
    suggestions: ['What is the latest firmware version?', 'How do I download it?'],
    action: { label: 'Open Security Advisories', tab: 'Security Advisories' },
  },
  {
    id: 'urgency',
    phrases: [
      'why is there an alert',
      'critical update',
      'how urgent',
      'is it urgent',
      'should i update now',
      'do i need to patch',
    ],
    keywords: ['urgent', 'critical', 'risk', 'priority', 'mandatory'],
    answer:
      'Treat it as urgent. A critical security update is available for OT workstations addressing recent vulnerabilities, including a Critical remote execution issue rated CVSS 9.1.\n\nInstall v3.2.1.0 at the earliest opportunity, starting with internet-reachable and engineering workstations.',
    suggestions: ['Show me the security advisories', 'How do I download it?'],
    action: { label: 'Open Firmware Updates', tab: 'Firmware Updates' },
  },
  {
    id: 'release-history',
    phrases: [
      'release history',
      'previous versions',
      'older versions',
      'version history',
      'release notes',
      'what changed',
      'what did it fix',
      'roll back',
    ],
    keywords: ['history', 'previous', 'older', 'rollback', 'changelog', 'superceded', 'archived'],
    answer:
      'Release history for the OT Workstation series:\n\n• **3.2.1.0** — 15 Sep 2026 · 48.5 MB · Critical Patch · *Active*\n• **3.2.0.4** — 02 Aug 2026 · 46.2 MB · Feature Update · *Superceded*\n• **3.1.9.1** — 14 May 2026 · 42.8 MB · Security Patch · *Archived*\n• **3.1.8.0** — 10 Feb 2026 · 41.0 MB · Maintenance · *Archived*\n\nRollback steps live in *Firmware Patching & Rollback Procedures* under Product Documentation.',
    suggestions: ['Show me the documentation', 'What is the latest firmware version?'],
    action: { label: 'Open release notes', tab: 'Firmware Updates' },
  },
  {
    id: 'documentation',
    phrases: [
      'product documentation',
      'technical manual',
      'user guide',
      'reference architecture',
      'show me the documentation',
      'where are the docs',
    ],
    keywords: ['documentation', 'docs', 'manual', 'guide', 'pdf', 'handbook', 'datasheet'],
    answer:
      'Four documents are published:\n\n• OT Workstation Hardware & OS Requirements Guide — PDF, 3.4 MB\n• Industrial Security Deployment Reference Architecture — PDF, 12.1 MB\n• Firmware Patching & Rollback Procedures — PDF, 1.8 MB\n• Control Network Protocol Configuration Manual — PDF, 8.5 MB',
    suggestions: ['Show knowledge base articles', 'Is my system compatible?'],
    action: { label: 'Open Product Documentation', tab: 'Product Documentation' },
  },
  {
    id: 'knowledge-base',
    phrases: [
      'knowledge base',
      'kb article',
      'how to article',
      'dual homed',
      'firewall rules',
      'disaster recovery',
    ],
    keywords: ['kb', 'article', 'articles', 'networking', 'backup', 'recovery', 'firewall', 'nic', 'hardening'],
    answer:
      'Top knowledge base articles:\n\n• **KB-10492** — Configuring Dual-Homed NIC Networks on OT Workstations · Networking · 4.9 ★\n• **KB-10488** — Hardening Windows Defender Firewall Rules for CIP Protocols · Security · 4.8 ★\n• **KB-10475** — Backup & Disaster Recovery Procedures for Industrial HMIs · Maintenance · 5.0 ★\n\nAll three are written by field application engineers.',
    suggestions: ['Show me the documentation', 'How do I contact support?'],
    action: { label: 'Open Knowledge Base', tab: 'Knowledge Base' },
  },
  {
    id: 'contact',
    phrases: [
      'contact support',
      'talk to a human',
      'speak to someone',
      'raise a ticket',
      'open a ticket',
      'submit a request',
      'support engineer',
      'response time',
    ],
    keywords: ['contact', 'ticket', 'human', 'agent', 'engineer', 'email', 'phone', 'escalate'],
    answer:
      'Use the **Contact Support** form to reach a technical support engineer.\n\nYou provide your name, work email, affected product series and severity level. An engineer responds within **2 hours**, and you get a ticket reference (for example TK-2026-9481) to track it.',
    suggestions: ['Installation failed with error 0x80070005', 'Show me the security advisories'],
    action: { label: 'Open Contact Support', tab: 'Contact Support' },
  },
  {
    id: 'search',
    phrases: ['how do i search', 'find something', 'search the site'],
    keywords: ['search', 'lookup'],
    answer:
      'Press **Ctrl + K** (or **⌘ + K** on macOS), or click the search icon in the top navigation, to search firmware, advisories, documentation and KB articles from anywhere on the portal.',
    suggestions: DEFAULT_SUGGESTIONS.slice(0, 3),
  },
  {
    id: 'thanks',
    phrases: ['thank you', 'thanks a lot', 'that helps', 'appreciate it'],
    keywords: ['thanks', 'thank', 'thx', 'cheers'],
    answer: 'Happy to help! 🙂 Anything else I can look up for you?',
    suggestions: DEFAULT_SUGGESTIONS.slice(0, 3),
  },
  {
    id: 'bye',
    phrases: ['good bye', 'see you', 'that is all'],
    keywords: ['bye', 'goodbye', 'later'],
    answer:
      "Take care! v3.2.1.0 is the release to be on — I'm in the corner whenever you need me. 👋",
  },
];

export const FALLBACK_ANSWER =
  "I don't have a confident answer for that one yet. I'm strongest on:\n\n• Firmware versions, downloads and checksums\n• System compatibility and installation\n• Security advisories and CVSS ratings\n• Troubleshooting install errors\n• Documentation, KB articles and support tickets\n\nTry rephrasing, or open a support ticket and an engineer will pick it up within 2 hours.";

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'do', 'does', 'did', 'i', 'my', 'me', 'we', 'you',
  'your', 'it', 'its', 'to', 'of', 'in', 'on', 'for', 'and', 'or', 'but', 'with', 'this', 'that',
  'can', 'could', 'would', 'should', 'will', 'shall', 'please', 'tell', 'about', 'there', 'be',
  'have', 'has', 'had', 'am', 'any', 'from', 'at', 'as', 'so', 'if', 'not', 'what', 'how', 'when',
  'where', 'which', 'why', 'need', 'want', 'get', 'show',
]);

function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9.+\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(input: string): string[] {
  return normalize(input)
    .split(' ')
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

/** Tolerates a single-character typo on words of 5+ characters ("instal" -> "install"). */
function isNearMatch(token: string, keyword: string): boolean {
  if (token === keyword) return true;
  if (keyword.length < 5 || Math.abs(token.length - keyword.length) > 1) return false;

  const [shorter, longer] = token.length < keyword.length ? [token, keyword] : [keyword, token];
  let i = 0;
  let j = 0;
  let edits = 0;

  while (i < shorter.length && j < longer.length) {
    if (shorter[i] === longer[j]) {
      i += 1;
      j += 1;
      continue;
    }
    edits += 1;
    if (edits > 1) return false;
    if (shorter.length === longer.length) i += 1;
    j += 1;
  }

  return edits + (longer.length - j) + (shorter.length - i) <= 1;
}

export interface AlexMatch {
  topicId: string | null;
  answer: string;
  suggestions: string[];
  action?: AlexAction;
}

export function findAnswer(question: string): AlexMatch {
  const normalized = normalize(question);
  const tokens = tokenize(question);

  let best: AlexTopic | null = null;
  let bestScore = 0;

  for (const topic of TOPICS) {
    let score = 0;

    for (const phrase of topic.phrases ?? []) {
      if (normalized.includes(phrase)) score += 10 + phrase.length / 4;
    }

    for (const keyword of topic.keywords) {
      if (tokens.some((token) => isNearMatch(token, keyword))) score += 3;
    }

    // A bare greeting shouldn't outrank a real question that happens to say "hi there".
    if (topic.id === 'greeting' && tokens.length > 3) score -= 4;

    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }

  if (!best || bestScore < 3) {
    return { topicId: null, answer: FALLBACK_ANSWER, suggestions: DEFAULT_SUGGESTIONS };
  }

  return {
    topicId: best.id,
    answer: best.answer,
    suggestions: best.suggestions ?? DEFAULT_SUGGESTIONS.slice(0, 3),
    action: best.action,
  };
}
