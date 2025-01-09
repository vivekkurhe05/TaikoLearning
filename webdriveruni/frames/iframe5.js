const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser({headless:true})

        await goto("https://demo.automationtesting.in/Frames.html")

        const iFrameElement = $("#singleframe")

        await evaluate(iFrameElement, async (iframe) => {
            // the contentDocument property returns the document object generated by a frame or iframe element.
            // If there is no document, the return value is null.

            // the contentWindow property returns the window object generated by an iframe element
            // (via the window object, you can access the document object and then any one of the document's elements)
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            const inputElement = iframeDocument.querySelector("input[type='text']")
            inputElement.value = "Hello Taiko!!"
        })

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();