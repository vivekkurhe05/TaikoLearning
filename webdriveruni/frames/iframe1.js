const { openBrowser, goto, write, click, closeBrowser, switchTo } = require('taiko');

(async () => {
    try {
        await openBrowser({headless:true})

        await goto("https://webdriveruniversity.com/")

        await click(link({id:"iframe"}))

        // await switchTo($("iframe#frame"))

        await click(button({id:"button-find-out-more"}))

        const modalText = await $('div.modal-body p').text()
        console.log(modalText)

        const isExist = await button('Close').exists()
        if(isExist) {
            console.log("inside if condition")
            await evaluate(button("Close"), (el) => el.click())

            // to forcefully click when an element is covered by some other element. this is the syntax.
            // await click(button('Close'),{force:true})
        }

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();