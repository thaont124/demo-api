detail()
function detail(){
	const xhttp = new XMLHttpRequest()
	xhttp.onload = function(){
		var ResponseJSON = xhttp.TresponseText
		var Response = JSON.parse(ResponseJSON)
		if (xhttp == 200){
			alert("ok")
			var elements = document.getElementById("detail")
			var html = '<h1>Chi tiết sản phẩm</h1>'
			html += '<label>Name:</label><p>'+ Response.name +'</p>'
			html += '<labe>Ngay san xuat:</label><p>'+ Response.nsxDate +'</p>'
			html += '<label>Branch:</label><p>'+ Response.branch +'</p>'
			html += '<label>Sold:</label><p>'+ Response.sold +'</p>'
			
			elements.innerHTML = html
		}
	}
	xhttp.open("GET","api/"+ window.location.pathname.substring(8), false)
	xhttp.setRequestHeader("Content-type", "application/json")
	xhttp.send()
}