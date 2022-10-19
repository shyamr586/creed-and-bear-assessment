export const createUser = (fetched, first_name, last_name, email, avatar) =>
  new Promise((resolve, reject) => {
    console.log(fetched);
    let users = fetched.data;
    console.log(fetched.total);
    if (users) {
      var newUser = {
        id: fetched.total+1,
        first_name: first_name,
        last_name: last_name,
        email: email,
        avatar: avatar
      }
      users = [...users,newUser]
      fetched.data = users
      fetched.total = fetched.total+1
      fetched.total_pages = Math.ceil(fetched.total/fetched.per_page)
      setTimeout(() => resolve(fetched), 1000);
    }
  });

createUser()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });
