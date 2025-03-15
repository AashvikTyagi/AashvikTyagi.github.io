const today = new Date(), m = today.getMonth(), d = today.getDate();

document.head.insertAdjacentHTML('afterbegin',`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        Map([
            [[0, 1], "hny"],
            [[1, 7], "e"], 
            [[1, 13], "📻"],
            [[2, 14], "π"],
            [[3, 25], "🍰"],
            [[3, 26], "👽"],
            [[5, 21], "🔥❄️"],
            [[11, 21], "🔥❄️"],
            [[8, 26], "🤖"],
            [[9, 23], "mol"],
            [[9, 25], "🎃"],
            [[11, 25], "🎄"],
        ]).get([m, d].toString() || "¯\\_(ツ)_/¯"
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
    git(<a href="https://github.com/AashvikTyagi">hub</a>, <a href="https://gitlab.com/AashvikTyagi">lab</a>) /
    <a href="https://discord.com/users/828870867424378921">discord</a> /
    <a href="mailto:its.aashvik.tyagi@gmail.com">its.aashvik.tyagi (at) gmail.com</a>
    <br>
    © 2024 AshT. All rights burgled by raccoons.
    <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io">Source code</a>
    is <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io/blob/main/LICENSE.md">MIT</a>,
    content is <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA</a>.
</div>
`);
