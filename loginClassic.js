const { openBrowser, goto, textBox, into, write, press, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://classic.crmpro.com");
        await write("naveenautomation",into(textBox({name:"username"})));
        await write("Test@12345",into(textBox({name:"password"})));
        await press("Enter");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
