var urlPath = window.location.pathname
var CreateArenaVM = {
    ArenaKey: ko.observable(),
    ArenaName: ko.observable(),
    City: ko.observable(),
    State: ko.observable(),
    btnCreateArena: function () {
        $.ajax({
            url: urlPath + '/Create',
            type: 'post',
            dataType: 'json',
            data: ko.toJSON(this),
            contentType: 'application/json',
            success: function (result) {
                window.location.href = urlPath + '/';
            },
            error: function (err) {
                if (err.responseText == "success")
                { window.location.href = urlPath + '/'; }
                else {
                    alert(err.responseText);
                }
            },
            complete: function () {
            }
        });

    }
};
ko.applyBindings(CreateArenaVM);