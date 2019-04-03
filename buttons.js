var xmlhttp=createXmlHttpObject();
function createXmlHttpObject()
{
	if(window.XMLHttpRequest)
	{
	xmlhttp=new XMLHttpRequest();
	}
	else{xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	}
	return xmlhttp;
}

	
//ovládání tlačítky
function buttonHandle(id)
{
	
	if (id=='button_station_+')
	{
		xmlhttp.open('PUT', '/button?status=button_station_+', true);
		xmlhttp.send(null);
	}
	if (id=='button_station_-')
	{
		xmlhttp.open('PUT', '/button?status=button_station_-', true);
		xmlhttp.send(null);
	}
	if (id=='zap10s')
	{
		xmlhttp.open('PUT', '/button?status=zap10s', true);
		xmlhttp.send(null);
	}
	if (id=='zap10s')
	{
		xmlhttp.open('PUT', '/button?status=zap10s', true);
		xmlhttp.send(null);
	}
	if (id=='zap10s')
	{
		xmlhttp.open('PUT', '/button?status=zap10s', true);
		xmlhttp.send(null);
	}
	if (id=='zap10s')
	{
		xmlhttp.open('PUT', '/button?status=zap10s', true);
		xmlhttp.send(null);
	}
	if (id=='zap10s')
	{
		xmlhttp.open('PUT', '/button?status=zap10s', true);
		xmlhttp.send(null);
	}
	if (id=='zap10s')
	{
		xmlhttp.open('PUT', '/button?status=zap10s', true);
		xmlhttp.send(null);
	}
	
	
}

	