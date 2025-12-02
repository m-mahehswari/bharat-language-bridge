// Universal Language Bridge for Bharat - Complete UX Copy

export const appInfo = {
  name: "Bhasha Setu",
  tagline: "Your language, every app",
  taglines: [
    "Apni bhasha, har app mein — Your language, every app",
    "Har app ko apni bhasha mein samjho — Understand every app in your language",
    "English ka tension nahi, apni bhasha mein padho — No English stress, read in your language"
  ],
  fullName: "Bhasha Setu — Universal Language Bridge",
};

export const onboarding = {
  welcome: {
    headline: "Namaste! 🙏",
    subheadline: "Welcome to Bhasha Setu",
    description: "Finally, use any app in your own language. No more struggling with English — we translate everything on your screen, instantly.",
    cta: "Let's Begin",
    skipText: "I'll set up later",
  },
  languages: {
    headline: "Choose Your Language",
    subheadline: "Apni pasand ki bhasha chuniye",
    description: "Pick the language you're most comfortable with. We support all major Indian languages. You can always change this later.",
    cta: "Continue",
    searchPlaceholder: "Search languages...",
    popularLabel: "Popular Languages",
    allLabel: "All Languages",
  },
  permissions: {
    headline: "A Few Permissions Needed",
    subheadline: "Kuch permissions chahiye",
    description: "To translate text from other apps, we need your permission. Don't worry — your data stays on your device and is never shared.",
    cta: "Grant Permissions",
    skipText: "I'll do this later",
  },
  ready: {
    headline: "All Set! 🎉",
    subheadline: "Ab aap tayaar hain!",
    description: "Bhasha Setu is ready to help you. Open any app and tap the floating button to translate. It's that simple!",
    cta: "Start Using Bhasha Setu",
    tip: "Tip: The orange bubble will appear on your screen. Tap it anytime to translate!",
  },
};

export const permissions = {
  accessibility: {
    title: "Screen Reading Permission",
    shortTitle: "Accessibility",
    description: "This lets Bhasha Setu read the text shown on your screen from other apps. We only read text to translate it — nothing else.",
    whyNeeded: "Without this, we cannot see what text to translate for you.",
    button: "Enable Screen Reading",
    grantedText: "Enabled ✓",
  },
  overlay: {
    title: "Show Translation Bubble",
    shortTitle: "Display Overlay",
    description: "This allows the translation bubble to float on top of other apps, so you can see translations without switching apps.",
    whyNeeded: "This is how the translated text appears while you use other apps.",
    button: "Enable Bubble Display",
    grantedText: "Enabled ✓",
  },
  microphone: {
    title: "Voice Input (Optional)",
    shortTitle: "Microphone",
    description: "If you want to speak instead of typing, we need microphone access. This is completely optional.",
    whyNeeded: "Only needed if you prefer voice commands.",
    button: "Enable Voice Input",
    grantedText: "Enabled ✓",
    skipText: "Skip for now",
  },
};

export const homeScreen = {
  active: {
    headline: "Translation Active",
    subheadline: "Bhasha Setu is helping you",
    description: "Open any app and see text in your language. Tap the bubble to expand translations.",
    statusBadge: "● Active",
  },
  paused: {
    headline: "Translation Paused",
    subheadline: "Bhasha Setu is sleeping",
    description: "Tap below to resume translations. Your settings are saved.",
    statusBadge: "○ Paused",
  },
  off: {
    headline: "Translation Off",
    subheadline: "Bhasha Setu is not running",
    description: "Turn on translation to start reading apps in your language.",
    statusBadge: "○ Off",
  },
  buttons: {
    start: "Start Translating",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
  },
  quickActions: {
    changeLanguage: "Change Language",
    settings: "Settings",
    help: "Help",
  },
};

export const floatingBubble = {
  expanded: {
    title: "Translation",
    closeHint: "Tap × to close",
    dragHint: "Hold and drag to move",
    copyButton: "Copy",
    speakButton: "Speak",
    noTextMessage: "No text detected on this screen",
    loadingMessage: "Translating...",
  },
  collapsed: {
    hint: "Tap to translate",
    activeIndicator: "●",
  },
  tooltips: {
    drag: "Drag me anywhere",
    tap: "Tap to see translation",
    expand: "Tap to expand",
    close: "Tap to close",
  },
};

export const languageSelection = {
  heading: "Select Your Language",
  subheading: "Apni bhasha chuniye",
  description: "Choose the language you want to read apps in. We'll translate English and other languages to your choice.",
  currentLabel: "Current language:",
  changeButton: "Change",
  saveButton: "Save Language",
  cancelButton: "Cancel",
};

export const errors = {
  noInternet: {
    title: "No Internet Connection",
    messages: [
      "Looks like you're offline. Please check your internet connection and try again.",
      "Internet nahi hai. Apna connection check karein aur dobara try karein.",
      "We need internet to translate. Please connect and try again.",
    ],
    action: "Try Again",
  },
  slowInternet: {
    title: "Slow Connection",
    messages: [
      "Your internet is slow. Translation may take longer than usual.",
      "Internet dhima hai. Thoda intezaar karein.",
      "Taking longer than expected. Please be patient.",
    ],
    action: "Wait",
  },
  apiError: {
    title: "Translation Issue",
    messages: [
      "Something went wrong with translation. Please try again in a moment.",
      "Abhi translation mein dikkat hai. Thodi der mein try karein.",
      "Our translation service is having a small issue. We're working on it.",
    ],
    action: "Retry",
  },
  noText: {
    title: "No Text Found",
    messages: [
      "No readable text on this screen. Try a different app or screen.",
      "Is screen pe koi text nahi mila. Doosra app try karein.",
      "This screen doesn't have text we can translate.",
    ],
    action: "OK",
  },
  permissionDenied: {
    title: "Permission Needed",
    messages: [
      "Please enable the required permissions to use Bhasha Setu.",
      "Bhasha Setu ko kaam karne ke liye permissions chahiye.",
    ],
    action: "Go to Settings",
  },
};

export const privacy = {
  shortStatement: "Your privacy matters to us. Bhasha Setu only reads screen text to translate it. We never store, share, or misuse your personal information. You're always in control — pause or stop anytime.",
  toggleLabel: "Pause Translations",
  toggleDescription: "When paused, Bhasha Setu won't read or translate any screen content.",
  dataNotice: "All translations happen securely. We don't store your data.",
  trustBadges: [
    "🔒 Secure",
    "🚫 No data stored",
    "✓ You control",
  ],
};

export const settings = {
  title: "Settings",
  sections: {
    language: {
      title: "Language",
      description: "Change your preferred language",
    },
    privacy: {
      title: "Privacy & Data",
      description: "Control how Bhasha Setu uses your data",
    },
    permissions: {
      title: "Permissions",
      description: "Manage app permissions",
    },
    about: {
      title: "About",
      description: "App version and information",
    },
    help: {
      title: "Help & Support",
      description: "FAQs and contact support",
    },
  },
};

export const localizationGuidelines = {
  tone: [
    "Use simple, everyday language that a grandmother would understand",
    "Be respectful and warm — like talking to a family elder",
    "Avoid technical jargon or English words when native alternatives exist",
    "Use formal/respectful pronouns (aap, not tum)",
  ],
  avoid: [
    "Modern slang that older users may not know",
    "Technical terms without explanation",
    "Long, complex sentences",
    "Passive voice (prefer direct, active sentences)",
  ],
  include: [
    "Familiar, comforting phrases",
    "Clear action words",
    "Reassuring language about privacy and safety",
    "Cultural references where appropriate",
  ],
};
