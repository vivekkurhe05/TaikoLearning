const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser({headless: true})

        await goto("https://webdriveruniversity.com/")

        await click(link({id:"popup-alerts"}))

        confirm("Press a button!", async () => await accept())

        await click($("div.section-title #button4"))

        let message = await $("p#confirm-alert-text").text()

        console.log(message)

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();