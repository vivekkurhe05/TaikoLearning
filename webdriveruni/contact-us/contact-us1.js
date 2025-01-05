const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser()
        await goto("webdriveruniversity.com/")

        await click(link({id:"contact-us"}))

        await write("Test", into(textBox({name: "first_name"})))
        await write("Demo", into(textBox({name: "last_name"})))
        await write("testdemo@gmail.com", into(textBox({name: "email"})))
        await write("Hi, How are you doing?", into(textBox({name: "message"})))
        
        await click("SUBMIT")
        
        // assert text in taiko
        await text("Thank You for your Message!").exists()
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();