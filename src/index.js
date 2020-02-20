(function (wnd) {
    // region ---- vars
    const MessageSlug = {
        EVENT: 'moba-external-comp-builder-event',
        ACTION: 'moba-external-comp-builder-action'
    };
    const ErrorCode = {
        LOADING_ERROR: 1
    };
    const EventType = {
        RESIZE: 0,
        STATE_CHANGED: 1,
    };
    const ActionType = {
        SET_STATE: 0,
        SET_LANGUAGE: 1,
    };

    const defaults = {tftSet: 'set2', language: 'en_us', domain: 'https://app.mobalytics.gg'};
    const mobalytics = wnd.mobalytics || {};
    const tft = mobalytics.tft || {};
    const compBuilder = tft.compBuilder || {};
    const initialSettings = compBuilder.args[0];
    // endregion

    // region ---- utils
    function printError(...args) {
        console.error('Mobalytics TFT comps builder error', ...args);
    }

    function mergeSettings(obj) {
        return Object.assign(defaults, initialSettings, obj);
    }

    function dispatchEvent(dispatchSource, eventName, eventData) {
        const loadEvent = document.createEvent('Event');
        eventData && (loadEvent.data = eventData);
        loadEvent.initEvent(`mobalytics.tft.compsBuilder.${eventName}`, true, true);
        dispatchSource.dispatchEvent(loadEvent);
    }

    // endregion

    // region ---- rendering function
    function render(settings) {
        const finalSettings = mergeSettings(settings);
        const {domain, language, tftSet, state} = finalSettings;

        if (compBuilder.iframe) {
            printError('Already rendered');
            return;
        }

        if (!finalSettings.container) {
            printError('Invalid container', !finalSettings.container);
            return;
        }

        const container = wnd.document.querySelector(finalSettings.container);
        if (!container) {
            printError('Unable to find container by selector', finalSettings.container);
            return
        }

        const iframe = wnd.document.createElement('iframe');
        iframe.setAttribute('id', 'moba-tft-comp-builder');
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('src', `${domain}/${language}/tft/${tftSet}/comp-builder-external?map=${state}`);
        iframe.classList.add('moba-tft-comp-builder');
        iframe.onload = function () {
            compBuilder.isLoaded = true;
            dispatchEvent(wnd.document, 'loaded');
        };
        iframe.error = function () {
            compBuilder.isError = true;
            dispatchEvent(wnd.document, 'error', {code: ErrorCode.LOADING_ERROR});
        };

        wnd.addEventListener('message', function (msg) {
            if (msg && msg.data && msg.data.slug === MessageSlug.EVENT) {
                const type = msg.data.event ? msg.data.event.type : null;
                switch (type) {
                    case EventType.RESIZE:
                        iframe.style.height = `${msg.data.event.data.height}px`;
                        dispatchEvent(wnd.document, 'resize', msg.data.event.data);
                        break;
                    case EventType.STATE_CHANGED:
                        dispatchEvent(wnd.document, 'stateChanged', msg.data.event.data);
                        break;
                    default:
                        printError('Unknown message', msg.data);
                        break;
                }
            }
        });

        container.parentNode.appendChild(iframe);
        compBuilder.iframe = iframe;
    }

    // endregion

    // region ---- iframe communication functions
    function setLanguage(language) {
        if (compBuilder.iframe) {
            const action = {type: ActionType.SET_LANGUAGE, data: {language: language}};
            compBuilder.iframe.style.height = '';
            compBuilder.iframe.contentWindow.postMessage({slug: MessageSlug.ACTION, action: action}, '*');
        } else printError('Unable to setLanguage, not rendered');
    }

    function setState(tftSet, state) {
        if (compBuilder.iframe) {
            const action = {type: ActionType.SET_STATE, data: {tftSet: tftSet, state: state}};
            compBuilder.iframe.style.height = '';
            compBuilder.iframe.contentWindow.postMessage({slug: MessageSlug.ACTION, action: action}, '*');
        } else printError('Unable to setLanguage, not rendered');
    }

    // endregion

    // region ---- export
    compBuilder.render = render;
    compBuilder.setState = setState;
    compBuilder.setLanguage = setLanguage;
    // endregion

    // region ---- render if container provided with initial settings
    initialSettings.container && render();
    // endregion
})(window);