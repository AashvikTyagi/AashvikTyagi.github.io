const today = new Date(), month = today.getMonth(), date = today.getDate();

document.head.insertAdjacentHTML('afterbegin',`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="stylesheet" href="/style.css">
`);

document.body.insertAdjacentHTML('afterbegin',`
<div class="bar" id="top">
    <a style="font-weight: 800; text-decoration: none;" href="/">AashvikT</a> :
    <a href="/#about">about</a> /
    <a href="/#projects">projects</a> /
    <a href="/#todo">todo</a>
    &ensp;
    <a href="https://www.youtube.com/@AashvikT">yt</a> /
    <a href="https://github.com/AashvikTyagi">gh</a> /
    <a href="https://stackoverflow.com/users/17048834/aashvikt">so</a> /
    <a href="mailto:its.aashvik.tyagi@gmail.com">mail</a> /
    <a href="https://www.reddit.com/user/aashviktyagi">red</a> /
    <a href="http://discordapp.com/users/aashvikt">disc</a>
    &ensp;
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
`);

document.body.insertAdjacentHTML('beforeend',`
<br>
<a style="text-decoration:none" href="https://validator.w3.org/nu/?doc=https://aashvik.com">
    <img src="https://badgen.net/static/w3c/xhtml✓" alt="w3c xhtml✓">
</a>
&ensp;
<a style="text-decoration:none" href="https://jigsaw.w3.org/css-validator/validator?uri=https://aashvik.com">
    <img src="https://badgen.net/static/w3c/css✓" alt="w3c css✓">
</a>
<footer id="foot">
    © 2024 AshT. All rights burgled by raccoons.
    <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io">Source code</a>
    is <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io/blob/main/LICENSE.md">MIT</a>,
    content is <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA</a>.
    <a href="#top">Go to top</a>.
</footer>
`);
