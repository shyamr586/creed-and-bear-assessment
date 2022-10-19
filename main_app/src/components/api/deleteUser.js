export const deleteUser = (idArr, fetched) =>
  new Promise((resolve, reject) => {
    let users = fetched.data;
    if (users) {
      idArr.forEach(id=>{
        let searched = users.find((elem) => elem.id === id);
        if (searched) {
          let index = users.indexOf(searched)
          users.splice(index,1)
        }
      })
      fetched.data = users
      fetched.total = users.length
      fetched.total_pages = Math.ceil(users.length/fetched.per_page)
      setTimeout(() => resolve(fetched), 1000);
    } else {
      return setTimeout(
        () => reject(new Error("There seems to be an internal server issue.")),
        1000
      );
    }
  });

deleteUser()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });
