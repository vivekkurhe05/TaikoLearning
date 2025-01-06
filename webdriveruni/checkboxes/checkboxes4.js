const { openBrowser, goto, click, closeBrowser, checkBox } = require('taiko');

// check and validate desired checkboxes using labels

(async () => {
    try {
        await openBrowser()

        await goto("webdriveruniversity.com")

        await click(link({id:"dropdown-checkboxes-radiobuttons"}))

        const optionsToCheck = ["Option 1", "Option 4"]

        optionsToCheck.forEach((option) => checkBox(option).check())
        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();