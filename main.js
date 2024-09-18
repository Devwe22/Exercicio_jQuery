$(document).ready(function() {
    $('#taskForm').on('submit', function(event) {
        event.preventDefault();
        const taskInput = $('#taskInput').val();
        if (taskInput) {
            $('#taskList').append('<li>' + taskInput + '</li>');
            $('#taskInput').val(''); 
        }
    });
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed'); 
    });
});
