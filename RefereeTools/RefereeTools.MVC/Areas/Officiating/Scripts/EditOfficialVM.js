var urlPath = window.location.pathname;

$(function () {
    ko.applyBindings(editOfficialVM);
    editOfficialVM.loadOfficialToEdit();
});

var editOfficialVM = {
    Officials: ko.observableArray([]),

    loadOfficialToEdit: function () {
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
    this.OfficialName = ko.observable(Officials.OfficialName);
    this.OfficialLevel = ko.observable(Officials.OfficialLevel);
}