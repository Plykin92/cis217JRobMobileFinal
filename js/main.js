

$(document).ready(function() {
    $("#image3").click(function() {
        $(this).animate({
            opacity: 0.75,
            height: [ "toggle", "swing" ]
        }, 5000, function() {
            $(this).removeAttr('style');
        });

    });

});


simpleCart({
    // array representing the format and columns of the cart,
    // see the cart columns documentation
    cartColumns: [
        { attr: "name", label: "Name"},
        { view: "currency", attr: "price", label: "Price"},
        { view: "decrement", label: false},
        { attr: "quantity", label: "Qty"},
        { view: "increment", label: false},
        { view: "currency", attr: "total", label: "SubTotal" },
        { view: "remove", text: "Remove", label: false}
    ],
    // "div" or "table" - builds the cart as a
    // table or collection of divs
    cartStyle: "div",
    // how simpleCart should checkout, see the
    // checkout reference for more info
    checkout: {
        type: "SendForm" ,
        url: "http://www.cis217-m.netfordev.com/mail.php"
    },
    // set the currency, see the currency
    // reference for more info
    currency: "USD",
    // collection of arbitrary data you may want to store
    // with the cart, such as customer info
    data: {},
    // set the cart langauge
    // (may be used for checkout)
    language: "english-us",
    // array of item fields that will not be
    // sent to checkout
    excludeFromCheckout: [],
    // custom function to add shipping cost
    shippingCustom: null,
    // flat rate shipping option
    shippingFlatRate: 0,
    // added shipping based on this value
    // multiplied by the cart quantity
    shippingQuantityRate: 0,
    // added shipping based on this value
    // multiplied by the cart subtotal
    shippingTotalRate: 0,
    // tax rate applied to cart subtotal
    taxRate: 0,
    // true if tax should be applied to shipping
    taxShipping: false,
    // event callbacks
    beforeAdd            : null,
    afterAdd            : null,
    load                : null,
    beforeSave        : null,
    afterSave            : null,
    update            : null,
    ready            : null,
    checkoutSuccess    : null,
    checkoutFail        : null,
    beforeCheckout        : null,
    beforeRemove           : null
});