"use client"

import { useState, useEffect } from "react"
import { getEventText } from "../data/event.data";
import { useTranslation } from "../i18n/TranslationContext";
import en from "../locales/en";
import fr from "../locales/fr";
import Link from "next/link";
import Image from "next/image";
import MLH_Logo_White from "@/public/mlh-trust-badge-white.svg";

export default function ComingSoonPage() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const { language } = useTranslation();

  // Get the current translation object based on language
  const currentTranslations = language === 'en' ? en : fr;

  // Get translated content
  const eventTranslations = getEventText(currentTranslations);

  useEffect(() => {
    // Launch party date: Friday, November 7 at 5:00 PM Montréal time
    const launchDate = new Date("2025-11-07T17:00:00");
    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        window.location.reload()
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-5xl text-center space-y-8">
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-white">
          <span className="text-yellow-400">{eventTranslations.title}</span> - {eventTranslations.subtitle} ⭐️
        </h1>

        <p className="text-sm lg:text-lg text-gray-300 max-w-3xl mx-auto mb-0">
          {eventTranslations.description}
        </p>

        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto my-4">
          {Object.entries(countdown).map(([unit, value]) => (
            <div key={unit} className="
              p-4 flex flex-col items-center justify-center
            ">
              <span className="text-5xl md:text-7xl font-bold text-yellow-400">{value < 10 ? `0${value}` : value}</span>
              <span className="text-lg text-gray-400 capitalize">
                {eventTranslations.time[unit as keyof typeof eventTranslations.time]}
              </span>
            </div>
          ))}
        </div>

        <a href="https://luma.com/event/evt-PEgQABsw5M8OQ2C?utm_source=conuhacksio"
          target="_blank"
          rel="noopener noreferrer" className="text-sm lg:text-base inline-block px-6 py-3 text-white bg-yellow-500 rounded hover:bg-yellow-600">
          {eventTranslations.buttonText}
        </a>
      </div>
      <Link href={"https://mlh.io/"} target="_blank">
            <Image
              src={MLH_Logo_White}
              alt={"MLH Badge"}
              className="absolute w-[55px] right-2 md:w-[55px] xl:w-[70px] lg:right-18 top-0"
            />
          </Link>
    </div>
  )
}
