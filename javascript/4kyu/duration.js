// Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(seconds) {
  if (seconds === 0) return "now";
  
  const times = {
    years: {
      singular: "year",
      seconds: 31536000,
    },
    days: {
      singular: "day",
      seconds: 86400,
    },
    hours: {
      singular: "hour",
      seconds: 3600,
    },
    minutes: {
      singular: "minute",
      seconds: 60,
    },
    seconds: {
      singular: "second",
      seconds: 1,
    },
  };
  const segments = [];

  for (const plural in times) {
    const { singular, seconds: timeSeconds } = times[plural];

    if (seconds < timeSeconds) continue;
    if (seconds === 0) break;

    const value = Math.floor(seconds / timeSeconds);

    if (value == 1) segments.push(`${value} ${singular}`);
    else segments.push(`${value} ${plural}`);

    seconds -= value * timeSeconds;
  }

  return segments.reduce((acc, curr, index) => {
    if (!acc) return curr;
    if (index === segments.length - 1) return `${acc} and ${curr}`;
    return `${acc}, ${curr}`;
  }, "");
}

console.log("here", formatDuration(3662));
