var urlPath = window.location.pathname;

$(function () {
    ko.applyBindings(indexVM);
    indexVM.loadGameDetails();
});

var indexVM = {
    GameDetails: ko.observableArray([]),

    loadGameDetails: function () {
        var self = this;
        //Ajax Call Get All Articles
        $.ajax({
            type: 'GET',
            url: urlPath + '/FillIndex',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                self.GameDetails(data); //Put the response in ObservableArray
            },
            error: function (err) {
                alert(err.status + ' : ' + err.statusText);
            }
        });

    }
};

function GameDetails(GameDetails) {
    this.DetailsKey = ko.observable(GameDetails.DetailsKey);
    this.GameDate = ko.observable(GameDetails.GameDate);
    this.GameTime = ko.observable(GameDetails.GameTime);
    this.Ref = ko.observable(GameDetails.Ref);
    this.Line = ko.observable(GameDetails.Line);
    this.ArenaKey = ko.observable(GameDetails.ArenaKey);
    this.AgeGroupKey = ko.observable(GameDetails.AgeGroupKey);
    this.OfficialsKey = ko.observable(GameDetails.OfficialsKey);
    this.RateOfPay = ko.observable(GameDetails.RateOfPay);
    this.DistanceTraveled = ko.observable(GameDetails.DistanceTraveled);
    this.MiscExpense = ko.observable(GameDetails.MiscExpense);
    this.DatePaid = ko.observable(GameDetails.DatePaid);
    this.AmountPaid = ko.observable(GameDetails.AmountPaid);
}