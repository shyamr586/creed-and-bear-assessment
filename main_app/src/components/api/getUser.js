export const getUser = (id, fetched) =>
  new Promise((resolve, reject) => {
    let users = fetched.data;
    if (users){
        const searched = users.find((elem) => elem.id === id);
        if (!searched) {
          return setTimeout(() => reject(new Error("User not found")), 1000);
        }
        setTimeout(() => resolve(searched), 1000);
    }

  });

getUser()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });
