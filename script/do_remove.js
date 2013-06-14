chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	//删除链接
    if (request.work == "remove") {
    	if ($("#mw-content-text a").length>0) {
			$("#mw-content-text a").removeAttr("href");
		}else{
			//全局删除
			$("a").removeAttr("href");
		}
    }
 });