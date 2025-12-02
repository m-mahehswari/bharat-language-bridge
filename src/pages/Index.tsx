import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OnboardingScreen } from "@/components/OnboardingScreen";
import { LanguageSelector } from "@/components/LanguageSelector";
import { PermissionsScreen } from "@/components/PermissionsScreen";
import { HomeScreen } from "@/components/HomeScreen";
import { FloatingBubble } from "@/components/FloatingBubble";
import { OnboardingStep, Language } from "@/types/app";
import { popularLanguages } from "@/data/languages";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<OnboardingStep | "home" | "language-change">("welcome");
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [permissions, setPermissions] = useState({
    accessibility: false,
    overlay: false,
    microphone: false,
  });
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Demo translation text
  const [translatedText, setTranslatedText] = useState<string>("");
  const [isTranslating, setIsTranslating] = useState(false);

  const handleOnboardingNext = () => {
    switch (currentStep) {
      case "welcome":
        setCurrentStep("languages");
        break;
      case "languages":
        if (selectedLanguage) {
          setCurrentStep("permissions");
        }
        break;
      case "permissions":
        setCurrentStep("ready");
        break;
      case "ready":
        setCurrentStep("home");
        setIsActive(true);
        toast({
          title: "🎉 Bhasha Setu is ready!",
          description: `Now translating to ${selectedLanguage?.nativeName}`,
        });
        break;
    }
  };

  const handleSkip = () => {
    setCurrentStep("home");
  };

  const handleGrantPermission = (type: "accessibility" | "overlay" | "microphone") => {
    // Simulate permission granting
    setTimeout(() => {
      setPermissions((prev) => ({ ...prev, [type]: true }));
      toast({
        title: "Permission granted ✓",
        description: `${type.charAt(0).toUpperCase() + type.slice(1)} access enabled`,
      });
    }, 500);
  };

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
  };

  const handleLanguageSave = () => {
    if (currentStep === "languages") {
      handleOnboardingNext();
    } else if (currentStep === "language-change") {
      setCurrentStep("home");
      toast({
        title: "Language updated",
        description: `Now translating to ${selectedLanguage?.nativeName}`,
      });
    }
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    // Demo translation
    setIsTranslating(true);
    setTimeout(() => {
      if (selectedLanguage?.code === "hi") {
        setTranslatedText("यह एक उदाहरण अनुवाद है। आपका ऐप अब हिंदी में चलेगा!");
      } else if (selectedLanguage?.code === "kn") {
        setTranslatedText("ಇದು ಉದಾಹರಣೆ ಅನುವಾದ. ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್ ಈಗ ಕನ್ನಡದಲ್ಲಿ!");
      } else if (selectedLanguage?.code === "ta") {
        setTranslatedText("இது ஒரு எடுத்துக்காட்டு மொழிபெயர்ப்பு. உங்கள் பயன்பாடு இப்போது தமிழில்!");
      } else {
        setTranslatedText("This is a sample translation. Your app is now in your language!");
      }
      setIsTranslating(false);
    }, 1500);
    toast({
      title: "Translation started",
      description: "Open any app to see translations",
    });
  };

  const handlePause = () => {
    setIsPaused(true);
    toast({
      title: "Translation paused",
      description: "Tap resume to continue",
    });
  };

  const handleResume = () => {
    setIsPaused(false);
    toast({
      title: "Translation resumed",
    });
  };

  const handleStop = () => {
    setIsActive(false);
    setIsPaused(false);
    setTranslatedText("");
    toast({
      title: "Translation stopped",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    toast({
      title: "Copied to clipboard",
    });
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window && translatedText) {
      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.lang = selectedLanguage?.code || "en";
      speechSynthesis.speak(utterance);
    }
  };

  // Set default language
  useEffect(() => {
    if (!selectedLanguage) {
      setSelectedLanguage(popularLanguages[0]); // Hindi as default
    }
  }, [selectedLanguage]);

  return (
    <div className="min-h-screen max-w-md mx-auto bg-gradient-sunset relative overflow-hidden">
      {/* Mobile frame simulation */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-foreground/5 flex items-center justify-center">
        <div className="w-20 h-1 bg-foreground/20 rounded-full" />
      </div>

      <AnimatePresence mode="wait">
        {currentStep === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <OnboardingScreen
              step="welcome"
              onNext={handleOnboardingNext}
              onSkip={handleSkip}
            />
          </motion.div>
        )}

        {currentStep === "languages" && (
          <motion.div
            key="languages"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onSelect={handleLanguageSelect}
              onSave={handleLanguageSave}
            />
          </motion.div>
        )}

        {currentStep === "permissions" && (
          <motion.div
            key="permissions"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <PermissionsScreen
              permissions={permissions}
              onGrantPermission={handleGrantPermission}
              onContinue={handleOnboardingNext}
              onSkip={handleSkip}
            />
          </motion.div>
        )}

        {currentStep === "ready" && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <OnboardingScreen
              step="ready"
              onNext={handleOnboardingNext}
            />
          </motion.div>
        )}

        {currentStep === "home" && selectedLanguage && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HomeScreen
              isActive={isActive}
              isPaused={isPaused}
              selectedLanguage={selectedLanguage}
              onStart={handleStart}
              onPause={handlePause}
              onResume={handleResume}
              onStop={handleStop}
              onChangeLanguage={() => setCurrentStep("language-change")}
              onOpenSettings={() => {
                toast({
                  title: "Settings",
                  description: "Settings page coming soon!",
                });
              }}
            />
          </motion.div>
        )}

        {currentStep === "language-change" && (
          <motion.div
            key="language-change"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onSelect={handleLanguageSelect}
              onSave={handleLanguageSave}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating bubble - only show on home screen when active */}
      {currentStep === "home" && isActive && (
        <FloatingBubble
          isActive={!isPaused}
          translatedText={translatedText}
          isLoading={isTranslating}
          onCopy={handleCopy}
          onSpeak={handleSpeak}
        />
      )}
    </div>
  );
};

export default Index;
