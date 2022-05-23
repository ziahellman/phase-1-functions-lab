// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks >= 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}

function distanceFromHqInFeet(blocks) {
  const distance = distanceFromHqInBlocks(blocks);
  return distance * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const feetTraveled = distanceTravelledInFeet(start, destination);
  if (feetTraveled < 400) {
    return 0;
  } else if (feetTraveled <= 2000) {
    return (feetTraveled - 400) * 0.02;
  } else if (feetTraveled <= 2500) {
    return 25;
  } else feetTraveled > 2500;
  return "cannot travel that far";
}
