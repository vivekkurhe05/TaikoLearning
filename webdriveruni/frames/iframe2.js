const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser({headless:true})

        await goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe")
    
        // Taiko automatically handles iFrame, switchTo() does not work for iFrame

        await click(link({title:"CSS Tutorial"}))

        console.log(await $('#main h1').text())

        // await screenshot({ path: "iframe-debug.png" });

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();