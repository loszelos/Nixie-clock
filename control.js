//definice xmlhttp objektu - prostředku pro předávání informací mezi
//sketchem v ESP8266 - jeho xml soubor v RAM a HTML stránkou
var xmlHttp=createXmlHttpObject();
function createXmlHttpObject()
{
	if(window.XMLHttpRequest)
	{
	xmlHttp=new XMLHttpRequest();
	}
	else{xmlHttp=new ActiveXObject('Microsoft.XMLHTTP');
	}
	return xmlHttp;
}

//procesk, který rozběhneme na pozadí stránky - v browseru každou sekundu
function process()
{
	//načteme si xml soubor metodou PUT jej dostaneme do browseru
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4)
	{
		xmlHttp.open('PUT','xml',true);
		//xml soubor podrobíme analýze zavoláním funkce
		xmlHttp.onreadystatechange=handleTimer;
		xmlHttp.send(null);
	}
	//spustíme časování co sekundu (500 milisekund)
	setTimeout('process()',500);
	
}

//analyzujeme xml soubor
function handleTimer()
{
	if(xmlHttp.readyState==4 && xmlHttp.status==200)
	{
		xmlResponse=xmlHttp.responseXML;
        //totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		//totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('name');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('name').innerHTML=message;
        xmldoc = xmlResponse.getElementsByTagName('url');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('url').innerHTML=message;
		//snažíme se pohledat uzavřený tag <runtime></runtime>
		xmldoc = xmlResponse.getElementsByTagName('tags');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = time
		document.getElementById('tags').innerHTML=message;
		//totéž učiníme s teplotou, hledáme uzavřený tag <tempIN></tempIN>
		xmldoc = xmlResponse.getElementsByTagName('language');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('language').innerHTML=message;
		//totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('codec');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('codec').innerHTML=message;
        //totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('bitrate');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('bitrate').innerHTML=message;
        //totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('id');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('id').innerHTML=message;
        //totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('country');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('country').innerHTML=message;
        //totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('homepage');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('homepage').innerHTML=message;
        //totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('votes');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('votes').innerHTML=message;
        //totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('negative_votes');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('negative_votes').innerHTML=message;
        //totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('last_check_time');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('last_check_time').innerHTML=message;
        //totéž učiníme s teplotou, hledáme uzavřený tag <tempOUT></tempOUT>
		xmldoc = xmlResponse.getElementsByTagName('favicon');
		//vydolujeme data, která se skrývají uvnitř tagu
		message = xmldoc[0].firstChild.nodeValue;
		//pošleme tato data html prvku s id = temperature
		document.getElementById('favicon').innerHTML=message;
	}	
}

  