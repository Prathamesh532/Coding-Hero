function mostInfluentialUser(influenceScore) {
  let maxFollowers = -1;
  let influentialUserId = -1;

  for (let i = 0; i < influenceScore.length; i++) {
    if (influenceScore[i] > maxFollowers) {
      maxFollowers = influenceScore[i];
      influentialUserId = i;
    }
  }

  return influentialUserId;
}

const scores = [3, 5, 2, 5, 1];
console.log(mostInfluentialUser(scores));
