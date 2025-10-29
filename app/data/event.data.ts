import { TranslationObject } from './translationObject.data';


// Helper function to get form text from translation context
export const getEventText = (t: TranslationObject) => ({
    title: t.event.title,
    subtitle: t.event.subtitle,
    description: t.event.description,
    time: {
        days: t.time.days,
        hours: t.time.hours,
        minutes: t.time.minutes,
        seconds: t.time.seconds,
    },
    buttonText: t.event.buttonText,
});