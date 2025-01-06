const { openBrowser, goto, write, click, closeBrowser, radioButton } = require('taiko');

// check and validate the first radio button by label

(async () => {
    try {
        await openBrowser()

        await goto('webdriveruniversity.com')

        await click(link({id:"dropdown-checkboxes-radiobuttons"}))

        await radioButton('Green').select()

        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();