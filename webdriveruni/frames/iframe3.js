const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser({headless:true})

        await goto("https://demo.automationtesting.in/Frames.html")

        await highlight($("#singleframe"))

        await highlight(textBox({type:"text"}))

        await write("Hello", into(textBox({type:"text"})))

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();