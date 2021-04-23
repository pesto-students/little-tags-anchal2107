// To Convert second to date
export function toDateTime(secs) {
  let time = new Date(1970, 0, 1);
  time.setSeconds(secs);
  const date = time.toDateString();
  return date;
}
