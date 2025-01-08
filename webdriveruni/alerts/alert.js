const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser({headless: true})

        await goto("https://webdriveruniversity.com/")

        await click(link({id:"popup-alerts"}))

        let alertMessage = ""

        // alert('I am an alert box!', async () => await accept())

        // if you want to verify and print alert message, then use this or else use above LOC
        alert(async ({message}) => {
            if(message === "I am an alert box!") {
                alertMessage = message
              await accept();
             }
          })

        await click($("div.section-title #button1"))

        console.log(alertMessage)

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();