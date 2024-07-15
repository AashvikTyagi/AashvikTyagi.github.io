# Well hello there!
This repo hosts the entirety of my website, [_aashvik.com_](http://www.aashvik.com/), a home to my projects and a portfolio of sorts.

## Why here?
I wanted to write my own site, to use custom js/css for interactive elements, and to use my custom domain with free hosting, so I made this to replace my ugly wordpress(.com) site.

## Interactive elements? <sup>Logic?</sup> <sub>Wut u sayin?</sub>
You can change the color scheme from the palette dropdown in the footer, and js lets me implement a common environment/header/footer/background across all of this website's pages!

## Repo structure:
`main` contains the CNAME file for my DNS, a git thingamajig, a favicon, an `index.html` redirect page to `pages/home.html`, and the readme markdown file you're reading.
Along with these, it also contains the `logic.js` javascript file and the `style.css`, well, css styling file.

### simply genius things
The css file is pretty standard, you know, containing all the different fonts and sizes, except in that it has variables for the colors used:
`--bck-color`, `--txt-color`, `--hgl-color`, and `--link-color`, changeable using javascript to apply different 'color schemes'.
The javascript file contains a bunch of color values in lists, and a function named `changePalette()` called whenever a different palette option is selected to change the css variable accordingly.

Oh and the javascript file also **injects** the html for css and header and footer and navigation and blah, into any webpage where I add it. Uniformity across pages! Change shit once, and it changes everywhere! All hail!

`main/pages` contains all my webpages.

->`example.html` is an example page for how logic.js should be included. (if you didn't read, I use that for theming/footer/header elements which are on all pages of the site)

-> `home.html` is, well, my homepage.

-> `main/pages` then has all the html my other pages, like project pages and the like 
