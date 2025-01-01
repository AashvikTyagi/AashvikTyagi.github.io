const today = new Date(), month = today.getMonth(), date = today.getDate();

document.head.insertAdjacentHTML('afterbegin',`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="stylesheet" href="/style.css">
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
`);

document.body.insertAdjacentHTML('afterbegin',`
<div class="bar" id="top">
    <a style="font-weight: 800; text-decoration: none;" href="/">AashvikT</a> :
    <a href="/#about">about</a> /
    <a href="/#projects">projects</a> /
    <a href="/#todo">todo</a> /
    <a href="#foot">contact</a> / ${
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
<footer id="foot">
    © 2024 AshT. All rights burgled by raccoons.
    <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io">Source code</a>
    is <a href="https://github.com/AashvikTyagi/AashvikTyagi.github.io/blob/main/LICENSE.md">MIT</a>,
    content is <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA</a>.
    <a href="https://www.youtube.com/@AashvikT">yt</a> /
    <a href="https://github.com/AashvikTyagi">gh</a> /
    <a href="https://stackoverflow.com/users/17048834/aashvikt">so</a> /
    <a href="mailto:its.aashvik.tyagi@gmail.com">mail</a> /
    <a href="https://www.reddit.com/user/aashviktyagi">red</a> /
    <a href="http://discordapp.com/users/aashvikt">disc</a>.
    <label for="color-dd">
    palette: </label>
    <select id="color-dd" onchange="changePalette()">
        <option>pulpe</option> <!--purple/green-->
        <option>b/o/w</option> <!--black on white-->
        <option>w/o/b</option> <!--white on black-->
        <option>clbd1</option> <!--colorblind-friendly 1-->
        <option>clbd2</option> <!--colorblind-friendly 2-->
        <option>bnshk</option> <!--banana shake-->
        <option>mnion</option> <!--minion-->
        <option>tensy</option> <!--teensy 4.1 green-->
        <option>minty</option> <!--grey mint green-->
        <option>invyc</option> <!--dark hacker news-->
        <option>hcknw</option> <!--hacker news-->
        <option>lspcl</option> <!--la speciale-->
        <option selected="selected">gruvb</option> <!--gruvbox dark-->
    </select>.
    <a href="#top">go to top</a>.
</footer>
`);

const colorPalettes = [
    ["#52307c","#00ff80","#8a2be2","#e0c6f7"],
    ["#ffffff","#000000","#5478b8","#292929"],
    ["#000000","#ffffff","#5478b8","#dfe5f2"],
    ["#ffffff","#000000","#ffa500","#525252"],
    ["#f2f2f2","#333333","#ffd700","#5a5a5a"],
    ["#f2dfbb","#d9984a","#f2f2f2","#e3b47b"],
    ["#202020","#f6f6ef","#ffcd00","#828282"],
    ["#202020","#f6f6ef","#6acf65","#ffffff"],
    ["#ffffff","#202020","#28d28c","#292929"],
    ["#202020","#f6f6ef","#ff6600","#ffffff"],
    ["#f6f6ef","#202020","#ff6600","#1c1d1f"],
    ["#070707","#00a9a6","#fbf1c7","#de423e"],
    ["#1d2021","#fbf1c7","#458588","#b8bb26"],
]

const colors = ['--bck-color', '--txt-color', '--hgl-color', '--link-color']
function changePalette(){
    palette = colorPalettes[document.querySelector('#color-dd').selectedIndex];
    for (let i=0; i<colorPalettes[0].length; i++) document.body.style.setProperty(colors[i], palette[i]);
}
