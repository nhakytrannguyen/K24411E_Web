function load_product_data(dataset, tbl_product)
{
    for(var i=0; i<dataset.length; i++)
    {
        // Chuyển đổi chuỗi sang dạng an toàn để truyền vào attribute onclick
        var prod = dataset[i];
        
        tbl_product.innerHTML += 
            "<tr>" +
                "<td>" + prod.id + "</td>" +
                "<td><span class='product-link' onclick='show_detail(" + prod.id + ", \"" + prod.name + "\", " + prod.price + ")'>" + prod.name + "</span></td>" +
                "<td>" + prod.price.toLocaleString('vi-VN') + "</td>" + // Thêm toLocaleString cho đẹp mắt
                "<td><img src='images/ic_remove.png' onclick='delete_product(this)'></td>" +
            "</tr>";
    }
}

// Hàm hiển thị chi tiết sản phẩm
function show_detail(id, name, price) {
    // Hiển thị khung chi tiết sản phẩm
    var detailBox = document.getElementById('product_detail');
    detailBox.style.display = "block";
    
    // Gán dữ liệu vào các thẻ span tương ứng
    document.getElementById('detail_id').innerText = id;
    document.getElementById('detail_name').innerText = name;
    document.getElementById('detail_price').innerText = price.toLocaleString('vi-VN');
}

function delete_product(img_element)
{
    if(confirm("Are you sure to delete this product?"))
    {
        img_element.parentElement.parentElement.remove();
    }
}