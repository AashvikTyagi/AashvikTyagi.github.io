const today = new Date(), m = today.getMonth(), d = today.getDate();

document.head.insertAdjacentHTML('afterbegin',`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width>
<link rel="icon" type="image/png" href="/favicon.png">
<style>
body {
    font-family: helvetica neue, arial, sans-serif;
    line-height: 1.5em;
    background-color: whitesmoke;
}
body, div.bar a {color: #333333}
a:hover, div.bar a:hover {color: goldenrod}
a.strong {font-weight: bold}
code {background-color: lightblue}
</style>
`);

document.body.insertAdjacentHTML('afterbegin',`
<div class="bar" id="top">
    <a class="strong" href="/">AashvikT</a>&ensp;
    ${
        m==1 && d==7 ? "e" :
        m==1 && d==13 ? "📻" :
        m==2 && d==14 ? "π" :
        m==3 && d==25 ? "🍰" :
        m==3 && d==26 ? "👽" :
        (m==5 || m==11) && d==21 ? "🔥❄️" :
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
    <a href="https://250kb.club/aashvik-com">250kb.club</a>
    <br>
    git(<a href="https://github.com/AashvikTyagi">hub</a>, <a href="https://gitlab.com/AashvikTyagi">lab</a>) /
    <a href="https://discord.com/users/828870867424378921">discord</a> /
    <a href="mailto:its.aashvik.tyagi@gmail.com">its.aashvik.tyagi (at) gmail.com</a>
    <br>
    © 2024 AshT. All rights burgled by raccoons.
    <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io">Source code</a>
    is <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io/blob/main/LICENSE.md">MIT</a>,
    content is <a href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA</a>.
</div>
`);
