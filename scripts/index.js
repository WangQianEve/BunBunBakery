// https://www.cinnabon.com/bakery-menu
angular.module('bunbun', []).controller('repeatController', function ($scope) {
    $scope.flavors = [
        ["Original", 'fl-org.png'],
        ["Walnut", 'fl-walnut.png'],
        ["Gluten Rree", 'fl-gluten.png'],
        ["Blackberry", "fl-blackberry.png"],
        ["Pumpkin Spice", 'fl-pumpkin.png'],
        ["Caramel Pecan", 'fl-pecan.png'],
    ];

    $scope.glazings = [
        ["Vanilla Milk", 'gl-vanilla.png'],
        ["None", 'fl-org.png'],
        ["Double Chocolate", 'gl-choco.png'],
        ["Sugar Milk", 'gl-milk.png'],
    ];

    $scope.product_info = {
        // original
        "Grandma's Classic": {
            'intro': 'Classic flavor cinnamon roll with vanilla-milk glazing, just like your grandma did!',
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Bun Bun Bakery, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2,
            'flavor': ["Original", 'fl-org.png'],
            'glazing': [" + Vanilla Milk", 'gl-vanilla.png'],
        },
        "Classic Bun": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2,
            'flavor': ["Original", 'fl-org.png'],
            'glazing': ["", 'fl-org.png'],
        },
        "Classic Choco": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2.5,
            'flavor': ["Original", 'fl-org.png'],
            'glazing': [" + Double Chocolate", 'gl-choco.png'],
        },
        "Classic Sweetness": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2,
            'flavor': ["Original", 'fl-org.png'],
            'glazing': [" + Sugar Milk", 'gl-milk.png'],
        },
        // walnut
        "Winter Sun": {
            'intro': 'Brings you just enough warmth in a cold winter morning.',
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Bun Bun Bakery, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3,
            'flavor': ["Walnut", 'fl-walnut.png'],
            'glazing': [" + Vanilla Milk", 'gl-vanilla.png'],
        },
        "Nuts Lover": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2.5,
            'flavor': ["Walnut", 'fl-walnut.png'],
            'glazing': ["", 'fl-walnut.png'],
        },
        "Sweet Sweet Nuts": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3,
            'flavor': ["Walnut", 'fl-walnut.png'],
            'glazing': [" + Sugar Milk", 'gl-milk.png'],
        },
        "Choco Love": {
            'intro': "Nutella's chololate glazing goes with the perfect match - walnut bon!",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3.5,
            'flavor': ["Walnut", 'fl-walnut.png'],
            'glazing': [" + Double Chocolate", 'gl-choco.png'],
        },
        // gluten free
        "Gluten Free Vanilla": {
            'intro': 'Contains the least calories while remaining the delicious flavor.',
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Bun Bun Bakery, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3,
            'flavor': ["Gluten Rree", 'fl-gluten.png'],
            'glazing': [" + Vanilla Milk", 'gl-vanilla.png'],
        },
        "Pure Gluten Free": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2.5,
            'flavor': ["Gluten Rree", 'fl-gluten.png'],
            'glazing': ["", 'fl-gluten.png'],
        },
        "Gluten Free Choco": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3,
            'flavor': ["Gluten Rree", 'fl-gluten.png'],
            'glazing': [" + Double Chocolate", 'gl-choco.png'],
        },
        "Gluten Free Sugar Milk": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2.5,
            'flavor': ["Gluten Rree", 'fl-gluten.png'],
            'glazing': [" + Sugar Milk", 'gl-milk.png'],
        },
        // blackberry
        "Blackberry Night": {
            'intro': 'Perfect dessert after a fancy dinner. Sweet but not greasy. Start a romantic night.',
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Bun Bun Bakery, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2.5,
            'flavor': ["Blackberry", "fl-blackberry.png"],
            'glazing': ["", "fl-blackberry.png"],
        },
        "Vanilla Foreset": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3,
            'flavor': ["Blackberry", "fl-blackberry.png"],
            'glazing': [" + Vanilla Milk", 'gl-vanilla.png'],
        },
        "Fruity Double Black": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3.5,
            'flavor': ["Blackberry", "fl-blackberry.png"],
            'glazing': [" + Double Chocolate", 'gl-choco.png'],
        },
        "Blackberry Sweetheart": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3,
            'flavor': ["Blackberry", "fl-blackberry.png"],
            'glazing': [" + Sugar Milk", 'gl-milk.png'],
        },
        // pumpkin
        "Bun Bun Classic": {
            'intro': 'Our special recommend of all time!',
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Bun Bun Bakery, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2.5,
            'flavor': ["Pumpkin Spice", 'fl-pumpkin.png'],
            'glazing': [" + Sugar Milk", 'gl-milk.png'],
        },
        "Asian Beauty": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3,
            'flavor': ["Pumpkin Spice", 'fl-pumpkin.png'],
            'glazing': [" + Double Chocolate", 'gl-choco.png'],
        },
        "The Halloween": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2.5,
            'flavor': ["Pumpkin Spice", 'fl-pumpkin.png'],
            'glazing': ["", 'fl-pumpkin.png'],
        },
        "Black & White": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 2.5,
            'flavor': ["Pumpkin Spice", 'fl-pumpkin.png'],
            'glazing': [" + Vanilla Milk", 'gl-vanilla.png'],
        },
        // caramel
        "Salty Sweet": {
            'intro': 'Swirled with smooth caramel frosting. Sprinkled with a splash of pecans, you’re sure to love every last bite.',
            'description': 'We’ve added a caramel twist to our beloved Classic Roll. Layers of our legendary Bun Bun Bakery are wrapped in warm dough and swirled with smooth caramel frosting. Sprinkled with a splash of pecans, you’re sure to love every last bite.',
            'price': 3,
            'flavor': ["Caramel Pecan", 'fl-pecan.png'],
            'glazing': ["", 'fl-pecan.png'],
        },
        "The Autumn": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3,
            'flavor': ["Caramel Pecan", 'fl-pecan.png'],
            'glazing': [" + Vanilla Milk", 'gl-vanilla.png'],
        },
        "Joe's Favorite": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3.5,
            'flavor': ["Caramel Pecan", 'fl-pecan.png'],
            'glazing': [" + Double Chocolate", 'gl-choco.png'],
        },
        "Double Sweetness": {
            'intro': "",
            'description': 'The roll. The myth. The legend. That superior flavor and unmistakable, far-reaching aroma comes from Makara® Cinnamon, which originates in the mountains of West Sumatra, Indonesia. Combined with our smooth, tender dough and fluffy signature frosting, this isn’t your average cinnamon roll.',
            'price': 3,
            'flavor': ["Caramel Pecan", 'fl-pecan.png'],
            'glazing': [" + Sugar Milk", 'gl-milk.png'],
        },
    };
    $scope.favorties = ["Choco Love", "Winter Sun"];
    $scope.previous = ["Salty Sweet", "Asian Beauty"];
    $scope.recommend = ["Bun Bun Classic", "Gluten Free Vanilla", "Blackberry Night"];

    $scope.detail = "Bun Bun Classic";
    $scope.also_buy = ["Gluten Free Vanilla", "Blackberry Night"];
    $scope.shoppingCartItems = {};

    $scope.deleteFromShoppingCart = function (key) {
        delete $scope.shoppingCartItems[key];
    };

    $scope.addToCart = function (key, item) {
        var amount = 1;
        if (item !== undefined) {
            amount = item;
        }
        $scope.shoppingCartItems[key] = amount;
        $scope.cartSelectedItem = amount;
    };

    $scope.amountOptions = [1,2,3,4]
    // $scope.amountOptions = [
    //     {"option": 1},
    //     {"option": 2},
    //     {"option": 3},
    //     {"option": 4},
    // ]
});

$(document).ready(function () {
    $('.to_detail').click(function () {
        // var url = $(this).attr('href');
        window.open("detail.html", '_blank');
    });
});
