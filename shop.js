$(document).ready(function () {
    var cartList =[];
    var cart_url ="phpscript/cart.php";
    var divString='';
    var mainDiv='';
    $.ajax({  
        type:"POST",  
        url:'phpscript/shop.php',  
        success:function(data){  
            //$("body").append(data);
            // ITERATING THROUGH OBJECTS
            addProduct(data);
        }  
    });
    function addProduct(data){
        //console.log($.type(data));
        var myJSON = JSON.parse(data);
        //console.log($.type(myJSON));
        //console.log(myJSON[0]);
        //mainDiv ='<div id="maindiv"></div>';
        //$("#div").append(mainDiv);
            
        //console.table(myJSON);
        $.each(myJSON, function (key, value) {
            divString += '<div class="col-md-3 mb-2">';
            divString += '<div class="card" style="width: 18rem;">';
            divString += `<img src=images/${value.product_img} class="card-img-top" alt="...">`;
            divString += '<div class="card-body">';
            divString += `<h5 class="card-title">${value.product_name}</h5>`;
            divString += '<p class="card-text">'+ value.product_desc+'</p>';
            divString += `<label>Discount Price:</label><a class=".text-dark text-decoration-line-through">₹ ${value.product_discount_price} </a><br>`;
            divString += `<label>Best Price:</label><p id="productPrice" class="fw-bold text-primary">₹ ${value.product_price}</p>`;
            divString += '<button type="button" id="addWishlistBtn" class="btn btn-outline-danger"><i class="fi-rr-heart"></i></button> ';
            divString += '   <button type="button" id="addCartBtn" class="btn btn-primary">Add to Cart</button>';
            divString += '</div>';
            divString += '</div>';
            divString += '</div>';
        });
        $(".row").append(divString);
    }
   
    $('.row').on('click','#addCartBtn',function (e) {
       console.log(e);
       var pro_name = $(this).parent();
       var cart_value = $(this).closest('span');
       var cartCountDisplay = cart_value.prevObject[0].ownerDocument.children[0].children[1].children[0].children[0].children[4].children[1];
       var cartItem = {};
       cartItem.productName = pro_name[0].children[0].innerText;
       productPriceSplit = pro_name[0].children[6].innerText;
       //console.log(Array.from(productPriceSplit));
       var productPriceAfterSplit = productPriceSplit.slice(2,productPriceSplit.length);
       console.log(productPriceAfterSplit);
       cartItem.productPrice = productPriceAfterSplit;
       cartList.push(cartItem);
       //console.table(cartList);
       //console.log(cartList.length);
       cartCountDisplay.innerText = cartList.length;
    });

    $(".cartDis #cartCount").click(function (e) { 
        //alert("clicked");
        storeCartItems();
        e.preventDefault();
    });

    function storeCartItems(){
        $.ajax({
            type: "POST",
            url: cart_url,
            data: {cart:cartList},
            success: function (response) {
                console.log(response);
                var redirectToCart = "cart.html?" + encodeURIComponent(response);
                window.location.assign(redirectToCart);
            }
        });
    }
});




//console.log($('#cartCount').innerHTML);
       //var pro_name = $(this).closest('h5');
      // console.log(pro_name);
       //console.log(pro_name[0].children[0].innerText);
       //console.log(pro_name[0].children[6].innerText);
       //console.log(cart_value);
       //console.log(cart_value.prevObject[0].ownerDocument.children[0].children[1].children[0].children[0].children[4].children[1].innerText);
       
       //cartList.push()
       
       //console.log(pro_name.prevObject[0].parentElement.children[0].innerText); --> product name ( long fetching )
       //console.log(pro_name.prevObject[0].parentElement.children[6].innerText); --> product price ( long fetching )

       //console.log($("cartCount").find());
       //var cart_count_value = $(this).parent();
       //console.log(cart_count_value);
       //cart_count_value.children[0].innerText;
       //console.log(cart_count_value);
/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/