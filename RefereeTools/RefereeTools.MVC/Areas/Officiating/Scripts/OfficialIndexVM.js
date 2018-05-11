var urlPath = window.location.pathname;

$(function () {
    ko.applyBindings(indexVM);
    indexVM.loadOfficials();
});

var indexVM = {
    Officials: ko.observableArray([]),

    loadOfficials: function () {
        var self = this;
        //Ajax Call Get All Articles
        $.ajax({
            type: 'GET',
            url: urlPath + '/FillIndex',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                self.Officials(data); //Put the response in ObservableArray
            },
            error: function (err) {
                alert(err.status + ' : ' + err.statusText);
            }
        });

    }
};

function Officials(Officials) {
    this.OfficialsKey = ko.observable(Officials.OfficialsKey);
    this.FirstName = ko.observable(Officials.FirstName);
    this.LastName = ko.observable(Officials.LastName);
    this.OfficialLevel = ko.observable(Officials.OfficialLevel);
}