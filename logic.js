const today = new Date(), m = today.getMonth(), d = today.getDate();

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
        m==0 && d==1 ? "hny" :
        m==1 && d==7 ? "e" :
        m==1 && d==13 ? "📻" :
        m==2 && d==14 ? "π" :
        m==3 && d==25 ? "🍰" :
        m==3 && d==26 ? "👽" :
        (m==5 || d==11) && date==21 ? "🔥❄️" :
        m==8 && d==26 ? "🤖" :
        m==9 && d==23 ? "mol" :
        m==9 && d==25 ? "🎃" :
        m==11 && d==25 ? "🎄" :
        "¯\\_(ツ)_/¯"
    }
</div>
<br>
`);

document.body.insertAdjacentHTML('beforeend',`
<br>
<div class="bar">
    <a href="https://validator.w3.org/nu/?doc=https://aashvik.com">w3c xhtml✓</a>&ensp;
    <a href="https://jigsaw.w3.org/css-validator/validator?uri=https://aashvik.com">w3c css✓</a>&ensp;
    <a href="https://250kb.club/aashvik-com">250kb club member</a>
    <br>
    © 2024 AshT. All rights burgled by raccoons.
    <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io">Source code</a>
    is <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io/blob/main/LICENSE.md">MIT</a>,
    content is <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA</a>.
    <a href="#top">Go to top</a>.
</div>
`);
