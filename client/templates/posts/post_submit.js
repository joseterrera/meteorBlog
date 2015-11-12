Template.postSubmit.onCreated(function() {
  Session.set('postSubmitErrors', {});
});
Template.postSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    //con jquery poblamos la pagina postPage con los resultados. 
    var post = {
      // url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      body: $(e.target).find('[name=body]').val()

    };
     var errors = validatePost(post);
    if (errors.title || errors.body)
      return Session.set('postSubmitErrors', errors);
    //post es el argument y va seguido de una funcion callback
    //postInsert va a ser definido en lib/collections/posts.js
     Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
         return throwError(error.reason);
       // show this result but route anyway
      // if (result.postExists)
      //    throwError('This link has already been posted');
      
      Router.go('postPage', {_id: result._id});  
    });
  }
});