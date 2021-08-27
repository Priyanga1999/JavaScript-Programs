let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };

  let clone=Object.assign({},user);
  console.log(clone.sizes.height);