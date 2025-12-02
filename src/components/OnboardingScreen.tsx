import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { OnboardingStep } from "@/types/app";
import { onboarding } from "@/data/copy";
import { Globe, Languages, Shield, Sparkles, Heart, Check } from "lucide-react";

interface OnboardingScreenProps {
  step: OnboardingStep;
  onNext: () => void;
  onSkip?: () => void;
}

const stepIcons = {
  welcome: Globe,
  languages: Languages,
  permissions: Shield,
  ready: Sparkles,
};

const illustrations = {
  welcome: (
    <div className="relative w-48 h-48 mx-auto mb-8">
      <motion.div
        className="absolute inset-0 bg-primary/20 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-4 bg-primary/30 rounded-full"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
      />
      <div className="absolute inset-8 bg-gradient-warm rounded-full flex items-center justify-center shadow-glow">
        <span className="text-6xl">🙏</span>
      </div>
      <motion.div
        className="absolute -top-2 -right-2 bg-success rounded-full p-2 shadow-warm-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Heart className="w-5 h-5 text-success-foreground" />
      </motion.div>
    </div>
  ),
  languages: (
    <div className="relative w-48 h-48 mx-auto mb-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="grid grid-cols-3 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {["हिं", "ಕ", "த", "తె", "മ", "मरा", "বাং", "ગુ", "ਪੰ"].map((char, i) => (
            <motion.div
              key={char}
              className="w-12 h-12 bg-card rounded-xl shadow-warm-sm flex items-center justify-center text-xl font-bold text-primary"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  ),
  permissions: (
    <div className="relative w-48 h-48 mx-auto mb-8">
      <motion.div
        className="absolute inset-0 bg-trust/10 rounded-full"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="absolute inset-8 bg-gradient-trust rounded-full flex items-center justify-center shadow-warm-lg">
        <Shield className="w-16 h-16 text-trust-foreground" />
      </div>
      <motion.div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-card rounded-full px-4 py-2 shadow-warm-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-sm font-semibold text-trust">100% Safe</span>
      </motion.div>
    </div>
  ),
  ready: (
    <div className="relative w-48 h-48 mx-auto mb-8">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{
              top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
              left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </motion.div>
      <div className="absolute inset-8 bg-gradient-warm rounded-full flex items-center justify-center shadow-glow">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <Check className="w-16 h-16 text-primary-foreground stroke-[3]" />
        </motion.div>
      </div>
    </div>
  ),
};

export const OnboardingScreen = ({ step, onNext, onSkip }: OnboardingScreenProps) => {
  const content = onboarding[step];
  const Icon = stepIcons[step];

  return (
    <div className="min-h-screen bg-gradient-sunset flex flex-col">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 pt-8 pb-4">
        {(["welcome", "languages", "permissions", "ready"] as OnboardingStep[]).map((s, i) => (
          <motion.div
            key={s}
            className={`h-2 rounded-full transition-all ${
              s === step ? "w-8 bg-primary" : "w-2 bg-primary/30"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="text-center max-w-md"
        >
          {/* Illustration */}
          {illustrations[step]}

          {/* Headline */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {content.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {content.subheadline}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {content.description}
          </motion.p>

          {/* Tip for ready screen */}
          {step === "ready" && "tip" in content && (
            <motion.div
              className="bg-primary/10 rounded-2xl p-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-primary font-medium">{content.tip}</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom actions */}
      <div className="px-6 pb-8 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant="warm"
            size="xl"
            className="w-full"
            onClick={onNext}
          >
            {content.cta}
          </Button>
        </motion.div>

        {"skipText" in content && onSkip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="ghost"
              size="lg"
              className="w-full text-muted-foreground"
              onClick={onSkip}
            >
              {content.skipText}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
