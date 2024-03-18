# Fake Filler (Indian version)

This was forked from FakeFiller/fake-filler-extension, which was developed by Hussein Shabbir under the MIT license. The original FakeFiller is no longer actively maintained, so this version drops the free-version's restrictions on number of field inputs and ability to create profiles. It does not have the ability to sync settings across devices.

# <img src="public/images/logo.svg" height="53" alt="Fake Filler 2" title="Fake Filler Indian" />

This extension allows you to fill all form inputs (textboxes, textareas, radio buttons, dropdowns, etc.) with indian dummy data. It is a must for developers and testers who work with forms as it avoids the need for manually entering values in fields.

## Forked from the following repos:

- `FakeFiller/fake-filler-extension`
- `calvinballing/fake-filler-extension`

## Install Links

The Chrome extension is actively being developed. For the others, for the time being you'll need to compile them yourself.

- **Chrome** extension - [Chrome Web Store](https://chromewebstore.google.com/detail/fake-filler-indian/djebpbfndpmiogcligbnfmjjjibjcbnn?hl=en)
- **Edge** extension - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/fake-filler-indian/)
- **Firefox** add-on - TBD

## Default shortcut

Use **_CTRL+SHIFT+F_** on Windows and **_CMD+SHIFT+F_** on Mac to fire the extension. See the [Keyboard Shortcuts](https://github.com/anburocky3/fake-filler-extension/wiki/Keyboard-Shortcuts) page for more details.

## Developing (in Firefox)

1. `npm install`
1. `npm run build`
1. Follow instructions for [building your first Firefox extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
   - In Firefox, open [about:debugging](about:debugging)
   - Click on the link to [this firefox](about:debugging#/runtime/this-firefox) to visit the extensions page
   - Click on "load temporary add-on" and then navigate to the `/dist` folder. Select the `manifest.json` file to load the extension.

### Enable extension debugging

1. open `about:config` in Firefox
1. as a search term, type `extensions.sdk.console.logLevel` and click the `+` button to add a new setting with the type "string".
1. set the value of the new setting to `all`.

### View extension console log

In the [this firefox](about:debugging#/runtime/this-firefox) page, next to the add-on, click the "inspect" button.
