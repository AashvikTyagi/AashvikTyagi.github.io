const today = new Date(), month = today.getMonth(), date = today.getDate();

document.head.insertAdjacentHTML('afterbegin',`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="stylesheet" href="/style.css">
`);

document.body.insertAdjacentHTML('afterbegin',`
<div class="bar" id="top">
    <a class="strong" href="/">AashvikT</a>&ensp;
    ${
        month==0 && date==1 ? "hny" :
        month==1 && date==7 ? "e" :
        month==1 && date==13 ? "📻" :
        month==2 && date==14 ? "π" :
        month==3 && date==25 ? "🍰" :
        month==3 && date==26 ? "👽" :
        (month==5 || month==11) && date==21 ? "🔥❄️" :
        month==8 && date==26 ? "🤖" :
        month==9 && date==23 ? "mol" :
        month==9 && date==25 ? "🎃" :
        month==11 && date==25 ? "🎄" :
        "¯\\_(ツ)_/¯"}
</div>
<br>
`);

document.body.insertAdjacentHTML('beforeend',`
<br>
<a href="https://validator.w3.org/nu/?doc=https://aashvik.com">w3c xhtml✓</a>&ensp;
<a href="https://jigsaw.w3.org/css-validator/validator?uri=https://aashvik.com">w3c css✓</a>&ensp;
<a href="https://250kb.club/aashvik-com">250kb club member</a>
<div class="bar">
    © 2024 AshT. All rights burgled by raccoons.
    <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io">Source code</a>
    is <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io/blob/main/LICENSE.md">MIT</a>,
    content is <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA</a>.
    <a href="#top">Go to top</a>.
</div>
`);
