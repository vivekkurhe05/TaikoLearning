const { openBrowser, goto, write, click, closeBrowser, checkBox } = require('taiko');

// Check all checkboxes

(async () => {
    try {
        await openBrowser()

        await goto("webdriveruniversity.com")

        await click(link({id:"dropdown-checkboxes-radiobuttons"}))

        const checkboxes = await checkBox().elements()

        checkboxes.forEach((checkbox) => checkbox.check())

        // or
        // for(let checkbox of checkboxes) {
        //     await checkbox.check()
        // }
        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();