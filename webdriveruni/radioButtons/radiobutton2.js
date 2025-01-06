const { openBrowser, goto, write, click, closeBrowser, radioButton } = require('taiko');

// check and validate the first radio button by attr and value pair

(async () => {
    try {
        await openBrowser()

        await goto('webdriveruniversity.com')

        await click(link({id:"dropdown-checkboxes-radiobuttons"}))

        await radioButton({type:'radio', value:'green'}).select()
        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();