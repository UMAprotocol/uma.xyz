import { DateTime, Duration } from "luxon";

// For Timer feature.
// Countdown from UTC 00:00:00.

export function calculateDifferenceFromUTCMidnight() {
  const utc = DateTime.local().toUTC().endOf("day").toMillis();
  const difference = utc - DateTime.local().toMillis();

  return difference;
}
export function formatDateTimeFromUTC() {
  const difference = calculateDifferenceFromUTCMidnight();

  let text = "00:00";
  // format difference
  if (difference > 0) text = Duration.fromMillis(difference).toFormat("hh'h' mm'm' ss's'");

  return text;
}
