let msgjson = [{
		"name": "张根瑞",
		"chatpic": "img/zgr.jpg",
		"time": "23:59",
		"messagelist": [{
				"type": "right",
				"msg": "发疯文学"
			},
			{
				"type": "left",
				"msg": "自从得了精神病"
			},
			{
				"type": "left",
				"msg": "整个人都精神多了"
			},
			{
				"type": "right",
				"msg": "你说的很对"
			},
			{
				"type": "left",
				"msg": "是嘞"
			},
			{
				"type": "right",
				"msg": "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
			},
			{
				"type": "left",
				"msg": "哈哈哈哈哈哈哈"
			}
		]
	},
	{
		"name": "宋豪峰",
		"chatpic": "img/shf.jpg",
		"time": "00:00",
		"messagelist": [{
				"type": "right",
				"msg": "吃饭了没得"
			},
			{
				"type": "left",
				"msg": "吃辣，你累"
			},
			{
				"type": "right",
				"msg": "我也吃了"
			},
			{
				"type": "left",
				"msg": "那就好"
			}
		]
	},
	{
		"name": "张立新",
		"chatpic": "img/zlx.jpg",
		"time": "00:01",
		"messagelist": [{
				"type": "right",
				"msg": "你在干嘛？"
			},
			{
				"type": "left",
				"msg": "我在学习"
			},
			{
				"type": "right",
				"msg": "学习什么"
			},
			{
				"type": "left",
				"msg": "学习Web前端设计"
			},
			{
				"type": "left",
				"msg": "哇趣"
			}
		]
	},
	{
		"name": "王中瑶",
		"chatpic": "img/wzy.jpg",
		"time": "00:02",
		"messagelist": [{
				"type": "right",
				"msg": "Web作业啥时候收呢？"
			},
			{
				"type": "left",
				"msg": "周五交给我"
			},
			{
				"type": "right",
				"msg": "命名方式是班级姓名学号吗？"
			},
			{
				"type": "left",
				"msg": "是的是的"
			}
		]
	},
	{
		"name": "刘雯豫",
		"chatpic": "img/lwy.jpg",
		"time": "00:03",
		"messagelist": [{
				"type": "left",
				"msg": "求求你给我建乐园"
			},
			{
				"type": "right",
				"msg": "喊声哥听听"
			},
			{
				"type": "left",
				"msg": "大哥"
			},
			{
				"type": "right",
				"msg": "二弟"
			}
		]
	},
	{
		"name": "测试消息",
		"chatpic": "img/face.png",
		"time": "00:04",
		"messagelist": [{
				"type": "left",
				"msg": "测试消息0"
			},
			{
				"type": "right",
				"msg": "测试消息0"
			}
		]
	},
	{
		"name": "测试消息",
		"chatpic": "img/friends.png",
		"time": "00:05",
		"messagelist": [{
				"type": "left",
				"msg": "测试消息1"
			},
			{
				"type": "right",
				"msg": "测试消息1"
			}
		]
	},
	{
		"name": "测试消息",
		"chatpic": "img/more.png",
		"time": "00:06",
		"messagelist": [{
				"type": "left",
				"msg": "测试消息2"
			},
			{
				"type": "right",
				"msg": "测试消息2"
			}
		]
	},
	{
		"name": "测试消息",
		"chatpic": "img/ms.png",
		"time": "00:07",
		"messagelist": [{
				"type": "left",
				"msg": "测试消息3"
			},
			{
				"type": "right",
				"msg": "测试消息3"
			}
		]
	},
	{
		"name": "测试消息",
		"chatpic": "img/phone.png",
		"time": "00:08",
		"messagelist": [{
				"type": "left",
				"msg": "测试消息4"
			},
			{
				"type": "right",
				"msg": "测试消息4"
			}
		]
	},
	{
		"name": "测试消息",
		"chatpic": "img/person.png",
		"time": "00:09",
		"messagelist": [{
				"type": "left",
				"msg": "测试消息5"
			},
			{
				"type": "right",
				"msg": "测试消息5"
			}
		]
	}
];

function showpersonlist() {
	document.getElementById("personlist").innerHTML = "";
	let i = 0;
	for (let list of msgjson) {
		console.log(list.messagelist);
		// 获取指定的div元素
		let container = document.getElementById("personlist");
		// 创建一个新的div元素
		let newDiv = document.createElement("div");
		// 添加样式类
		newDiv.setAttribute("id", "listitem");
		showmsg(msgjson[0].name, msgjson[0].chatpic, msgjson[0].messagelist, i);
		newDiv.innerHTML = `
						<div id="listitem" onclick="showmsg(msgjson[${i}].name,msgjson[${i}].chatpic,msgjson[${i}].messagelist,${i})">
							<span id="headpic">
								<img src="${list.chatpic}">
							</span>
							<div id="info">
								<div id="upinfo">
									<span id="inname">${list.name}</span>
									<span id="intime">${list.time}</span>
								</div>
								<div id="underinfo">
									${list.name}: ${list.messagelist[list.messagelist.length-1].msg}
								</div>
							</div>
						</div>
					`;
		// 将新的div元素添加到指定的div中
		container.appendChild(newDiv);
		i++;
	}
}
showpersonlist();

function showmsg(name, chatpic, messagelist, i) {
	// 获取要设置data-*属性的div元素
	let sendbt = document.querySelector('#sendbt');
	// 设置data-flag属性的值为true
	sendbt.setAttribute('data-flag', i);
	document.getElementById("chattitle").innerHTML = name;
	document.getElementById("chatinfo").innerHTML = "";
	for (let message of messagelist) {
		// 获取指定的div元素
		let container = document.getElementById("chatinfo");
		// 创建一个新的div元素
		let newDiv = document.createElement("div");
		// 添加样式类
		if (message.type == "right") {
			newDiv.setAttribute("id", "chatright");
			newDiv.innerHTML = `<div id="chatpic"><img src="img/mine.jpg"></div><div id="chatmsg">${message.msg}</div>`;
		} else {
			newDiv.setAttribute("id", "chatleft");
			newDiv.innerHTML = `<div id="chatpic"><img src="${chatpic}"></div><div id="chatmsg">${message.msg}</div>`;
		}
		// 将新的div元素添加到指定的div中
		container.appendChild(newDiv);
	}
}

function sendmsg() {
	// 获取带有data-flag属性的div元素
	let sendbt = document.querySelector('#sendbt[data-flag]');
	// 获取data-flag属性的值
	let flagValue = sendbt.getAttribute('data-flag');
	console.log(flagValue);
	// 获取指定的div元素
	let container = document.getElementById("chatinfo");
	// 创建一个新的div元素
	let newDiv = document.createElement("div");
	let textarea = document.getElementById("sendtext");
	let content = textarea.value;
	if (content) {
		newDiv.setAttribute("id", "chatright");
		newDiv.innerHTML = `<div id="chatpic"><img src="img/mine.jpg"></div><div id="chatmsg">${content}</div>`;
		msgjson[flagValue].messagelist.push({
			"type": "right",
			"msg": content
		});
		container.appendChild(newDiv);
	}
	textarea.value = "";
}
document.getElementById("sendtext").addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault(); // 阻止默认的回车键行为
		sendmsg();
	}
});