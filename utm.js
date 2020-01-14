window.onload = function() {
    function getParameterByName(name) {
        var name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        var results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var elements = [];
    ["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].forEach(function(utm) {
        let el = document.createElement('input');
        el.type = "hidden";
        el.name = utm;
        el.setAttribute("value", getParameterByName(utm));
        elements.push(el);
    });

    var forms = document.getElementsByTagName("form");

    for (var i = 0; i < forms.length; i++) {
       for (var ii = 0; ii < elements.length; ii++) {
        forms[i].appendChild( elements[ii] );
       }
    }
}