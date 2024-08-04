import { type ClassValue, clsx } from 'clsx';
import gsap from 'gsap';
import { type DateTime } from 'luxon';
import { unique } from 'remeda';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const HTML_SPACE = '\u00A0';

export const DATE_TIME_IN_UTC = "yyyy.MM.dd, HH:mm '(UTC)'";
export const FULL_DATE_TIME = 'HH:mm:ss, dd/MM/yyyy';
export const UTC_TIME_HUMANIZE = "HH:mm '(UTC)' LLLL dd yyyy";

export async function sleep(time: number) {
  return await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export const formatTime = (time: DateTime | undefined, format = DATE_TIME_IN_UTC) => {
  return time?.toFormat(format) ?? 'N/A';
};

export const intervalToDuration = ({ start, end }: { start: number; end: number }) => {
  if (!start || !end || start > end) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const duration = end - start;

  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export const getTimeDifference = (timestamp: number) => {
  const currentTimestamp = new Date().getTime();
  const end = timestamp < currentTimestamp ? currentTimestamp : timestamp;
  const durations = intervalToDuration({ start: currentTimestamp, end });

  return {
    days: durations.days || 0,
    hours: durations.hours || 0,
    minutes: durations.minutes || 0,
    seconds: durations.seconds || 0,
  };
};

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function truncateText(text: string, maxLength = 8) {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

export function splitTextToArray(text: string, separator = /[\n,;]+/) {
  return unique(text.split(separator).filter((address) => address));
}

export const animateElementAppend = (elementOrSelector: string | Element) => {
  let elements: Element | NodeListOf<Element>;

  try {
    if (typeof elementOrSelector === 'string') {
      elements = document.querySelectorAll(elementOrSelector);
      if (elements.length === 0) return;
    } else {
      elements = elementOrSelector;
    }

    const tl = gsap.timeline({ defaults: { duration: 0.1 } });

    tl.to(elements, {
      x: '-40px',
      backgroundColor: '#9b59b6',
      opacity: 0.5,
    })
      .to(elements, {
        x: '40px',
        backgroundColor: '#2ecc71',
        opacity: 1,
      })
      .to(elements, {
        x: '-10px',
        backgroundColor: '#f1c40f',
        opacity: 0.5,
      })
      .to(elements, {
        x: '10px',
        backgroundColor: '#3498db',
        opacity: 1,
      })
      .to(elements, {
        x: '0',
        backgroundColor: 'transparent',
        opacity: 1,
      });

    return tl;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('ANIMATE_ELEMENT_APPEND_FAILED', e, { elementOrSelector });
  }
};
