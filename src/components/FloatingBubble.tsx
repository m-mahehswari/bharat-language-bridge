import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { floatingBubble } from "@/data/copy";
import { Languages, X, Copy, Volume2, GripVertical, Loader2 } from "lucide-react";

interface FloatingBubbleProps {
  isActive: boolean;
  translatedText?: string;
  isLoading?: boolean;
  onCopy?: () => void;
  onSpeak?: () => void;
}

export const FloatingBubble = ({
  isActive,
  translatedText,
  isLoading = false,
  onCopy,
  onSpeak,
}: FloatingBubbleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-50">
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            <Card variant="elevated" className="w-72 shadow-bubble">
              {/* Header */}
              <div className="flex items-center justify-between p-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Languages className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">
                    {floatingBubble.expanded.title}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setIsExpanded(false)}
                  className="h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-4">
                {isLoading ? (
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{floatingBubble.expanded.loadingMessage}</span>
                  </div>
                ) : translatedText ? (
                  <p className="text-foreground text-lg leading-relaxed">
                    {translatedText}
                  </p>
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    {floatingBubble.expanded.noTextMessage}
                  </p>
                )}
              </div>

              {/* Actions */}
              {translatedText && (
                <div className="flex items-center gap-2 px-4 pb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={onCopy}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {floatingBubble.expanded.copyButton}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={onSpeak}
                  >
                    <Volume2 className="w-4 h-4 mr-2" />
                    {floatingBubble.expanded.speakButton}
                  </Button>
                </div>
              )}

              {/* Drag hint */}
              <div className="flex items-center justify-center gap-1 py-2 border-t border-border text-xs text-muted-foreground">
                <GripVertical className="w-3 h-3" />
                <span>{floatingBubble.expanded.dragHint}</span>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className={`relative w-16 h-16 rounded-full shadow-bubble flex items-center justify-center transition-all ${
              isActive
                ? "bg-gradient-warm shadow-glow"
                : "bg-muted"
            }`}
          >
            <Languages className={`w-7 h-7 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
            
            {/* Active indicator */}
            {isActive && (
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* Tooltip */}
            <motion.div
              className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0"
              whileHover={{ opacity: 1 }}
            >
              {floatingBubble.collapsed.hint}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
