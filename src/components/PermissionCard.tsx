import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Eye, Layers, Mic, AlertCircle } from "lucide-react";

interface PermissionCardProps {
  type: "accessibility" | "overlay" | "microphone";
  isGranted: boolean;
  onGrant: () => void;
  optional?: boolean;
  onSkip?: () => void;
}

const permissionData = {
  accessibility: {
    icon: Eye,
    title: "Screen Reading Permission",
    description: "This lets Bhasha Setu read the text shown on your screen from other apps. We only read text to translate it — nothing else.",
    button: "Enable Screen Reading",
    color: "primary" as const,
  },
  overlay: {
    icon: Layers,
    title: "Show Translation Bubble",
    description: "This allows the translation bubble to float on top of other apps, so you can see translations without switching apps.",
    button: "Enable Bubble Display",
    color: "trust" as const,
  },
  microphone: {
    icon: Mic,
    title: "Voice Input (Optional)",
    description: "If you want to speak instead of typing, we need microphone access. This is completely optional.",
    button: "Enable Voice Input",
    color: "secondary" as const,
  },
};

export const PermissionCard = ({
  type,
  isGranted,
  onGrant,
  optional = false,
  onSkip,
}: PermissionCardProps) => {
  const data = permissionData[type];
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        variant={isGranted ? "elevated" : "outlined"}
        className={`p-5 transition-all ${
          isGranted ? "border-2 border-success" : ""
        }`}
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              isGranted
                ? "bg-success"
                : data.color === "primary"
                ? "bg-primary/10"
                : data.color === "trust"
                ? "bg-trust/10"
                : "bg-secondary/10"
            }`}
          >
            {isGranted ? (
              <Check className="w-7 h-7 text-success-foreground" />
            ) : (
              <Icon
                className={`w-7 h-7 ${
                  data.color === "primary"
                    ? "text-primary"
                    : data.color === "trust"
                    ? "text-trust"
                    : "text-secondary"
                }`}
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-foreground text-lg">
                {data.title}
              </h3>
              {optional && (
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                  Optional
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {data.description}
            </p>

            {/* Actions */}
            {isGranted ? (
              <div className="flex items-center gap-2 text-success">
                <Check className="w-5 h-5" />
                <span className="font-semibold">Enabled</span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={data.color === "primary" ? "default" : data.color === "trust" ? "trust" : "secondary"}
                  size="sm"
                  onClick={onGrant}
                >
                  {data.button}
                </Button>
                {optional && onSkip && (
                  <Button variant="ghost" size="sm" onClick={onSkip}>
                    Skip for now
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
