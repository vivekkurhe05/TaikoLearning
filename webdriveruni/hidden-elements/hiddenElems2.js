const { openBrowser, goto, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser()

        await goto("https://webdriveruniversity.com/")

        await click(link({id:"hidden-elements"}))

        await evaluate($("div#visibility-hidden"), (elem) => {
            elem.style.visibility="block"
        })

        await click($("span#button2"))

        const modalText = await $("#myModalJSClick div.modal-body").text()

        console.log(modalText)

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();