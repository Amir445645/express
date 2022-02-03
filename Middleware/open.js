const middleware = (req, res, next) => {
  console.log(
    "The web application is only available during working hours (Monday to Friday,  from 9 to 17)"
  );
  var open = false;
  var now = new Date();
  var day = now.getDate();
  var hour = now.getHours();
  if (day > 0 && day < 6 && hour > 8 && hour < 18) {
    open = true;
  } else {
    console.log("we are closed");
  }
  req.isItOpen = [day, hour, open];

  next();
};
module.exports = middleware;
