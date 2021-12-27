var pinyin1 = document.getElementById("pinyin1");
var pinyin2 = document.getElementById("pinyin2");
var pinyin3 = document.getElementById("pinyin3");
var pinyin4 = document.getElementById("pinyin4");

var phraseChinese1 = document.getElementById("phraseChinese1");
var phraseChinese2 = document.getElementById("phraseChinese2");
var phraseChinese3 = document.getElementById("phraseChinese3");
var phraseChinese4 = document.getElementById("phraseChinese4");

var phraseEnglish = document.getElementById("phraseEnglish");

var button = document.getElementById("button");
var random = Math.random();

// Arrays for pinyin and Chinese characters
var p1 = [
	"HU",
	"TIAN",
	"MEI",
	"DAO",
	"SHENG",
	"DAI",
	"CHI",
	"REN"
];

var p2 = [
	"NIAN",
	"MEI",
	"TIAN",
	"CHU",
	"HUO",
	"YUN",
	"XU",
	"QI"
];

var p3 = [
	"SHUN",
	"DONG",
	"KAI",
	"YOU",
	"ZI",
	"TUI",
	"NI",
	"MAN"
];

var p4 = [
	"XIN",
	"REN",
	"XIN",
	"FAN",
	"ZAI",
	"SAN",
	"LING",
	"MAN"
];

var phrasesC1 = [
	"虎",
	"甜",
	"每",
	"到",
	"生",
	"歹",
	"持",
	"人"
];

var phrasesC2 = [
	"年",
	"美",
	"天",
	"處",
	"活",
	"運",
	"續",
	"氣"
];

var phrasesC3 = [
	"順",
	"動",
	"開",
	"有",
	"自",
	"退",
	"逆",
	"滿"
];

var phrasesC4 = [
	"心",
	"人",
	"心",
	"飯",
	"在",
	"散",
	"齡",
	"滿"
];

// English phrases
// Translations taken from here: http://www.travelsintranslation.com/2014/01/cantonese-chinese-new-year-phrases/
var phrasesE = [
	"(I think you are super temperamental)",//覺得妳超有氣質
	"(Your voice is sweet as honey)",//妳的聲音甜如蜜
	"(Lucky to know you)",//能認識妳超幸運
	"(It's nice to have you in life)",//生命裡有妳真美好
	"(Unique beauty in the world)",//世界上絕無僅有的美
	"(Your eyes are super spiritua)",//妳的眼睛超有靈性
	"(Unforgettable gravity)",//令人無法忘懷的引力
	"(Kindness, temperament and etiquette all in one)"//善良 氣質 禮儀 集於一身
];
//順風順水 SHUN,FENG-SHUN-SHUI  仙姿玉色 Fairy jade
// Sets text content as random phrase from arrays
pinyin1.textContent = p1[Math.floor(random * p1.length)];
pinyin2.textContent = p2[Math.floor(random * p2.length)];
pinyin3.textContent = p3[Math.floor(random * p3.length)];
pinyin4.textContent = p4[Math.floor(random * p4.length)];
phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];

var onClick = function() {
	var random = Math.random();

	pinyin1.textContent = p1[Math.floor(random * p1.length)];
	pinyin2.textContent = p2[Math.floor(random * p2.length)];
	pinyin3.textContent = p3[Math.floor(random * p3.length)];
	pinyin4.textContent = p4[Math.floor(random * p4.length)];
	phraseChinese1.textContent = phrasesC1[Math.floor(random * phrasesC1.length)];
	phraseChinese2.textContent = phrasesC2[Math.floor(random * phrasesC2.length)];
	phraseChinese3.textContent = phrasesC3[Math.floor(random * phrasesC3.length)];
	phraseChinese4.textContent = phrasesC4[Math.floor(random * phrasesC4.length)];
	phraseEnglish.textContent = phrasesE[Math.floor(random * phrasesE.length)];
}

// Sets text content as random phrase when button is clicked
button.addEventListener("click", onClick);