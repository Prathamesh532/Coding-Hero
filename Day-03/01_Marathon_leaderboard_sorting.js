function sortMarathonResults(runners) {
  return runners
    .sort((a, b) => a.time - b.time)
    .sort((a, b) => a.name.localeCompare(b.name));
}

function sortMarathonResults_(runners) {
  return runners.sort((a, b) => {
    if (a.time !== b.time) {
      return a.time - b.time;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
}

let arr = [
  { name: "John", time: 300 },
  { name: "Jane", time: 300 },
  { name: "Jake", time: 290 },
];

const check = sortMarathonResults_(arr);
console.log(check);
