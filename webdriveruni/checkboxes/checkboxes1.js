const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

// check and validate first checkbox

(async () => {
    try {
        await openBrowser()

        await goto("webdriveruniversity.com")

        await click(link({id:"dropdown-checkboxes-radiobuttons"}))

        // check by attribute and value pairs
        await checkBox({type:"checkbox", value:"option-1"}).check()

        // check by label
        // await checkBox('Option 1').check()

        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();