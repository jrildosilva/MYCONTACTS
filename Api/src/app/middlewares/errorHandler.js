module.exports = ((error, request, response, next) =>{
  console.log('errorhandler', error);
  response.senStatus(500);
});
