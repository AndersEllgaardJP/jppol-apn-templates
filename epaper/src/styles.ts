export const styles = `html, body {
	width: 100%;
	height: 100%;
}
body, td, th {
	font-family: Tahoma, Geneva, sans-serif;
	font-size: 14px;
	color: #333;
	line-height: 21px;

	background-color:#fff;
}
#epaper_eb_banner,
#epaper_eb_banner_container,
#epaper_eb_banner_logo,
#epaper_eb_banner_txt,
#epaper_eb_banner_pointer {
	position:absolute;
	width: 100%;
	height: 100%;
	cursor: pointer;
	background-repeat: no-repeat;
	background-position: center center;
	background-size:contain;
}
#epaper_eb_banner {
	/*background-color:#fff;*/

	background: -webkit-linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));
	background: -ms-linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));
	background: linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.0));
	overflow: hidden;
}
#epaper_eb_banner_container {}

#epaper_eb_banner_logo {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	height:51px;
	width:100%;
	padding:10px;
}
#epaper_eb_banner_logo > div {
	height:100%;
	width:100%;
	display:block;
}
#epaper_eb_banner_content {
	position: absolute;
	margin-top:51px;
	display: flex;
	justify-content: center;
	width: 100%;
	height: calc(100% - 51px);
}

.epaper_eb_banner_content_left, .epaper_eb_banner_content_right {
	width: 40px;
}
.epaper_eb_banner_content_center {
	height: 100%;
}
.epaper_eb_banner_content_right {}
.epaper_eb_banner_content_right .lastpage_arrow {
	font-size:40px;
	font-weight:bold;
	margin-top:20px;
	color:#fff;
}
.epaper_eb_banner_content_right .nextpage_arrow {
	font-size:57px;
	font-weight:bold;
	margin-top: calc(50vh - 122px);
	margin-left:-10px;
	color:#fff;
}
.epaper_eb_banner_content_center img {
	position: relative;
	height: 515px;
	width: auto;
	top:50%;
	transform:translateY(-50%);

	-moz-box-shadow: 	3px 3px 5px 1px rgba(0,0,0,0.3);
	-webkit-box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.3);
	box-shadow: 		3px 3px 5px 1px rgba(0,0,0,0.3);
}
.epaper_eb_banner_content_center img:nth-child(2) {
	-moz-box-shadow: 	4px 3px 5px 1px rgba(0,0,0,0.3);
	-webkit-box-shadow: 4px 3px 5px 1px rgba(0,0,0,0.3);
	box-shadow: 		4px 3px 5px 1px rgba(0,0,0,0.3);
}

#epaper_eb_banner_txt {}
#epaper_eb_banner_pointer {
	width:30px;
	height:30px;
	overflow:visible;
	left:50%;
	top:50%;
	-webkit-transform: translate(203px,34px) scale(1.1) rotate(-27deg);
	transform: translate(203px,34px) scale(1.1) rotate(-27deg);
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}
#epaper_eb_banner_pointer svg {
	width:100%;
	filter: drop-shadow(0px 3px 3px rgba(0,0,0,0.35));
}
.pointer_stroke {
	fill: #000;
}
.pointer_fill {
	fill: url(#grad1);
}
#epaper_eb_banner_container:hover #epaper_eb_banner_pointer {
	-webkit-transform: translate(200px,30px) scale(1) rotate(-32deg);
	transform: translate(200px,30px) scale(1) rotate(-32deg);

}
.moveL {
	-webkit-animation: moveLeft 3s ease-out 1;
	animation: moveLeft 3s ease-out 1;
}
.moveR {
	-webkit-animation: moveRight 3s ease-out 1;
	animation: moveRight 3s ease-out 1;
}
@-webkit-keyframes moveRight {
	0% {-webkit-transform: translateX(0%);}
	10% {-webkit-transform: translateX(100%);}
	100% {-webkit-transform: translateX(100%);}
}
@keyframes moveRight {
	0% {transform: translateX(0%);}
	10% {transform: translateX(100%);}
	100% {transform: translateX(100%);}
}
@-webkit-keyframes moveLeft {
	0% {-webkit-transform: translateX(0%);}
	10% {-webkit-transform: translateX(-100%);}
	100% {-webkit-transform: translateX(-100%);}
}
@keyframes moveLeft {
	0% {transform: translateX(0%);}
	10% {transform: translateX(-100%);}
	100% {transform: translateX(-100%);}
}`;