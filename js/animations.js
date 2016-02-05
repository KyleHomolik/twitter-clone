$( document ).ready(function functionName() {




  $("#new-tweet-textarea").click(function(event) {
    $(this).css("height","5em");
    $("tweet-controls").css("display", "block")
  });




$("#new-tweet-textarea").keyup(function() {
  var tweetLength = $(this).val().length;
  $("#char-count").text(140 - tweetLength);

  if (tweetLength >= 130){
      $("#char-count").css("color", "red")
    } else {
      $("#char-count").css("color", "#999")
    }

  if (tweetLength >= 140){
      $("#tweet-submit").attr("disabled", true)
    } else {
      $("#tweet-submit").attr("disabled", false)
    }
});



$("#tweet-submit").click(function(event) {
  var tweet = $("#new-tweet-textarea").val();
  if (!tweet.length) return;

  var userName = "Kyle Homolik";

  var tweetHtml = '<div class="tweet">'



  $("#streem").prepend(tweetHtml);

  $("#new-tweet-textarea").val("");
  $("#char-count").text(140);
});



});
