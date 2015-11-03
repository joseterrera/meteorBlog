//agregando el accounts package 
//meteor crea una nueva coleccion
//que se accede en Meteors.users

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});