import { faker } from "@faker-js/faker";

let initial_total = 12

export const users = {
  page: 1,
  per_page: 6,
  total: initial_total,
  total_pages: 2,
  data: [],
};

function createRandomUser(i) {
    let first_name = faker.name.firstName()
    let last_name= faker.name.lastName()
  return {
    id: i,
    email: faker.internet.email(first_name, last_name, "reqres.in"),
    first_name: first_name,
    last_name: last_name,
    avatar: faker.image.avatar(),
  };
}

for (let i = 1; i<= initial_total; i++) {
  users.data.push(createRandomUser(i));
}

console.log(users)