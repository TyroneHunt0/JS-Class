import { introducePerson, Status, isFulltimeEmployee, personToString, getProfessions } from "./objects";

const tauhid = {
  name: {
    first: "Mohammad",
    last: "Islam",
  },
  status: Status.FullTime,
  profession: "Engineer and Professor",
};

const john = {
  name: {
    first: "John",
    last: "Snow",
  },
  status: Status.FullTime,
  profession: "Night's Watch",
};

// console.log(introducePerson());
console.log(introducePerson(john));
console.log(introducePerson(tauhid));

console.log(isFulltimeEmployee(tauhid));

console.log(personToString(tauhid));

console.log(
  getProfessions({
    1: tauhid,
    2: john,
  })
);
