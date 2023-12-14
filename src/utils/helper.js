export function convertToHumanReadable(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(labelValue));
}

export function convertDurationToTimestamp(duration) {
  // Extract the minutes and seconds from the duration string
  const match = duration.match(/PT(\d+M)?(\d+S)?/);

  if (!match) {
    // Invalid duration format
    return "Invalid Duration";
  }

  const minutes = match[1] ? parseInt(match[1], 10) : 0;
  const seconds = match[2] ? parseInt(match[2], 10) : 0;

  // Format the timestamp
  const formattedTimestamp = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  return formattedTimestamp;
}
export function convertToInternationalCurrencySystem(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(labelValue));
}
// Example usage

export const commentsList = [
  {
    name: "John Doe",
    comment: " lorem ipsum dolor sit amet",
    replies: [
      {
        name: "John Doe",
        comment: " lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "John Doe",
        comment: " lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "John Doe",
        comment: " lorem ipsum dolor sit amet",
        replies: [
          {
            name: "John Doe",
            comment: " lorem ipsum dolor sit amet",
            replies: [],
          },
          {
            name: "John Doe",
            comment: " lorem ipsum dolor sit amet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "John Doe",
    comment: " lorem ipsum dolor sit amet",
    replies: [
      {
        name: "John Doe",
        comment: " lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "John Doe",
        comment: " lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "John Doe",
    comment: " lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "John Doe",
    comment: " lorem ipsum dolor sit amet",
    replies: [
      {
        name: "John Doe",
        comment: " lorem ipsum dolor sit amet",
        replies: [],
      },
    ],
  },
  {
    name: "John Doe",
    comment: " lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "John Doe",
    comment: " lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "John Doe",
    comment: " lorem ipsum dolor sit amet",
    replies: [
      {
        name: "John Doe",
        comment: " lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "John Doe",
        comment: " lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "John Doe",
        comment: " lorem ipsum dolor sit amet",
        replies: [
          {
            name: "John Doe",
            comment: " lorem ipsum dolor sit amet",
            replies: [
              {
                name: "John Doe",
                comment: " lorem ipsum dolor sit amet",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "John Doe",
    comment: " lorem ipsum dolor sit amet",
    replies: [],
  },
];
