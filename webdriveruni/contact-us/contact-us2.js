const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser()
        await goto("webdriveruniversity.com/")

        await click(link({id:"contact-us"}))
        
        await click("SUBMIT")
        
        // assert text in taiko        
        await text("Error: all fields are required").exists()
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
