// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
let day = 1;
let dayName = `Today`;

// Complete this switch case statement to produce the correct results please.
for (day = 0; day < 8; day++) {
  console.log("Day:", day);
  switch (day) {
    case 3:
      dayName = `Today is Wednesday`;
      break;
    case 1:
      dayName = `Today is Mo' day (garfield)`;
      break;
    // Note the code blocks in the next 2 cases: Why?
    case 4: {
      const message = `Today is Thursdie`;
      console.log(message);
      break;
    }
    case 5: {
      const message = `Tomorrow it's the weekend!`;
      console.log(message);
      break;
    }
    default:
      console.log(
        "You... foool, you absolute buffooon!!!!!! It is not",
        day,
        "day!!"
      );
      break;
    case 2:
      console.log(`Today is Tuesday`);
      break;
    // write a case here for the weekend (how many days in the weekend?)
    case 6:
    case 7:
      console.log(`It's the Weekend !!`);
      break;
  }
  if (dayName !== "Today") {
    console.log(">", dayName);
  }
}