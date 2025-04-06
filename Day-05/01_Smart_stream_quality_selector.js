function selectStreamQuality(bandwidth, qualities) {
  // your code here
  if (!qualities || !qualities.length) return "No Quality Available";

  qualities.sort((a, b) => b.required - a.required);

  for (let quality of qualities) {
    if (quality.required <= bandwidth) return quality.quality;
  }
  return "No Quality Available";
}

const qualities = [
  { quality: "4k", required: 15000 },
  { quality: "1080p", required: 5000 },
  { quality: "720p", required: 3000 },
  { quality: "480p", required: 1000 },
];

const bandwidth = 180;

const check = selectStreamQuality(bandwidth, qualities);
console.log(check);
