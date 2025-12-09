const { browser } = require('@wdio/globals')

class HomePage {


    open () {
        return browser.url(`https://www.ebay.com/`)
    }
    
    async scrollDown(px) {
    await browser.execute((y) => {
        window.scrollBy(0, y)
    }, px)
    }

    get EbayLogo() {return $('#gh-logo')}
    get CategoryArt() {return $('#gh-cat option[value="550"]')}
    get CategoriesDropdown() {return $('#gh-cat.gh-search-categories')}
}

module.exports = new HomePage()