const express = require('express');
const app = express();
const port = 3000; // You can choose any port

const milkyWayPlanets = [
  {
    id: 1,
    name: "Earth",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg",
    mass: "5.972 × 10^24 kg",
    diameter: "12,742 km",
    orbitalPeriod: "365.25 days",
    moons: 1,
    description: "Our home planet, the only known place in the universe harboring life."
  },
  {
    id: 2,
    name: "Mars",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Mars_Hubble.jpg/1024px-Mars_Hubble.jpg",
    mass: "6.39 × 10^23 kg",
    diameter: "6,779 km",
    orbitalPeriod: "687 days",
    moons: 2,
    description: "The 'Red Planet', known for its rusty appearance and potential for past or present microbial life."
  },
  {
    id: 3,
    name: "Jupiter",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jupiter_and_Io_with_Europa_behind.jpg/1024px-Jupiter_and_Io_with_Europa_behind.jpg",
    mass: "1.898 × 10^27 kg",
    diameter: "139,820 km",
    orbitalPeriod: "11.86 years",
    moons: 79,
    description: "The largest planet in our solar system, a gas giant with a powerful magnetic field and numerous moons."
  },
    {
    id: 4,
    name: "Saturn",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Opposition_in_July_2020.jpg/1024px-Saturn_during_Opposition_in_July_2020.jpg",
    mass: "5.683 × 10^26 kg",
    diameter: "120,536 km",
    orbitalPeriod: "29.46 years",
    moons: 82,
    description: "Known for its stunning ring system, a gas giant with a complex atmosphere and many moons."
  },
  {
    id: 5,
    name: "Neptune",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Neptune_from_Voyager_2.jpg/1024px-Neptune_from_Voyager_2.jpg",
    mass: "1.024 × 10^26 kg",
    diameter: "49,244 km",
    orbitalPeriod: "164.8 years",
    moons: 14,
    description: "The farthest known major planet, an ice giant with strong winds and a deep blue color."
  },
  {
    id: 6,
    name: "Uranus",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1024px-Uranus2.jpg",
    mass: "8.681 × 10^25 kg",
    diameter: "51,118 km",
    orbitalPeriod: "84.02 years",
    moons: 27,
    description: "An ice giant tilted on its side, with a unique ring system and a cold, featureless atmosphere."
  },
    {
    id: 7,
    name: "Venus",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/1024px-Venus-real_color.jpg",
    mass: "4.867 × 10^24 kg",
    diameter: "12,104 km",
    orbitalPeriod: "224.7 days",
    moons: 0,
    description: "Earth's 'sister planet', with a thick, toxic atmosphere and scorching surface temperatures."
  },
    {
    id: 8,
    name: "Mercury",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mercury_in_color.jpg/1024px-Mercury_in_color.jpg",
    mass: "3.301 × 10^23 kg",
    diameter: "4,880 km",
    orbitalPeriod: "88 days",
    moons: 0,
    description: "The smallest and innermost planet, with a heavily cratered surface and extreme temperature variations."
  },
];

app.get('/planets', (req, res) => {
  res.json(milkyWayPlanets);
});

app.get('/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id); // Parse id as an integer
  const planet = milkyWayPlanets.find(p => p.id === planetId);

  if (planet) {
    res.json(planet);
  } else {
    res.status(404).json({ error: "Planet not found" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});