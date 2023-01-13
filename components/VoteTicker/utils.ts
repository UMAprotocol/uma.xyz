function getMillisecondsUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return midnight.getTime() - now.getTime();
}

export function formatMillisecondsUntilMidnight() {
  const milliseconds = getMillisecondsUntilMidnight();
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return `${hours}:${minutes % 60}:${seconds % 60}`;
}
