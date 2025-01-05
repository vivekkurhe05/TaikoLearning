const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        // visit the site
        await openBrowser()
        await goto('webdriveruniversity.com/')

        // go to contact us
        await click(link({id:"contact-us"}))

        // assert url
        await currentURL()

        // go back
        await closeTab()

        // assert url
        console.log(await currentURL())

        // go to login portal
        await click(link({id: "login-portal"}))

        // assert url
        console.log(await currentURL())
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();