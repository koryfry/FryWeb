var urlPath = window.location.pathname;

$(function () {
    ko.applyBindings(indexVM);
    indexVM.loadAgeGroups();
});

var indexVM = {
    AgeGroups: ko.observableArray([]),

    loadAgeGroups: function () {
        var self = this;
        //Ajax Call Get All Articles
        $.ajax({
            type: 'GET',
            url: urlPath + '/FillIndex',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                self.AgeGroups(data); //Put the response in ObservableArray
            },
            error: function (err) {
                alert(err.status + ' : ' + err.statusText);
            }
        });

    }
};

function AgeGroups(AgeGroups) {
    this.AgeGroupKey = ko.observable(AgeGroups.AgeGroupKey);
    this.GroupName = ko.observable(AgeGroups.GroupName);
    this.GroupTier = ko.observable(AgeGroups.GroupTier);
    this.RateOfPay = ko.observable(AgeGroups.RateOfPay);
}