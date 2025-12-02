export interface Language {
  code: string;
  name: string;
  nativeName: string;
  script: string;
}

export interface TranslationState {
  isActive: boolean;
  isPaused: boolean;
  sourceText: string;
  translatedText: string;
  targetLanguage: Language;
}

export interface Permission {
  id: string;
  title: string;
  description: string;
  isGranted: boolean;
  icon: string;
}

export type OnboardingStep = 'welcome' | 'languages' | 'permissions' | 'ready';

export interface AppState {
  isOnboarded: boolean;
  selectedLanguage: Language | null;
  permissions: {
    accessibility: boolean;
    overlay: boolean;
    microphone: boolean;
  };
  translation: TranslationState;
}
