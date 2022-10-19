import { users } from "../data/GenerateData";

 export const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            1000
          );
    }

    setTimeout(() => resolve(users), 1000);
  });

getUsers()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });

