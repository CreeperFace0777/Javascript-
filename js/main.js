//ON DOC READY
$(function() {
    //CHANGE INPUT
    $('#change').click(function() {
        var titleValue = $('#titleInput').val().trim();
            $('#title').slideToggle(500, function() {
                $(this).html(titleValue).slideToggle(500);
            });
    });

});
