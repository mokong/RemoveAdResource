/*
移除海雀APP开屏广告
*/

let body = "";
const url = $request.url;
let obj = JSON.parse($request.body);

if (url.includes("/appad/cmd/AppadGetSplashAds")) {
	// 处理开屏广告
	obj.data = {
		code: 0,
		count: 0,
		request_id: "12345",
		code_msg: "",
		body: [],
	};
} else if (url.includes("/appad/cmd/AppadGetBannerAds")) {
	// 处理横幅广告
	obj.data = {
		code: 0,
		count: 0,
		request_id: "12345",
		code_msg: "",
		body: [],
	};
}

$done({ body: JSON.stringify(obj) });
