# Team Fight Tactics (TFT) team builder by Mobalytics

Team Fight Tactics (TFT) team builder is distributed as widget which you can easily install on your website.

## Quick Start

Create a div container with id attribute
```
<div id="comp-builder-container"></div>
```

Add an integration script section
```
<script>!function(a,b,d,e,c,f,g){a[e]=a[e]||{},a[e][c]=a[e][c]||{},a[e][c][f]=a[e][c][f]||function(){a[e][c][f].args=arguments},(g=b.createElement(d)).src="https://cdn.jsdelivr.net/gh/mobalyticshq/tft-team-builder/dist/index.min.js",g.async=1,(d=b.getElementsByTagName(d)[0]).parentNode.insertBefore(g,d)}(window,document,"script","mobalytics","tft","compBuilder");</script>
```

Add a configuration script section
```
<script>
    mobalytics.tft.compBuilder({ container: "#comp-builder-container" });
</script>
```
