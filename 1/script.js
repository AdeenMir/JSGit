// function createPerson(name, age, color) {
//   return { name, age, color };
// }

// const p1 = createPerson("Adeen", 22, "red");
// console.log(p1);                  
// console.log({ name, age, color }); 

// const obj={a:2,b:4};
// cnst{a,b}=obj;

function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
