# Fri3d Camp website

* Deze site is een statische website gegenereerd door [Hugo](https://gohugo.io/).
* Site live viewen tijdens development: `hugo serve`
* Site files in directory public genereren voor publicatie: `hugo`
* Of met docker; `docker run -p 1313:1313 -v $PWD:/src hugomods/hugo hugo server`, en [http://localhost:1313](http://localhost:1313).
  * the sass thing mystified us all, but seems to be internalized by Hugo, just add your stuff to the [relevant .scss file](/assets/sass).
  * last checked met 0.147.7
