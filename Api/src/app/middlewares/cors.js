module.exports = (request, response, next) => {
  response.setHeader('Access-control-Allow-Origin', 'http://localhost:3000');
  response.setHeader('Access-control-Allow-Methods', '*');
  response.setHeader('Access-control-Allow-Headers', '*');
  response.setHeader('Access-control-Max-Age', '10');
  next();
};
