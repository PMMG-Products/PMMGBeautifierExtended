var clearButton = document.getElementById('clearbutton');
var loadingIndicator = document.getElementById('loadingindicator');

clearButton.addEventListener('click', function(event){ OnClear_Click(); });

function OnClear_Click()
{
	try
	{
		browser.storage.local.remove("PMMGExtended");
		browser.storage.local.remove("PMMG-Notes");
		browser.storage.local.remove("PMMG-Lists");
		browser.storage.local.remove("PMMG-Finances");
		browser.storage.local.remove("PMMG-User-Info");
		browser.storage.local.remove("PMMG-Checklists");
		browser.storage.local.remove("PMMG-Markers");
		
		
	}
	catch(err)
	{
		chrome.storage.local.remove("PMMGExtended");
		chrome.storage.local.remove("PMMG-Notes");
		chrome.storage.local.remove("PMMG-Lists");
		chrome.storage.local.remove("PMMG-Finances");
		chrome.storage.local.remove("PMMG-User-Info");
		chrome.storage.local.remove("PMMG-Checklists");
		chrome.storage.local.remove("PMMG-Markers");

	}
}

function onError(error)
{
	console.log(error);
}

function SetLoadingIndicator(isLoading)
{
	if(isLoading){
		configureButton.disabled = true;
		loadingIndicator.style.visibility = "visible";
	}else{
		configureButton.disabled = false;
		loadingIndicator.style.visibility = "hidden";
	}
}
