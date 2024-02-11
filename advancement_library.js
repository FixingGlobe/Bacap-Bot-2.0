// a big file with JS objects for each advancement

//

var iHateYou = "var … A dev's worst nightmare!";

let adv0 = {  // perhaps I should name it the adv[id] instead of a name
  id: 0,    // I'm assigning these randomly except 1000, also id 0 is a test object  // ids are for dbs
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
  internal_name: "bacap/advancements/combat/root",
  expansion_name: "Amplified Nether",  // will display the name of the expansion pack, Nullscape for example  // also Globe happy now
  addedIn: "BACAP 1.7.Never",
  futureUseBoolean: false,
  placeholder: true,  // not an actual advancement
};


// * Expansion Exclusive advancements
// ! Expansion Important Information
// ! starting at id 10k with their "0" being reserved
// ! each one having a reserved block of 1k advancements

// * Removed advancements 10k
let adv10000 = {
  id: 10000,
  placeholder: true,  // not an actual advancement
};

let adv10001 = {
  id: 10001,
  adv_name: "Happy 10 years MC!",
};

// * Terralith advancements 11k
let adv11000 = {
  id: 11000,
  placeholder: true,  // not an actual advancement
};

let adv11001 = {
  id: 11001,
  adv_name: "Happy 10 years MC!",
};

// * Nullscape advancements 12k
let adv12000 = {
  id: 12000,
  placeholder: true,  // not an actual advancement
};

let adv10001 = {
  id: 12001,
  adv_name: "Happy 10 years MC!",
};

// * Cereal Dedication advancements 10k
let adv13000 = {
  id: 13000,
  placeholder: true,  // not an actual advancement
};

let adv13001 = {
  id: 13001,
  adv_name: "Happy 10 years MC!",
};

// * Edge of the Jungle advancements 14k
let adv14000 = {
  id: 14000,
  placeholder: true,  // not an actual advancement
};

let adv14001 = {
  id: 14001,
  adv_name: "Happy 10 years MC!",
};

// * BACAP Infinity advancements 15k
let adv15000 = {
  id: 15000,
  placeholder: true,  // not an actual advancement
};

let adv15001 = {
  id: 15001,
  adv_name: "Happy 10 years MC!",
};

// * Australia 16k
let adv16000 = {
  id: 16000,
  placeholder: true,  // not an actual advancement
};

let adv16001 = {
  id: 16001,
  adv_name: "Happy 10 years MC!",
};

// * BACAP 2 17k
let adv17000 = {
  id: 17000,
  placeholder: true,  // not an actual advancement
};

let adv17001 = {
  id: 17001,
  adv_name: "Happy 10 years MC!",
};


// ! End of advancements



// // Not needed, I can just use the legacy property AND legacy description and perhaps set the other 3 booleans to false (for all 4) 
// Globe's stuff
// Cereal Dedication (4 advancements) are hardcoded  
/* atm these can only be looked up by typing in the exact string of the adv_name, 
since these are hardcoded 
or perhaps I could do a check for JS objets if there is no match in the db */
/*
let customAdvancementTest = {
  adv_name: "CustomTest",
  cereal_dedication: true,  // used for a custom display and will not apply the other formating options
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
*/

/* 
I'm switching to an SQL DB instead, way more efficent
but I'm keeping this structure
this file will be kept in the project to test basic functionality (before the db part because then I will know what the issue is)
I'm sharing the SQL query on this github, 
Globe: DON'T forget to drop the table(s) at the beginning of the query
*/

