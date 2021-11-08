function walk(rootNode) {
  // Find all the text nodes in rootNode
  var walker = document.createTreeWalker(
      rootNode,
      NodeFilter.SHOW_TEXT,
      null,
      false
  ),
  node;

  // Modify each text node's value
  while (node = walker.nextNode()) {
      handleText(node);
  }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v) {
  const char_map = {
    "あ": "ア",
    "い": "イ",
    "う": "ウ",
    "え": "エ",
    "お": "オ",
    "か": "カ",
    "き": "キ",
    "く": "ク",
    "け": "ケ",
    "こ": "コ",
    "さ": "サ",
    "し": "シ",
    "す": "ス",
    "せ": "セ",
    "そ": "ソ",
    "た": "タ",
    "ち": "チ",
    "つ": "ツ",
    "て": "テ",
    "と": "ト",
    "な": "ナ",
    "に": "ニ",
    "ぬ": "ヌ",
    "ね": "ネ",
    "の": "ノ",
    "は": "ハ",
    "ひ": "ヒ",
    "ふ": "フ",
    "へ": "ヘ",
    "ほ": "ホ",
    "ま": "マ",
    "み": "ミ",
    "む": "ム",
    "め": "メ",
    "も": "モ",
    "や": "ヤ",
    "ゆ": "ユ",
    "よ": "ヨ",
    "ら": "ラ",
    "り": "リ",
    "る": "ル",
    "れ": "レ",
    "ろ": "ロ",
    "わ": "ワ",
    "を": "ヲ",
    "ん": "ン",
    "が": "ガ",
    "ぎ": "ギ",
    "ぐ": "グ",
    "げ": "ゲ",
    "ご": "ゴ",
    "ざ": "ザ",
    "じ": "ジ",
    "ず": "ズ",
    "ぜ": "ゼ",
    "ぞ": "ゾ",
    "だ": "ダ",
    "ぢ": "ヂ",
    "づ": "ヅ",
    "で": "デ",
    "ど": "ド",
    "きゃ": "キャ",
    "きゅ": "キュ",
    "きょ": "キョ",
    "しゃ": "シャ",
    "しゅ": "シュ",
    "しょ": "ショ",
    "ちゃ": "チャ",
    "ちゅ": "チュ",
    "ちょ": "チョ",
    "にゃ": "ニャ",
    "にゅ": "ニュ",
    "にょ": "ニョ",
    "ひゃ": "ヒャ",
    "ひゅ": "ヒュ",
    "ひょ": "ヒョ",
    "みゃ": "ミャ",
    "みゅ": "ミュ",
    "みょ": "ミョ",
    "りゃ": "リャ",
    "りゅ": "リュ",
    "りょ": "リョ",
    "ぎゃ": "ギャ",
    "ぎゅ": "ギュ",
    "ぎょ": "ギョ",
    "じゃ": "ジャ",
    "じゅ": "ジュ",
    "じょ": "ジョ",
    "びゃ": "ビャ",
    "びゅ": "ビュ",
    "びょ": "ビョ",
    "ぴゃ": "ピャ",
    "ぴゅ": "ピュ",
    "ぴょ": "ピョ",
  }
  const re = new RegExp(Object.keys(char_map).join("|"), "g"); // setup the character search & replace 

  var v = v.replace(re, function(matched) {
      return char_map[matched]; // replace the characters
    });

  return v;
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
  // Do the initial text replacements in the document body and title
  walk(doc.body);
}

walkAndObserve(document);
