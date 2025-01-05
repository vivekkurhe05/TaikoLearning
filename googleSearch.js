const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://www.google.com");
        await write("Naveen automation labs");
        await click("Google Search");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
