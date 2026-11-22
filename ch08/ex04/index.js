const obj = {
  om: function () {
    const nest = {
      nm: function () {
        console.log(this === obj, this === nest); // => false, true
      },
      arrow: () => {
        console.log(this === obj, this === nest); // => true, false
      },
    };
    nest.nm();
    nest.arrow();
  },
};
obj.om();
