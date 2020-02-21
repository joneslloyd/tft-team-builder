# Team Fight Tactics (TFT) team builder by Mobalytics

Team Fight Tactics (TFT) team builder is distributed as widget which you can easily install on your website.

<p align="center" style="text-align: center">
  <img width="80%" height="auto" src="https://mobalyticshq.github.io/tft-team-builder/tft-mobalytics-team-builder.jpg" alt="Team Fight Tactics (TFT) team builder by Mobalytics">
</p>

## Quick Start

To add team builder on your website, do the following:

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

You're done! 
Checkout [complete example](https://mobalyticshq.github.io/tft-team-builder/) for more details.

## Configuration Options

Following options are available for `mobalytics.tft.compBuilder` call:

* container - CSS selector for the div container.
* tftSet - TFT set to be displayed, available options are: set1, set2.
* language - Language to be used, available options are: ru_ru, en_us, de_de, ja_jp.
* state - Initial state of the builder.

Example:
```
mobalytics.tft.compBuilder({
    container: "#my-div-container-id",
    tftSet: "set2",
    language: "ja_jp",
    state: "CwVgjAnAZjvBIDGs4BMwCMUxCY2cIA2AZgKLBK2yNRICYCB2MXAoA==="
});
```

## Methods

Following methods are available for `window.mobalytics.tft.compBuilder` namespace after team builder were loaded (see loaded event for more details): 

* setState(value: string): void - Set current team builder state
```
    window.mobalytics.tft.compBuilder.setState("CwVgjAnAZjvBIDGs4BMwCMUxCY2cIA2AZgKLBK2yNRICYCB2MXAoA===");
```
* setLanguage(value: string): void - Set current language, available options are: ru_ru, en_us, de_de, ja_jp.
```
    window.mobalytics.tft.compBuilder.setLanguage("ja_jp");
``` 

## Properties

Following properties available for `window.mobalytics.tft.compBuilder` namespace:

* isLoaded - Define if team builder is already loaded
```
    console.debug(window.mobalytics.tft.compBuilder.isLoaded);
```

## Events

Following events can be received via `addEventListener` method of the `document`.

* mobalytics.tft.compsBuilder.loaded - Fired then team builder is loaded.
```
    document.addEventListener('mobalytics.tft.compsBuilder.loaded', function () {
       console.debug('Loaded');
    });
```
* mobalytics.tft.compsBuilder.error - Fired if there was an error during team builder loading.
```
    document.addEventListener('mobalytics.tft.compsBuilder.error', function () {
       console.debug('Error');
    });
``` 
* mobalytics.tft.compsBuilder.resize - Fired if the size of the team builder changed.
```
    document.addEventListener('mobalytics.tft.compsBuilder.resize', function (event) {
       console.debug('Resize', event.data.width, event.data.height);
    });
```
* mobalytics.tft.compsBuilder.stateChanged  - Fired if current state of the team builder changed.
```
    document.addEventListener('mobalytics.tft.compsBuilder.loaded', function () {
       console.debug(
            'State changed',
            event.data.language,
            event.data.tftSet
            event.data.state,
            event.data.carryChampions,
        );
    });
```


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


