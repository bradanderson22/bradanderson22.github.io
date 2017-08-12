
$(function() {
        // Enable link to tab
        var hash = document.location.hash;
    if (hash) {
        console.log(hash);
        $('container.nav nav-pills a[href='+hash+']').tab('show');
        }
        // Toggle tab on page reload
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        window.location.hash = e.target.hash;
        });
});