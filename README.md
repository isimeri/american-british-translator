# American British Translator -- [[live]](https://fcc-american-british-translator-bkde.onrender.com/)

Powered by Node.js and Express.js.
___
Pick a locale from the two available ones. Type some text in the textarea input and click on the "Translate" button.  
The words that got translated will be highlighted green in the output box.
If the translated text is the same as the original text, the output box will say "Everything looks good to me!"
___
This translator is by no means complete. All the "translatable" words and phrases can be found in the following files:
- `american-only.js` contains words and phrases that are present only in American English and their British equivalents.
- `american-to-british-spelling.js` contains words that look mostly the same across both American and British English, but have a minor spelling difference.
- `american-to-british-titles.js` contains titles like "mr." and "mrs.", that apparently come with a period in American English and no period in British English, so, yeah, those need "translation" as well.
- `british-only.js` contains words and phrases that are present only in British English and their American equivalents.
___
![translator screenshot](https://i.imgur.com/w5Idw9R.png)
___
This project is built as part of the [FreeCodeCamp's](https://www.freecodecamp.org) Quality Assurance certification.  
Inspiration for building this project can be found [here](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator).
