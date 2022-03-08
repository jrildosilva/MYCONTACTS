module.exports = ((request, response, next) => {
  response.setHeader('Access-control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-control-Allow-Methods', '*');
  next();
});
