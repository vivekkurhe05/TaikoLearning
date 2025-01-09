const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser({headless:true})

        await goto("https://demo.automationtesting.in/Frames.html")

        await click(link({href:"#Multiple"}))

        await write("Hello world", into(textBox({type:"text"})))

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();