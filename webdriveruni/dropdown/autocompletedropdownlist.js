const { openBrowser, goto, write, click, closeBrowser, dropDown } = require('taiko');

(async () => {
    try {
        
        await openBrowser()

        await goto("webdriveruniversity.com")

        await click(link({id:"autocomplete-textfield"}))

        await write("A", into(textBox({id:"myInput"})))

        const options = await evaluate($("#myInputautocomplete-list"), (element) => {
            return Array.from(element.children).map(option => option.textContent.trim());
        });

        console.log(options)

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();