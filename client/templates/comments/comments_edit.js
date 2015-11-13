Template.postEdit.events({
	'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentComment = this.postId;
      Posts.remove(currentPostId);
    }
  }
});