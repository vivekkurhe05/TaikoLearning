const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser()
        await goto('webdriveruniversity.com/')

        await evaluate(link({id:"contact-us"}), (el) => {
            $(el).removeAttr('target')
        })
        await click(link({id:"contact-us"}))

        console.log(await currentURL())

        await goBack()

        console.log(await currentURL())

        await goForward()
        
        console.log(await currentURL())

        await goBack()

        await evaluate(link({id:"login-portal"}), (el) => {
            el.removeAttribute('target')
        })
        await click(link({id:"login-portal"}))

        console.log(await currentURL())

        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();