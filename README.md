# Team Fight Tactics (TFT) team builder by Mobalytics

Welcome to the **Mobalytics Team Fight Tactics (TFT) team builder embeddable widget**. We went ahead and did all the heavy lifting to make it really easy for you to be able to install this awesome feature on your website! Even better is that we made it sync with the version that is currently running our websdite and any updates to the data or the builder itself will automatically be applied to the widget that you have on your website! Below you will find a quick start guide that has all the information needed inorder to get it up and running.

<p align="center" style="text-align: center">
  <img width="80%" height="auto" src="https://mobalyticshq.github.io/tft-team-builder/tft-mobalytics-team-builder.jpg" alt="Team Fight Tactics (TFT) team builder by Mobalytics">
</p>

## Quick Start

This guide will contain all the steps required to have the Mobalytics team comp widget displayed and running on your website. 

**1. Create a div container with id attribute.**
The first step is to create a div container and pass it an id attribute of your choice. In the below example, we called it "comp-builder-container"

**Code**
```
<div id="comp-builder-container"></div>
```

**2. Add an integration script section.**
The second step is to add the intergration script which calls the same script that runs the team builder widget on our website with the same data and APIs. 

**Code**
```
<script>!function(a,b,d,e,c,f,g){a[e]=a[e]||{},a[e][c]=a[e][c]||{},a[e][c][f]=a[e][c][f]||function(){a[e][c][f].args=arguments},(g=b.createElement(d)).src="https://cdn.jsdelivr.net/gh/mobalyticshq/tft-team-builder@1.0.3/dist/index.min.js",g.async=1,(d=b.getElementsByTagName(d)[0]).parentNode.insertBefore(g,d)}(window,document,"script","mobalytics","tft","compBuilder");</script>
```

**3. Add a configuration script section**
The final step is to add a configuration script for the team builder widget which will determine the intitial state in which the widget will appear when the page is loading. The code below is the default script and is enough to get the widget to load. Note that the container is the same as the div id we put in step 1.

*(See the next Section for more Configuration Options)*

**Code**
```
<script>
    mobalytics.tft.compBuilder({ container: "#comp-builder-container" });
</script>
```

**Congratulations!!**
You're done! You now have a working version of the Mobalyics TFT team builder on your website!
Checkout our [complete example](https://mobalyticshq.github.io/tft-team-builder/) to see it in action and for more details!

## Configuration Options

The `mobalytics.tft.compBuilder` widget has 4 different configuration options that can be called and changed in the **Configuration Script** that you implement in the third step of the guide.

* `container` - CSS selector for the div container.
* `tftSet` - This determines which champion set the builder will start on. Currently, the options are `set1` or `set2`.
* `language` - Which language the widget will load in. Currently the 4 options are ru_ru, en_us, de_de, ja_jp.
* `state` - Which composition of champions will be active on the builder when it is loaded. Adding champions to the widget changes the ending of the url and adds strings to the **map=** part of the url (comp-builder?map=EwVgzAhgZjsCwEYAMAOW8CcICm6ZwBMxc8A2BMAYzyiA)
The state is the string of characters after the = sign. 

Here is an example of a confiugration script that starts in **Set 2** with **Japanese** as the default language and **CwVgjAnAZjvBIDGs4BMwCMUxCY2cIA2AZgKLBK2yNRICYCB2MXAoA===** as the initial state

**Example:**
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

* `isLoaded` - Define if team builder is already loaded
```
console.debug(window.mobalytics.tft.compBuilder.isLoaded);
```

## Events

Following events can be received via `addEventListener` method of the `document`.

* `mobalytics.tft.compsBuilder.loaded` - Fired then team builder is loaded.
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
* `mobalytics.tft.compsBuilder.resize` - Fired if the size of the team builder changed.
```
document.addEventListener('mobalytics.tft.compsBuilder.resize', function (event) {
   console.debug('Resize', event.data.width, event.data.height);
});
```
* `mobalytics.tft.compsBuilder.stateChanged`  - Fired if current state of the team builder changed.
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
Please be aware that this widget contains a direct link to the Mobalytics website which can not be removed so keep that in mind before use. 

