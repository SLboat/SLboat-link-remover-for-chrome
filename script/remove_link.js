
function checkForValidUrl(tabId, changeInfo, tab) {
//todo:处理损坏的浏览器地址
//console.log("当前地址:",tab.url)

if (tab.url.indexOf('see.sl088.com') > -1) {
		//显示它
	  	chrome.pageAction.show(tabId);
	}

	//通常性的全显示
	chrome.pageAction.show(tabId);
};

//开启ID
function Set_Link(tabId){
	//设置开启icon
	chrome.pageAction.setIcon({tabId: tabId, path: "./img/link_38.png"});
}

//关闭Icon
function Set_Broken(tabId){
	//设置关闭icon
	chrome.pageAction.setIcon({tabId: tabId, path: "./img/broken_38.png"});
}

//点击事件-它肯定是存在才有
chrome.pageAction.onClicked.addListener(function(tab){
	//注销玩意
	Set_Broken(tab.id);//破灭
	//jQuery注入移除
	chrome.tabs.sendMessage(tab.id,{work: "remove"}); //送入命令
})

chrome.tabs.onUpdated.addListener(checkForValidUrl);
