/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const set = new Map(englishToBrailleLiteralSet);

function converter() {
  const s = document.getElementById('sourceLangText').value;
  let result = '';
  let i = 0;
  for (i = 0; i < s.length; i += 1) {
    result += set.get(s[i]);
  }
  document.getElementById('targetLangText').innerHTML = result;
}

window.onload = function () {
  const btn = document.getElementById('btnConvertEnglishToBraille');
  btn.addEventListener('click', converter);
};
