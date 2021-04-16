{
	"My Own Tubs JS": {
		"scope": "javascript,typescript",
		"prefix": "tubsnippet",
		"body": [
			"const tubItems = document.querySelectorAll(\".tub__item\");",
			"for (let i = 0; i < tubItems.length; i++) {",
			"  tubItems[i].addEventListener(\"click\", function () {",
			"    if (!this.classList.contains(\"opened\")) {",
			"      for (let i = 0; i < tubItems.length; i++) {",
			"        tubItems[i].classList.remove(\"opened\");",
			"      }",
			"      this.classList.add(\"opened\");",
			"    }",
			"  });",
			"}"
		],
		"description": "include tubs code js"
	}
}


{
	"PopUp JS v1.0": {
		"scope": "javascript,typescript",
		"prefix": "popup_v1",
		"body": [
			"  const popupLinks = document.querySelectorAll(\".popup__link-one\");",
			"  const mainHeader = document.querySelector(\"#main-header\");",
			"  const popup = document.querySelector(\"#popup\");",
			"  const area = document.querySelector(\".popup__area\");",
			"  const closePopup = document.querySelector(\".popup__close\");",
			"  for(i=0; i<popupLinks.length;i++){",
			"    popupLinks[i].onclick = () => {",
			"      popup.classList.add('opened');",
			"      mainHeader.style.zIndex = '-1';",
			"      event.preventDefault();",
			"    }",
			"  }",
			"  area.onclick = ()=>{",
			"    popup.classList.remove('opened');",
			"    mainHeader.style.zIndex = '999';",
			"  }",
			"  closePopup.onclick = ()=>{",
			"    popup.classList.remove('opened');",
			"    mainHeader.style.zIndex = '999';",
			"  }"
		],
		"description": "includes popup code js"
	}
}


{
	"Transition": {
		"scope": "css, scss",
		"prefix": "trans",
		"body": [
			"transition: all .3s ease 0s;",
			"$1"
		],
		"description": "Log output to console"
	}
}
