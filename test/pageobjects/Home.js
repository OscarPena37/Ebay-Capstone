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
    get CategoryCollectibles() {return $('#gh-cat option[value="1"]')}
    get CategoryBooks() {return $('#gh-cat option[value="267"]')}
    get CategoriesDropdown() {return $('#gh-cat.gh-search-categories')}
    get SearchButton() {return $('span.gh-search-button__label')}
}

module.exports = new HomePage()