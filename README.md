# Team Fight Tactics (TFT) team builder by Mobalytics

Team Fight Tactics (TFT) team builder is distributed as widget which you can easily install on your website.

<p align="center" style="text-align: center">
  <img width="80%" height="auto" src="https://mobalyticshq.github.io/tft-team-builder/tft-mobalytics-team-builder.jpg" alt="Team Fight Tactics (TFT) team builder by Mobalytics">
</p>

## Quick Start

1. Create a div container with id attribute.
```
<div id="comp-builder-container"></div>
```

2. Add an integration script section.
```
<script>!function(a,b,d,e,c,f,g){a[e]=a[e]||{},a[e][c]=a[e][c]||{},a[e][c][f]=a[e][c][f]||function(){a[e][c][f].args=arguments},(g=b.createElement(d)).src="https://cdn.jsdelivr.net/gh/mobalyticshq/tft-team-builder@1.0.1/dist/index.min.js",g.async=1,(d=b.getElementsByTagName(d)[0]).parentNode.insertBefore(g,d)}(window,document,"script","mobalytics","tft","compBuilder");</script>
```

3. Add a configuration script section, see other configuration options bellow.
```
<script>
    mobalytics.tft.compBuilder({ container: "#comp-builder-container" });
</script>
```

You're done, checkout [complete example](https://mobalyticshq.github.io/tft-team-builder/) for more details.

## Configuration Options

todo: more info

* container
* tftSet
* language
* state

## Methods

todo: more info

* setState
* setLanguage

## Events

todo: more info

* mobalytics.tft.compsBuilder.loaded 
* mobalytics.tft.compsBuilder.error 
* mobalytics.tft.compsBuilder.resize 
* mobalytics.tft.compsBuilder.stateChanged 


## Useful TFT links
* [Team Comps](https://app.mobalytics.gg/tft/team-comps)
* [Team Builder](https://app.mobalytics.gg/tft/comp-builder)
* [Items](https://app.mobalytics.gg/tft/items)
* [Champions](https://app.mobalytics.gg/tft/champions)
* [Tier List](https://app.mobalytics.gg/tft/tier-list/champions)
* [TFT Wiki](https://app.mobalytics.gg/tft/wiki/classes/all)
* [TFT Guides](https://mobalytics.gg/blog/tft/)

## License
todo


