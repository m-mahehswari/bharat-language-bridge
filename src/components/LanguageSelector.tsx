import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Language } from "@/types/app";
import { indianLanguages, popularLanguages } from "@/data/languages";
import { languageSelection } from "@/data/copy";
import { Search, Check, ChevronDown, ChevronUp } from "lucide-react";

interface LanguageSelectorProps {
  selectedLanguage: Language | null;
  onSelect: (language: Language) => void;
  onSave?: () => void;
  compact?: boolean;
}

export const LanguageSelector = ({
  selectedLanguage,
  onSelect,
  onSave,
  compact = false,
}: LanguageSelectorProps) => {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredLanguages = indianLanguages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(search.toLowerCase()) ||
      lang.nativeName.includes(search)
  );

  const displayLanguages = showAll ? filteredLanguages : popularLanguages;

  return (
    <div className={compact ? "" : "min-h-screen bg-gradient-sunset flex flex-col"}>
      {!compact && (
        <div className="px-6 pt-8 pb-4 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-1">
            {languageSelection.heading}
          </h1>
          <p className="text-primary font-semibold mb-2">
            {languageSelection.subheading}
          </p>
          <p className="text-muted-foreground">
            {languageSelection.description}
          </p>
        </div>
      )}

      <div className={compact ? "" : "flex-1 px-6"}>
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search languages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12 h-12 rounded-xl border-2 border-border bg-card"
          />
        </div>

        {/* Popular label */}
        {!search && !showAll && (
          <p className="text-sm font-semibold text-muted-foreground mb-3">
            Popular Languages
          </p>
        )}

        {/* Language grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <AnimatePresence mode="popLayout">
            {displayLanguages.map((lang) => (
              <motion.div
                key={lang.code}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  variant={selectedLanguage?.code === lang.code ? "elevated" : "outlined"}
                  className={`p-4 cursor-pointer transition-all hover:shadow-warm-md ${
                    selectedLanguage?.code === lang.code
                      ? "border-2 border-primary ring-2 ring-primary/20"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => onSelect(lang)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground mb-1">
                        {lang.nativeName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {lang.name}
                      </p>
                    </div>
                    {selectedLanguage?.code === lang.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                      >
                        <Check className="w-5 h-5 text-primary-foreground" />
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more/less */}
        {!search && (
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Show all {indianLanguages.length} languages
              </>
            )}
          </Button>
        )}
      </div>

      {/* Save button */}
      {!compact && onSave && (
        <div className="px-6 pb-8 pt-4">
          <Button
            variant="warm"
            size="xl"
            className="w-full"
            onClick={onSave}
            disabled={!selectedLanguage}
          >
            {languageSelection.saveButton}
          </Button>
        </div>
      )}
    </div>
  );
};
