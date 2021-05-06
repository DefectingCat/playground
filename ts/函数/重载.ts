type Reserve = {
  (from: Date, to: Date, destination: string): string;
  (from: Date, destination: string): string;
};

const reserve: Reserve = (
  from: Date,
  toOrDest: Date | string,
  destination?: string
) => {
  const cost = Math.floor(Math.random() * (998 - 199) + 198);
  if (toOrDest instanceof Date && destination !== undefined) {
    return `To ${destination} need ${cost} ${from.toLocaleString()} ${toOrDest.toLocaleString()}`;
  } else {
    return `To ${toOrDest} need ${cost} ${from.toLocaleString()}`;
  }
};
console.log(reserve(new Date(), new Date(), 'bali'));
console.log(reserve(new Date(), 'bali'));
