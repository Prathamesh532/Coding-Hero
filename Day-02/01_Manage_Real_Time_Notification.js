function countNotifications(notifications) {
  // your code here
  let result = [];

  let hashMap = new Map();

  for (const event of notifications) {
    hashMap.set(event, (hashMap.get(event) || 0) + 1);
  }

  for (let [key, value] of hashMap) {
    result.push({ category: key, count: value });
  }

  return result;
}

let notifications = [
  "Event",
  "Offer",
  "Event",
  "Update",
  "Offer",
  "Offer",
  "Event",
];
console.log(countNotifications(notifications));
