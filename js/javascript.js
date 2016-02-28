$( document ).ready(function() {
    window.onbeforeunload = showPopup;
    window.closed = showPopup;

    function showPopup() {
        return 'Are you sure? After this action you will lost all data on this page (recommend export file with details).';
    }
});