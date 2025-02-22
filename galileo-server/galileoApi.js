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
    orbital_period: "365.25 days",
    moons: 1
  },
  {
    id: 2,
    name: "Mars",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Mars_Hubble.jpg/1024px-Mars_Hubble.jpg",
    mass: "6.39 × 10^23 kg",
    diameter: "6,779 km",
    orbital_period: "687 days",
    moons: 2
  },
  {
    id: 3,
    name: "Jupiter",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jupiter_and_Io_with_Europa_behind.jpg/1024px-Jupiter_and_Io_with_Europa_behind.jpg",
    mass: "1.898 × 10^27 kg",
    diameter: "139,820 km",
    orbital_period: "11.86 years",
    moons: 79
  },
    {
    id: 4,
    name: "Saturn",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Opposition_in_July_2020.jpg/1024px-Saturn_during_Opposition_in_July_2020.jpg",
    mass: "5.683 × 10^26 kg",
    diameter: "120,536 km",
    orbital_period: "29.46 years",
    moons: 82 
  },
  {
    id: 5,
    name: "Neptune",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Neptune_from_Voyager_2.jpg/1024px-Neptune_from_Voyager_2.jpg",
    mass: "1.024 × 10^26 kg",
    diameter: "49,244 km",
    orbital_period: "164.8 years",
    moons: 14
  },
  {
    id: 6,
    name: "Uranus",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1024px-Uranus2.jpg",
    mass: "8.681 × 10^25 kg",
    diameter: "51,118 km",
    orbital_period: "84.02 years",
    moons: 27
  },
    {
    id: 7,
    name: "Venus",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/1024px-Venus-real_color.jpg",
    mass: "4.867 × 10^24 kg",
    diameter: "12,104 km",
    orbital_period: "224.7 days",
    moons: 0
  },
    {
    id: 8,
    name: "Mercury",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mercury_in_color.jpg/1024px-Mercury_in_color.jpg",
    mass: "3.301 × 10^23 kg",
    diameter: "4,880 km",
    orbital_period: "88 days",
    moons: 0
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