const { openBrowser, goto, click, closeBrowser, checkBox } = require('taiko');

// check and validate desired checkboxes using indexes

(async () => {
    try {
        await openBrowser()

        await goto("webdriveruniversity.com")

        await click(link({id:"dropdown-checkboxes-radiobuttons"}))

        const checkboxes = await checkBox().elements()

        await checkboxes[0].check()
        await checkboxes[3].check()
        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();