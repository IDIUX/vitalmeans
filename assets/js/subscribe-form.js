console.log("subscribe-form.js running");
$( document ).ready($('#subscribe-form-submit').click(function(e) {
    console.log("javascript ssubscribe-form submit clicked");
    e.preventDefault();
    var subscribeEmail = $('#subscribe-email').val();
    // data validation code here
    var url = "//docs.google.com/forms/d/e/1FAIpQLSdEaO77pe82ODjfueHMyCukm7RbAztPis2p0jdRxtLu_gkA_g/formResponse";
    var data = {
        'entry.972856848': subscribeEmail,
    };
    $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            statusCode: {
                    0: function() {
                            console.log("unknown");
                            window.location.href = "subscribe_confirm.html";
                    },
                    200: function() {
                            console.log("success");
                            window.location.href = "subscribe_confirm.html";
                    }
            }
    });
}));
console.log("subscribe-form.js parsed");