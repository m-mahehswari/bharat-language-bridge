import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PermissionCard } from "@/components/PermissionCard";
import { onboarding, privacy } from "@/data/copy";
import { Shield, Lock } from "lucide-react";

interface PermissionsScreenProps {
  permissions: {
    accessibility: boolean;
    overlay: boolean;
    microphone: boolean;
  };
  onGrantPermission: (type: "accessibility" | "overlay" | "microphone") => void;
  onContinue: () => void;
  onSkip?: () => void;
}

export const PermissionsScreen = ({
  permissions,
  onGrantPermission,
  onContinue,
  onSkip,
}: PermissionsScreenProps) => {
  const content = onboarding.permissions;
  const requiredGranted = permissions.accessibility && permissions.overlay;

  return (
    <div className="min-h-screen bg-gradient-sunset flex flex-col">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 text-center">
        <motion.div
          className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          <Shield className="w-8 h-8 text-trust" />
        </motion.div>
        <h1 className="text-2xl font-bold text-foreground mb-1">
          {content.headline}
        </h1>
        <p className="text-primary font-semibold mb-2">
          {content.subheadline}
        </p>
        <p className="text-muted-foreground">
          {content.description}
        </p>
      </div>

      {/* Permission cards */}
      <div className="flex-1 px-6 py-4 space-y-4">
        <PermissionCard
          type="accessibility"
          isGranted={permissions.accessibility}
          onGrant={() => onGrantPermission("accessibility")}
        />
        <PermissionCard
          type="overlay"
          isGranted={permissions.overlay}
          onGrant={() => onGrantPermission("overlay")}
        />
        <PermissionCard
          type="microphone"
          isGranted={permissions.microphone}
          onGrant={() => onGrantPermission("microphone")}
          optional
          onSkip={() => {}}
        />

        {/* Privacy notice */}
        <motion.div
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {privacy.shortStatement}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {privacy.trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs bg-trust/10 text-trust px-2 py-1 rounded-full font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom actions */}
      <div className="px-6 pb-8 pt-4 space-y-3">
        <Button
          variant="warm"
          size="xl"
          className="w-full"
          onClick={onContinue}
          disabled={!requiredGranted}
        >
          {requiredGranted ? "Continue" : "Please enable required permissions"}
        </Button>
        {onSkip && (
          <Button
            variant="ghost"
            size="lg"
            className="w-full text-muted-foreground"
            onClick={onSkip}
          >
            {content.skipText}
          </Button>
        )}
      </div>
    </div>
  );
};
