import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Language } from "@/types/app";
import { homeScreen, appInfo, privacy } from "@/data/copy";
import { 
  Play, 
  Pause, 
  Square, 
  Languages, 
  Settings, 
  HelpCircle,
  Globe,
  Shield,
  ChevronRight
} from "lucide-react";

interface HomeScreenProps {
  isActive: boolean;
  isPaused: boolean;
  selectedLanguage: Language;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onChangeLanguage: () => void;
  onOpenSettings: () => void;
}

export const HomeScreen = ({
  isActive,
  isPaused,
  selectedLanguage,
  onStart,
  onPause,
  onResume,
  onStop,
  onChangeLanguage,
  onOpenSettings,
}: HomeScreenProps) => {
  const state = !isActive ? "off" : isPaused ? "paused" : "active";
  const content = homeScreen[state];

  return (
    <div className="min-h-screen bg-gradient-sunset">
      {/* Header */}
      <header className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-warm-md">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{appInfo.name}</h1>
              <p className="text-sm text-muted-foreground">{appInfo.tagline}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onOpenSettings}>
            <Settings className="w-6 h-6" />
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="px-6 py-4 space-y-6">
        {/* Status card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card
            variant="elevated"
            className={`p-6 text-center ${
              state === "active" ? "ring-2 ring-success/30" : ""
            }`}
          >
            {/* Status indicator */}
            <motion.div
              className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
                state === "active"
                  ? "bg-success/10"
                  : state === "paused"
                  ? "bg-warning/10"
                  : "bg-muted"
              }`}
              animate={state === "active" ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  state === "active"
                    ? "bg-success"
                    : state === "paused"
                    ? "bg-warning"
                    : "bg-muted-foreground/30"
                }`}
              >
                {state === "active" ? (
                  <Languages className="w-8 h-8 text-success-foreground" />
                ) : state === "paused" ? (
                  <Pause className="w-8 h-8 text-warning-foreground" />
                ) : (
                  <Square className="w-8 h-8 text-muted" />
                )}
              </div>
            </motion.div>

            {/* Status badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                state === "active"
                  ? "bg-success/10 text-success"
                  : state === "paused"
                  ? "bg-warning/10 text-warning"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {content.statusBadge}
            </span>

            <h2 className="text-2xl font-bold text-foreground mb-1">
              {content.headline}
            </h2>
            <p className="text-primary font-semibold mb-2">
              {content.subheadline}
            </p>
            <p className="text-muted-foreground mb-6">
              {content.description}
            </p>

            {/* Control buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {state === "off" && (
                <Button variant="warm" size="lg" onClick={onStart}>
                  <Play className="w-5 h-5 mr-2" />
                  {homeScreen.buttons.start}
                </Button>
              )}
              {state === "active" && (
                <>
                  <Button variant="warning" size="lg" onClick={onPause}>
                    <Pause className="w-5 h-5 mr-2" />
                    {homeScreen.buttons.pause}
                  </Button>
                  <Button variant="outline" size="lg" onClick={onStop}>
                    <Square className="w-5 h-5 mr-2" />
                    {homeScreen.buttons.stop}
                  </Button>
                </>
              )}
              {state === "paused" && (
                <>
                  <Button variant="success" size="lg" onClick={onResume}>
                    <Play className="w-5 h-5 mr-2" />
                    {homeScreen.buttons.resume}
                  </Button>
                  <Button variant="outline" size="lg" onClick={onStop}>
                    <Square className="w-5 h-5 mr-2" />
                    {homeScreen.buttons.stop}
                  </Button>
                </>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Current language */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card
            variant="outlined"
            className="p-4 cursor-pointer hover:shadow-warm-md transition-all"
            onClick={onChangeLanguage}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {selectedLanguage.nativeName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Translating to</p>
                  <p className="font-semibold text-foreground">
                    {selectedLanguage.nativeName} ({selectedLanguage.name})
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </motion.div>

        {/* Quick actions */}
        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card
            variant="outlined"
            className="p-4 cursor-pointer hover:shadow-warm-md transition-all"
            onClick={onChangeLanguage}
          >
            <Languages className="w-6 h-6 text-primary mb-2" />
            <p className="font-semibold text-foreground text-sm">
              {homeScreen.quickActions.changeLanguage}
            </p>
          </Card>
          <Card
            variant="outlined"
            className="p-4 cursor-pointer hover:shadow-warm-md transition-all"
          >
            <HelpCircle className="w-6 h-6 text-accent mb-2" />
            <p className="font-semibold text-foreground text-sm">
              {homeScreen.quickActions.help}
            </p>
          </Card>
        </motion.div>

        {/* Privacy reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card variant="glass" className="p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">
                  {privacy.dataNotice}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {privacy.trustBadges.slice(0, 2).map((badge) => (
                    <span
                      key={badge}
                      className="text-xs bg-trust/10 text-trust px-2 py-0.5 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};
