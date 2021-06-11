# Fri3d Camp website

* Deze site is een statische website gegenereerd door [Hugo](https://gohugo.io/).
* Site live viewen tijdens development: `hugo serve`
* Site files in directory public genereren voor publicatie: `hugo`

## Pretalx css
Omdat het makkelijker is om de styling in sync te houden, wordt de css file die via de Pretalx admin kan ingeladen worden, ook vanuit de `assets/sass/pretalx.scss` file in deze repository gegenereerd. Dat gebeurt wel niet tegelijk met de hugo site, maar apart via SASS (al dan niet met watch):
`sass --watch assets/sass/pretalx.scss:public/css/pretalx.css`

De css file die zo gegenereerd wordt, kan je uploaden via de instellingen in Pretalx.
