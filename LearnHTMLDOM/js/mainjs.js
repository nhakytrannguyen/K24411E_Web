function load_products(products,productbody)
{
    for(var i=0; i<products.length; i++)
    {
        product=products[i]
        productId=product.id;
        productName=product.name
        //create tr element
        tr=document.createElement("tr")
        //create 3 td(s)
        td_id=document.createElement("td")
        td_name=document.createElement("td")
        td_img=document.createElement("td")
        //create img element
        img=document.createElement("img")
        img.setAtribute("src","images/remove.png")
        //assign value for td(s)
        td_id.innerHTML=productId
        td_name.innerHTML=productName
        //append td(s) into tr
        tr.appendChild(td_id)
        tr.appendChild(td_name)
        tr.appendChild(td_img)
        //append tr into productbody
        productbody.appendChild(tr) 
    }
}