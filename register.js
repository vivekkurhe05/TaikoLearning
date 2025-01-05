const { openBrowser, goto, textBox, into, write, $, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser({headless:false});
        await goto("https://api.cogmento.com/register/?lang=en");
        await write("naveen@gmail.com",into(textBox({id:"email-input"})));
        await click($("#ageree"));
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
