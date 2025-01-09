const { openBrowser, goto, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser()

        await goto("https://webdriveruniversity.com/")

        await click(link({id:"hidden-elements"}))

        await evaluate($("div#not-displayed"), (elem) => {
            elem.style.display="block"
        })

        await click($("span#button1"))

        const modalText = await $("#myModalClick div.modal-body").text()

        console.log(modalText)

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();