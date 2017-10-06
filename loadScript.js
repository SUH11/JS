/*
  引入script文件，与<scrip type="text/javascript" scr="url"></script>一致
*/
function loadScript(url) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	document.body.appendChild(script);
}
