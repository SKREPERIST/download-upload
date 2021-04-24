// {
// 	"KeyFrames": {
// 		"scope": "css, scss",
// 		"prefix": "@keyframes",
// 		"body": [
// 			"@keyframes $1 {",
// 			"  0% {",
// 			"    $2",
// 			"  }",
// 			"  /* 50% {",
// 			"  } */",
// 			"  100% {",
// 			"    $3",
// 			"  }",
// 			"}",
// 			"$4"
// 		],
// 		"description": "include @keyframes"
// 	}
// }

// {
// 	"CSS Styles for Animation": {
// 		"scope": "css, scss",
// 		"prefix": "animationstyle",
// 		"body": [
// 			"  animation-name: $1;",
// 			"  animation-duration: 2s;",
// 			"  /* animation-timing-function: ease;",
// 			"  animation-iteration-count: 1;",
// 			"  animation-direction: normal;",
// 			"  animation-play-state: running;",
// 			"  animation-delay: 0s;",
// 			"  animation-fill-mode: none; */$2"
// 		],
// 		"description": "include styles for animation css"
// 	}
// }

// {
// 	"PopUp JS v2.0": {
// 		"scope": "javascript,typescript",
// 		"prefix": "popup_v2",
// 		"body": [
// 			"function bindModal(triggerSelector, modalSelector, closeSelector) {",
// 			"  const trigger = document.querySelectorAll(triggerSelector),",
// 			"    modal = document.querySelector(modalSelector),",
// 			"    close = document.querySelector(closeSelector);",
// 			"  trigger.forEach((item) => {",
// 			"    item.addEventListener(\"click\", (e) => {",
// 			"      if (e.target) e.preventDefault;",
// 			"      modal.style.display = \"block\";",
// 			"      document.body.style.overflow = \"hidden\";",
// 			"    });",
// 			"  });",
// 			"  close.addEventListener(\"click\", () => {",
// 			"    modal.style.display = \"none\";",
// 			"    document.body.style.overflow = \"\";",
// 			"  });",
// 			"  modal.addEventListener(\"click\", (e) => {",
// 			"    if (e.target === modal) {",
// 			"      modal.style.display = \"none\";",
// 			"      document.body.style.overflow = \"\";",
// 			"    }",
// 			"  });",
// 			"}",
// 			"function showModalByTime(selector, time) {",
// 			"  setTimeout(function () {",
// 			"    document.querySelector(selector).style.display = \"block\";",
// 			"    document.body.style.overflow = \"hidden\";",
// 			"  }, time);",
// 			"}",
// 			"bindModal(\".phone_link\", \".popup\", \".popup .popup_close\");",
// 			"showModalByTime(\".popup\", 3000);"
// 		],
// 		"description": "include popup v2"
// 	}
// }

// {
// 	"Transition": {
// 		"scope": "css, scss",
// 		"prefix": "trans",
// 		"body": [
// 			"transition: all .3s ease 0s;",
// 			"$1"
// 		],
// 		"description": "Log output to console"
// 	}
// }

{
	"Responsive css": {
		"scope": "css, scss",
		"prefix": "responsive",
		"body": [
			"padding: calc($1px + (30 - $1) * ((100vw - 320px) / (1200 - 320)));",
			"$2"
		],
		"description": "include responsive media styles"
	}
}