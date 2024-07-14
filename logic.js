document.head.insertAdjacentHTML('afterbegin',`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>aashvik</title>
<link rel="stylesheet" href="../style.css">
<link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Archivo&display=swap" rel="stylesheet">
`);

document.head.insertAdjacentHTML('beforeend',`
<link type="image/x-icon" href="https://www.daylily.com/auctionfiles/star-2.gif"></link>
`);

document.body.insertAdjacentHTML('afterbegin',`
<script src="logic.js"></script>
<a class="headera" href="home.html"><header>AshT</header></a>
<nav>
    <a href="home.html#about">about</a>
    <a href="home.html#projects">projects</a>
    <a href="home.html#todo">todo</a>
</nav>
`);

document.body.insertAdjacentHTML('beforeend',`
<footer>
    © 2024 AshT. All rights burgled by raccoons.
    <label for="color-dd">[palette: </label>
    <select id="color-dd" onchange="changePalette()">
        <option>pulpe</option> <!--purple/green-->
        <option>b/o/w</option> <!--black on white-->
        <option selected='selected'>w/o/b</option> <!--white on black-->
        <option>clbd1</option> <!--colorblind friendly 1-->
        <option>clbd2</option> <!--colorblind friendly 2-->
        <option>bnshk</option> <!--banana shake-->
    </select>]
    <br>
    <a href="https://www.youtube.com/@AashvikT">youtube</a> /
    <a href="https://github.com/AashvikTyagi">github</a> /
    <a href="https://stackoverflow.com/users/17048834/aashvikt">stack</a> /
    <a href="mailto:its.aashvik.tyagi@gmail.com">email</a> /
    <a href="https://www.reddit.com/user/aashviktyagi/">reddit</a> /
    <a href="http://discordapp.com/users/aashvikt">discord</a>
</footer>
`);

const colorPalettes = [
    ["#52307c","#00ff80","#8a2be2","#e0c6f7"],
    ["#ffffff","#000000","#5478b8","#292929"],
    ["#000000","#ffffff","#5478b8","#dfe5f2"],
    ["#ffffff","#000000","#ffa500","#525252"],
    ["#f2f2f2","#333333","#ffd700","#5a5a5a"],
    ["#f2dfbb","#d9984a","#f2f2f2","#e3b47b"]
]
const colors=['--bck-color','--txt-color','--hgl-color','--link-color']
function changePalette(){
    palette = colorPalettes[document.querySelector('#color-dd').selectedIndex];
    for(let i=0;i<colorPalettes[0].length;i++)document.body.style.setProperty(colors[i],palette[i]);
}