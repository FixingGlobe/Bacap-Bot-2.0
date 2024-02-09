// a big file with JS objects for each advancement

//

var iHateYou = "var … A dev's worst nightmare!";

let happy10yearsMcButAsAnImposter = {
  adv_name: "Happy 10 years MC! Will be included as Well :barry:",
  hidden: true,  // will emphasize (italic)
  legacy: true,    // will add a spoiler to the advancement name
  hardcore: true,  // will make it bold
  expansion: true,  // will color it
  tab: "statistics",
  type: "goal",
  description: "YOU'RE MOTHER!",
  requirement: "Jump 10 times",
  xp: "It's over 9000",
  reward: "10 potatos",
  trophy: "potato salad",
  legacy_description: "Only obtainable in BACAP 1.7 but this is an imposter",
  hardcore_description: "ah yes",
  hardcore_requirement: "play for 10 years without dying",
  expansion_description: "Play for 10 years and drink the special terralith only item.",
  expansion_requirement: "In terralith you need to drink Royal Jelly as well.",
};

// Globe's stuff
// Cereal Dedication (4 advancements) are hardcoded  
/* atm these can only be looked up by typing in the exact string of the adv_name, 
since these are hardcoded 
or perhaps I could do a check for JS objets if there is no match in the db */
let customAdvancementTest = {
  adv_name: "CustomTest",
  cereal_dedication: true,  // used for a custom 
  hidden: true,  // will emphasize (italic)
  legacy: true,    // will add a spoiler to the advancement name
  hardcore: true,  // will make it bold
  expansion: true,  // will color it
  tab: "statistics",
  type: "goal",
  description: "Henry",
  requirement: "Henry",
  xp: "23",
  reward: "1 book",
  trophy: "Eye of Henry",
  cereal_notes: "This requires the Cereal Dedication Edition Hardcore Addon Pack",
};

/* 
I'm switching to an SQL DB instead, way more efficent
but I'm keeping this structure
this file will be kept in the project to test basic functionality (before the db part because then I will know what the issue is)
I'm sharing the SQL query on this github, 
Globe: DON'T forget to drop the table(s) at the beginning of the query
*/

