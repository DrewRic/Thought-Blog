const names = [
    "Aaron",
    "Brandon",
    "Smith",
    "Jones",
    "Brian",
    "Heather",
    "Kenneth",
    "Xander",
    "Jared",
    "Courtney",
 
  ];
  
  const thoughtContent = [
    "I want to be free",
    "I miss my hobbies",
    "I have no time to myself anymore",
    "There needs to be more vietnamese restaurants around here",
    "I miss playing video games",
    "I need to stop shopping so much",
    "I want to make projcets that are meaningful to me",
    "Are you we doing okay?",
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Function to generate random assignments that we can add to student object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtName: getRandomArrItem(thoughtContent),
        score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts };