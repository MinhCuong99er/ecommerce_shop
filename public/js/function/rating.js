$(document).ready(function () {

    $("#rating1").emojiRating({
        fontSize: 32,
        onUpdate: function (count) {
            $(".review-text").show();
            $("#starCount").html(count + " Star");
        }
    });

});