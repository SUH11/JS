
/*
	用法：
		ajax({
			method : 'get',
			url : '4.getNewS.php',
			data : '',
			success : function(data){
				data = JSON.parse(data);
				getData(data);
			}
		});
*/
// 封装一个ajax方法
function ajax(json){

	var xhr = null;
	
	try{
		xhr = new XMLHttpRequest();
	} catch(e){
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}

	if (json.method == 'get' && json.data) {
		json.url += '?' + json.data;
	}
	
	xhr.open(json.method,json.url,true);

	if (json.method == 'get') {
		xhr.send();
	} else {
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		xhr.send(json.data);
	}


	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				json.success && json.success(xhr.responseText);
			} else{
				alert('出错啦，Error：'+xhr.status)
			}
		}
	}
}					