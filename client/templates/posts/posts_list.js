// var postsData = [
//   {
//     title: 'Introducing Telescope'
//     // url: 'http://sachagreif.com/introducing-telescope/'
//   }, 
//   {
//     title: 'Meteor'
//     // url: 'http://meteor.com'
//   }
// ];

//esta funcion crea un helper que nos devuelve la info
//definida arriba
Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}});
  }
});