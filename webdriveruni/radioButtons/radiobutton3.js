const { openBrowser, goto, write, click, closeBrowser, radioButton } = require('taiko');

// check and validate radio button by index

(async () => {
    try {
        await openBrowser()

        await goto('webdriveruniversity.com')

        await click(link({id:"dropdown-checkboxes-radiobuttons"}))

        const radiobuttons = await radioButton().elements()

        await radiobuttons[2].select()

        console.log(await radiobuttons[2].isSelected())

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();