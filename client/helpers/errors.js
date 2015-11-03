// Local (client-only) collection
//Los errrores son solo relevantes en la sesion current
//y no necesitan ser persistentes.
//Existen en el browser y no necesitan 
//conectarse con el server. 
//Creamos una coleccion y luego la funcion
//throwErrors

Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({message: message});
};