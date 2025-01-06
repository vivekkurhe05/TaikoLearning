const { openBrowser, goto, click, closeBrowser, checkBox } = require('taiko');

// Check unchecked boxes only

(async () => {
    try {
        await openBrowser()

        await goto("webdriveruniversity.com")

        await click(link({id:"dropdown-checkboxes-radiobuttons"}))

        const checkboxes = await checkBox().elements()
        
        checkboxes.forEach(async (checkbox) => {
            if(!(await checkbox.isChecked())) {
                await checkbox.check()
            }
        })
        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();