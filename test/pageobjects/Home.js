const { browser } = require('@wdio/globals')

class HomePage {


    open (path) {
        return browser.url(`https://www.ebay.com/`)
    }
}

module.exports = new HomePage()