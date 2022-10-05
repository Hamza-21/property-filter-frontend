export const types = [
  "PG/Shared Living",
  "Residential",
  "Commercial",
  "Villas",
];
export const locations = [
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Delhi",
  "Kolkata",
  "Vadodara",
  "Kerala",
];

const data = new Array(50).fill(0).map((_, index) => {
  return {
    id: Math.floor(Math.random() * 10000),
    name: String(Math.floor(Math.random() * 10000)),
    type: types[Math.floor(Math.random() * types.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    price: Math.floor(Math.random() * 5000 + 1000),
    postedAt: new Date(new Date() - Math.floor(Math.random() * 5000000000))
      .toLocaleString("en-GB")
      .split(",")[0],
    image: "https://source.unsplash.com/random/400x300/?house",
  };
});

export default data;
