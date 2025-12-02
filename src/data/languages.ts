import { Language } from "@/types/app";

export const indianLanguages: Language[] = [
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", script: "Devanagari" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", script: "Kannada" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", script: "Tamil" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", script: "Telugu" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", script: "Malayalam" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", script: "Devanagari" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", script: "Bengali" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", script: "Gujarati" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", script: "Gurmukhi" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", script: "Odia" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া", script: "Bengali" },
  { code: "ur", name: "Urdu", nativeName: "اردو", script: "Perso-Arabic" },
  { code: "sd", name: "Sindhi", nativeName: "سنڌي", script: "Arabic" },
  { code: "ks", name: "Kashmiri", nativeName: "कॉशुर", script: "Perso-Arabic" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली", script: "Devanagari" },
  { code: "sa", name: "Sanskrit", nativeName: "संस्कृतम्", script: "Devanagari" },
  { code: "kok", name: "Konkani", nativeName: "कोंकणी", script: "Devanagari" },
  { code: "mai", name: "Maithili", nativeName: "मैथिली", script: "Devanagari" },
  { code: "doi", name: "Dogri", nativeName: "डोगरी", script: "Devanagari" },
  { code: "bho", name: "Bhojpuri", nativeName: "भोजपुरी", script: "Devanagari" },
  { code: "sat", name: "Santali", nativeName: "ᱥᱟᱱᱛᱟᱲᱤ", script: "Ol Chiki" },
  { code: "mni", name: "Manipuri", nativeName: "মৈতৈলোন্", script: "Meetei Mayek" },
];

export const popularLanguages = indianLanguages.slice(0, 8);
