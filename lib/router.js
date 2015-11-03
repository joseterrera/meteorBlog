Router.configure({
//aqui le estamos diciendo al router que el 
//template que acabo de crear es el default 
//para todos los templates.
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  //waitOn es una subscripcion que le indica al usuario
  //que algo esta pasando. Esto sucede una vez, porque
  //solo toma una vez para que la data se cargue al browser.
    waitOn: function() {
    return [Meteor.subscribe('posts'), Meteor.subscribe('comments')];
  }
});

//aqui estamos creando una nueva route que 
//se llama postList y la mapeamos al root path.
//TEnemos el nombre de una route que se llama postList
//pero tambien tenemos el nombre de un template que se llama
//postList.
//Por default ironRouter va a buscar un template con
//ese mismo nombre en nuestro path. 
//Iron Router nos permite usar spacebars como
//{{pathFor}}
Router.route('/', {name: 'postsList'});
//este router nos lleva a una pagina en particular
//el _id puede ser cualquier cosa que 
//sera agregado dentro de la propiedad del router
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});
Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});


//aqui se define el route para nuestro submit page, y agregamos
//un link para nuestro submit page en el header.
Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}


//show not found page for invalid routes:
Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});