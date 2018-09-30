angular.module('bunbun', []).controller('repeatController', function ($scope) {
    var flavors = ["Original", "Gluten-free", "Blackberry", "Pumpkin Spice", "Walnut", "Caramel Pecan"];
    var glazings = ["None", "Sugar-milk", "Vanilla-milk", "Double-chocolate"];
    $scope.likes = [
        {'name': 'name1', 'intro': 'I am a roll', 'price': 3.5},
        {'name': 'name2', 'intro': 'You are a roll', 'price': 2.5},
    ];
});
