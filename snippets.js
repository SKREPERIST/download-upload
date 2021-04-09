{
	"@media": {
    "prefix": "@med",
    "scope": "css, scss",
    "body": [
      "@media only screen and (max-width: $1) {",
      "  $2",
      "}"
    ],
    "description": "Вставить медиа запрос"
  }
}

{
	"backgroundThree": {
		"scope": "css, scss",
		"prefix": "bgg",
		"body": [
			"background-position: center;",
			"background-repeat: no-repeat;",
			"background-size: cover;",
			"$1"
		],
		"description": "Центрирование в родителе на флексах"
	}
}


{

	"centered": {
		"scope": "css, scss",
		"prefix": "center",
		"body": [
			"display: flex;",
			"justify-content: center;",
			"align-items: center;",
			"$1"
		],
		"description": "Центрирование в родителе на флексах"
	}
}

{
	"FOR": {
		"scope": "javascript,typescript",
		"prefix": "fo",
		"body": [
			"for(let i=0;i< $1; i++){",
			"$2",
			"};"
		],
		"description": "standert cycle for()"
	}
}


{
	"include logo BEM": {
		"scope": "html",
		"prefix": "logo",
		"body": [
			"<a href=\"#\" class=\"logo\">",
			"  <img src=\"images/logo.png\" alt=\"logo\">",
			"</a>"
		],
		"description": "include logo BEM"
	}
}

{
	"NAV": {
		"scope": "html",
		"prefix": "nav1",
		"body": [
			"<nav class=\"menu\">",
			"<ul class=\"menu__list\">",
			"<li class=\"menu__list-item\">",
			"<a href=\"#\" class=\"menu__list-link\"></a>",
			"</li>",
			"<li class=\"menu__list-item\">",
			"<a href=\"#\" class=\"menu__list-link\"></a>",
			"</li>",
			"<li class=\"menu__list-item\">",
			"<a href=\"#\" class=\"menu__list-link\"></a>",
			"</li>",
			"<li class=\"menu__list-item\">",
			"<a href=\"#\" class=\"menu__list-link\"></a>",
			"</li>",
			"<li class=\"menu__list-item\">",
			"<a href=\"#\" class=\"menu__list-link\"></a>",
			"</li>",
			"</ul>",
			"</nav>"
		],
		"description": "nav menu po BEM"
	}
}

{
	"picture": {
		"scope": "html",
		"prefix": "pict",
		"body": [
      "<picture class=\"logo__img\">",
      "    <source srcset=\"images/logo-mobile.png\" media=\"(max-width: 600px)\">",
      "    <img src=\"images/logo.png\" alt=\"logo\">",
      "</picture>"
		],
		"description": "include tag picture"
	}
}

{
	"querySelector": {
		"scope": "javascript,typescript",
		"prefix": "dqs",
		"body": [
			"document.querySelector(\".$1\");",
			"$2"
		],
		"description": "fast typing 'document.querySelector()'"
	}
}


{
	"querySelectorAll": {
		"scope": "javascript,typescript",
		"prefix": "dqsa",
		"body": [
			"document.querySelectorAll(\".$1\");",
			"$2"
		],
		"description": "fast typing 'document.querySelectorAll()'"
	}
}

{
	"include section po BEM": {
		"scope": "html",
		"prefix": "sec",
		"body": [
			"<section class=\"$1\">",
			"  <div class=\"container\">",
			"    <div class=\"$1__inner\">",
			"      .$1__$2",
			"    </div>",
			"  </div>",
			"</section>"
		],
		"description": "include BEM section"
	}
}
