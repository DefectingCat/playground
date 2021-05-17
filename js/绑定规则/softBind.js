Function.prototype.softBind = function (obj) {
  const fn = this;
  const curried = [].slice.call(arguments, 1);
  console.log(arguments);
  console.log(curried);
};
