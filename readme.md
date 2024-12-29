# Well hello there!
This repo hosts the entirety of my website, [_aashvik.com_](https://aashvik.com/), a home to my projects and a portfolio of sorts.

## Why here?
I wanted to write my own site, to use custom js/css for interactive elements, and to use my custom domain with free hosting, so I made this to replace my ugly wordpress(.com) site.

## Interactive elements? <sup>Logic?</sup> <sub>Wut u sayin?</sub>
You can change the color scheme from the palette dropdown in the footer, and js lets me implement a common elements across all of this website's pages!

## Repo structure:
`main` has CNAME for DNS, a git thingamajig, a favicon, and my website html/css/js files.
`main/pages` contains some more webpages.

### simply genius things
The css file has variables for webpage colors-- `--bck-color`, `--txt-color`, `--hgl-color`, and `--link-color`-- which my javascript modifies to apply color schemes-- `changePalette()` called whenever a different palette option is selected.
Oh and the javascript file also **injects** the html for the 'template' elements into any webpage where I add it. Uniformity across pages! Change shit once, and it changes everywhere! All hail!