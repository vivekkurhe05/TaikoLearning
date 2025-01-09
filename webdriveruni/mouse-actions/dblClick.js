const { openBrowser, goto, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser()

        await goto("https://webdriveruniversity.com/")

        await click(link({id:"actions"}))

        await doubleClick($("#double-click"), { waitForNavigation: true,  force: true })

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();