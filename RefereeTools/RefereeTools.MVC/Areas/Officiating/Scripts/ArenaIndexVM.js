var urlPath = window.location.pathname;

$(function () {
    ko.applyBindings(indexVM);
    indexVM.loadArenas();
    //indexVM.ToggleDetails();
});

var indexVM = 
{
    Arenas: ko.observableArray([]),

    loadArenas: function ()
    {
        var self = this;
        //Ajax Call Get All Arenas
        $.ajax
        ({
            type: 'GET',
            url: urlPath + '/FillIndex',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                self.Arenas(data); //Put the response in ObservableArray
            },
            error: function (err) {
                alert(err.status + ' : ' + err.statusText);
            }
        })
    },

    showPartial : function (arenaKey) 
    {
        $.ajax({
            type: 'GET',
            url: '/Officiating/Arena/Details/' + arenaKey,
            data: JSON.stringify(arenaKey),
            //dataType: "json",
            //cache: false,
            async: true,
            success: function (data) {
                $('#partial').html(data);
            }
        })
    }
};

function Arenas(Arenas) {
    this.ArenaKey = ko.observable(Arenas.ArenaKey);
    this.ArenaName = ko.observable(Arenas.ArenaName);
    this.City = ko.observable(Arenas.City);
    this.State = ko.observable(Arenas.State);
    this.PhoneNumber = ko.observable(Arenas.PhoneNumber);
}

//$('#showPartial').click(function () {
//    $.ajax({
//        type: 'GET',
//        url: '/Arena/Details/',
//        //url: '@Url.Action("Details", "Arena"))',
//        data: '5',
//        dataType: "json",
//        cache: false,
//        async: true,
//        success: function (result) {
//            $('partial').html(result);
//        }
//    });
//});

//$('#showPartial').click(function () {
//    var arenaKey = 5;
//    //alert(arenaKey);
//    $.ajax({
//        type: 'GET',
//        url: '/Officiating/Arena/Details/' + arenaKey,
//        data: JSON.stringify(arenaKey),
//        //dataType: "json",
//        //cache: false,
//        async: true,
//        success: function (data) {
//            $('#partial').html(data);
//        }
//    });
//});

