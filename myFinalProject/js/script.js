/* global $ */
(function () {
    "use strict";
    var products;
    console.log("ready ?");
    $.getJSON('js/data.json', function (data) {
        console.log("got them!", data);
        products = data;
        displayProducts(products);
    });
    console.log("after the json call", products);
    var ProductsTemplate = '<a href=\"link\"  target=_blank>' + '<div class="col-sm-4 col-lg-4 col-md-4 "  id="hBox">\n' + '  <div class="thumbnail">\n' + '    <img src="PUT-HERE-PRODUCT-IMAGE" alt="">\n' + '    <div class="caption">\n' + '      <h4 class="pull-right">PUT-HERE-PRODUCT-PRICE</h4>\n' + '      <h4><a href="#">PUT-HERE-PRODUCT-TITLE</a></h4>\n' + '      <p>PUT-HERE-PRODUCT-DESCRIPTION</p>\n' + '<div class="btn btn-danger btn-block" id="addItem">Add to cart </div>' + '</a>';

    function filterByCategory(products, category) {
        return products.filter(function (product) {
            return product.category === category;
        });
    }

    function displayProducts(productsList) {
        $('#products-container').empty();
        productsList.forEach(function (product) {
            var productHTML = ProductsTemplate.replace("PUT-HERE-PRODUCT-IMAGE", product.url).replace("PUT-HERE-PRODUCT-TITLE", product.title).replace("PUT-HERE-PRODUCT-PRICE", product.price).replace("PUT-HERE-PRODUCT-DESCRIPTION", product.description).replace("link", product.link);
            $('#products-container').append(productHTML);
        });
    }
    $("#filterCategories a").on("click", function (event) {
        event.preventDefault();
        var category = this.getAttribute("data-category");
        var filteredProducts = filterByCategory(products, category);
        displayProducts(filteredProducts);
    });
    var addItemBtn = document.getElementById("addItem");
    addItemBtn.on("click", function () {
        return products.push();
    });
})();