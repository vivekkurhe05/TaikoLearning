const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser()
        await goto("webdriveruniversity.com/")

        await click(link({id:"contact-us"}))
        
        await write("Test", into(textBox({name:"first_name"})))
        const textBoxValue = await textBox({name:"first_name"}).value()
        console.log(textBoxValue)

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
