list()
function list(){
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function(){
		var responseJSON = xhttp.responseText
		var Response = JSON.parse(responseJSON)
		var search = document.getElementById("result-search")
		search.innerHTML = ''
		if (xhttp.status == 200){
			var listElements = document.getElementById("list")
			var listHTML = ''
			for (var i = 0; i < Response.length; i++){
				listHTML += '<tr><td>'+(i+1)+'</td>'
				listHTML += '<td>'+ Response[i].name + '</td>'
				listHTML += '<td>'+ Response[i].nsxDate + '</td>'
				listHTML +='<td>'+ Response[i].branch + '</td>'
				listHTML += '<td>'+ Response[i].sold + '</td>'
				listHTML += '<td><div><a href = "/detail/'+ Response[i].id+'">View</div></td></tr>'
				//alert(Response[i].name)
			}
			listElements.innerHTML = listHTML
			console.log(listHTML)
		}
		else{
			
		}
		
	}
	xhttp.open("GET", "/api", false)
	xhttp.setRequestHeader("Content-type", "application/json")
	xhttp.send()
}

function search(event, key) {
  if (event.keyCode === 13) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      var ResponseJSON = xhttp.responseText;
      var Response = JSON.parse(ResponseJSON);
      if (xhttp.status == 200 && key != null) {
        alert(Response.length);
        var listElements = document.getElementById("result-search");
        var listHTML = '';
        listHTML += '<h1>Danh sách tìm kiếm</h1>';
        listHTML += '<table><tr><th>STT</th><th>Tên</th><th>Ngày sản xuất</th><th>Thương hiệu</th><th>Số lượng đã bán</th></tr><tbody>';
        for (var i = 0; i < Response.length; i++) {
          listHTML += '<tr>';
          listHTML += '<td>' + (i + 1) + '</td>';
          listHTML += '<td>' + Response[i].name + '</td>';
          listHTML += '<td>' + Response[i].nsxDate + '</td>';
          listHTML += '<td>' + Response[i].branch + '</td>';
          listHTML += '<td>' + Response[i].sold + '</td>';
          listHTML += '</tr>';
        }
        listHTML += '</tbody></table>';
        listElements.innerHTML = listHTML;
      } else {
        window.location = "/list";
      }
    };
    xhttp.open("GET", "/api/search/" + key, false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
  }
}
