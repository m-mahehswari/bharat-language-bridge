import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { errors } from "@/data/copy";
import { WifiOff, AlertCircle, FileQuestion, Clock, Settings } from "lucide-react";

type ErrorType = "noInternet" | "slowInternet" | "apiError" | "noText" | "permissionDenied";

interface ErrorMessageProps {
  type: ErrorType;
  onAction: () => void;
  variant?: "card" | "inline" | "toast";
}

const icons = {
  noInternet: WifiOff,
  slowInternet: Clock,
  apiError: AlertCircle,
  noText: FileQuestion,
  permissionDenied: Settings,
};

const colors = {
  noInternet: "destructive",
  slowInternet: "warning",
  apiError: "destructive",
  noText: "muted",
  permissionDenied: "trust",
} as const;

export const ErrorMessage = ({
  type,
  onAction,
  variant = "card",
}: ErrorMessageProps) => {
  const error = errors[type];
  const Icon = icons[type];
  const color = colors[type];

  // Pick a random message for variety
  const message = error.messages[Math.floor(Math.random() * error.messages.length)];

  if (variant === "inline") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex items-center gap-3 p-3 rounded-xl ${
          color === "destructive"
            ? "bg-destructive/10 text-destructive"
            : color === "warning"
            ? "bg-warning/10 text-warning"
            : color === "trust"
            ? "bg-trust/10 text-trust"
            : "bg-muted text-muted-foreground"
        }`}
      >
        <Icon className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm flex-1">{message}</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={onAction}
          className="text-current hover:bg-current/10"
        >
          {error.action}
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 flex items-center justify-center p-6 bg-foreground/20 backdrop-blur-sm z-50"
    >
      <Card variant="elevated" className="w-full max-w-sm p-6 text-center">
        <motion.div
          className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
            color === "destructive"
              ? "bg-destructive/10"
              : color === "warning"
              ? "bg-warning/10"
              : color === "trust"
              ? "bg-trust/10"
              : "bg-muted"
          }`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
        >
          <Icon
            className={`w-8 h-8 ${
              color === "destructive"
                ? "text-destructive"
                : color === "warning"
                ? "text-warning"
                : color === "trust"
                ? "text-trust"
                : "text-muted-foreground"
            }`}
          />
        </motion.div>

        <h3 className="text-xl font-bold text-foreground mb-2">
          {error.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {message}
        </p>

        <Button
          variant={
            color === "destructive"
              ? "destructive"
              : color === "warning"
              ? "default"
              : color === "trust"
              ? "trust"
              : "default"
          }
          size="lg"
          className="w-full"
          onClick={onAction}
        >
          {error.action}
        </Button>
      </Card>
    </motion.div>
  );
};
