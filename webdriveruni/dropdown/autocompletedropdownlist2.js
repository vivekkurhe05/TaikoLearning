const { openBrowser, goto, write, click, closeBrowser, dropDown } = require('taiko');

// This is a chat gpt code
// Handle auto complete textbox

(async () => {
    try {
        
        await openBrowser({headless: true})

        await goto("webdriveruniversity.com")

        await click(link({id:"autocomplete-textfield"}))

        await write("A", $("#myInput"));

        const desiredOption = "Artichoke";

        const selected = await evaluate($("#myInputautocomplete-list"), (element, args) => {
        const desiredOption = args.desiredOption;
        const options = Array.from(element.children); // Get all child divs
        const matchingOption = options.find(option => option.textContent.trim() === desiredOption);

        if (matchingOption) {
            matchingOption.click(); // Click the matching option
            return true;
        }
        return false; // Return false if no match
    }, { args: { desiredOption } });

    if (selected) {
        console.log(`${desiredOption} selected!`);
    } else {
        console.log(`${desiredOption} not found.`);
    }
        console.log(await textBox({id:"myInput"}).value());

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();