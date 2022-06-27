$(document).ready(function () {
  var cart_id;
  var tableRow = '';
  var cartLength = "3";
  console.log($("#cartCount").text());
  $('#checkoutBtn').hide();
 $('#dialog-confirm').hide(); 
  if (window.location.search.split('?').length > 1) {
    var params = window.location.search.split('?')[1].split('&');
    var queryString = decodeURIComponent(params[0]);
    console.log(queryString);
    console.log(params[0]);
    cart_id = params[0];
  } else {
    alert("No Products Added Recently. Kindly Shop");
  }
  $.ajax({
    type: "POST",
    url: 'phpscript/loadcart.php',
    data: { cardId: cart_id },
    success: function (response) {
      console.log(response);
      var myCart = JSON.parse(response);
      //console.log(myCart);
      $("#cartCount").text(cartLength);
      tableRow += '<tr>';
      tableRow += `<td>${myCart.product_name_1}</td>`;
      tableRow += `<td>${myCart.product_price_1} </td>`;
      tableRow += '<td><button type="button" id="removeCartItem" class="btn btn-danger"><i class="fi-rr-trash"></i></button></td>';
      tableRow += '</tr>';
      tableRow += '<tr>';
      tableRow += `<td>${myCart.product_name_2}</td>`;
      tableRow += `<td>${myCart.product_price_2} </td>`;
      tableRow += '<td><button type="button" id="removeCartItem" class="btn btn-danger"><i class="fi-rr-trash"></i></button></td>';
      tableRow += '</tr>';
      tableRow += '<tr>';
      tableRow += `<td>${myCart.product_name_3}</td>`;
      tableRow += `<td>${myCart.product_price_3} </td>`;
      tableRow += '<td><button type="button" id="removeCartItem" class="btn btn-danger"><i class="fi-rr-trash"></i></button></td>';
      tableRow += '</tr>';
      $("#tbody").append(tableRow);
      $('#checkoutBtn').show();
    }
  });

  $("#tbody").on('click', '#removeCartItem', function () {
    //alert("row clicked");
    var deleteItem = $(this).closest('tr');
    $(function () {
      $("#dialog-confirm").dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Yes": function () {
            deleteItem.remove();
            $(this).dialog("close");
          },
          Cancel: function () {
            $(this).dialog("close");
          }
        }
      });
    });
    
  });

  
});
/*<tr>
             <td>Product Name 01 </td>
             <td>Product Price 01 </td>
             <td><button type="button" id="removeCartItem" class="btn btn-danger"><i class="fi-rr-trash"></i></button></td>
           </tr>
           <tr>
            <td>Product Name 02 </td>
            <td>Product Price 02 </td>
            <td><button type="button" id="removeCartItem" class="btn btn-danger"><i class="fi-rr-trash"></i></button></td>
          </tr>
          <tr>
            <td>Product Name 03 </td>
            <td>Product Price 03 </td>
            <td><button type="button" id="removeCartItem" class="btn btn-danger"><i class="fi-rr-trash"></i></button></td>
          </tr>*/