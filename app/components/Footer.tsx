"use client";

import { getCopyrightText } from '../data/footer.data';
import { socialLinks } from '../data/header.data';
import { useTranslation } from '../i18n/TranslationContext';
import { Language } from '../i18n/type';
import en from "../locales/en";
import fr from "../locales/fr";

export default function Footer() {
    const { setLanguage, language } = useTranslation();

    // Get the footer links and copyright text based on current language
    const currentTranslations = language === 'en' ? en : fr;
    const copyrightText = getCopyrightText(2026, currentTranslations);

    return (
        <footer className="fixed bottom-0 w-full text-white backdrop-blur-xs py-4 px-6 z-40">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-4">

                {/* Left: Copyright */}
                <div className="text-sm text-gray-400">
                    {copyrightText}
                </div>

                {/* Right: Links */}
                {/* Social Icons */}
                <div className="flex space-x-2 md:space-x-4 items-center">

                    {socialLinks.map(({ href, icon: Icon }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400"
                        >
                            <Icon size={18} />
                        </a>
                    ))}

                    {/* Language Switcher */}
                    <div>
                        {
                            language === Language.en ?
                                <button
                                    onClick={() => setLanguage(Language.fr)}
                                    className="hover:text-yellow-400 text-lg font-medium transition-colors"
                                    style={{ cursor: "pointer" }}
                                >
                                    FR
                                </button> :
                                <button
                                    onClick={() => setLanguage(Language.en)}
                                    className="hover:text-yellow-400 text-lg font-medium transition-colors"
                                    style={{ cursor: "pointer" }}
                                >
                                    EN
                                </button>
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
}
