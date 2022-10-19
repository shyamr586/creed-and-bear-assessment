export const updateUser = (id, fetched, first_name, last_name, email, avatar) =>
  new Promise((resolve, reject) => {
    let users = fetched.data;
    if (users) {
      var foundIndex = users.findIndex((elem) => (elem.id) === id);
      users[foundIndex] = {
        id: id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        avatar: avatar
      };
      fetched.data = users
      if (foundIndex<0) {
        return setTimeout(() => reject(new Error("User not found")), 1000);
      }
      setTimeout(() => resolve(fetched), 1000);
    }
  });

updateUser()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });
