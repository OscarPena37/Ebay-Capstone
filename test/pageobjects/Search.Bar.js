const { $ } = require ('@wdio/globals')
const HomePage = require('../pageobjects/Home.js')
const Home = require('../pageobjects/Home.js')

class SearchPage {

    get SearchBar() {return $('#gh-ac')}
    get SuggestionText() {return $('#ebay-ac-suggestion-0')}
    get XButtonCategories() {return $('.ac-button.ac-recent-remove.call-to-action')}
    get NoResultsText() {return $('h3.srp-save-null-search__heading')}
    get ErrorBlock() {return $('div.s-error')}
    get CategoriesContainer() {return $('div.content-container')}
    get InstedText() {return $('.section-notice__main')}
    get ResultsHeading() {return $('h1.srp-controls__count-heading')}



async SearchAndExpect(item, expectedElement) {
    await this.SearchBar.setValue(item)
    await browser.keys('Enter')
    await expect(expectedElement).toBeDisplayed()
    }



    async SearchEmojiText(item) {
    const selector = await this.SearchBar.selector
    await browser.execute((sel, value) => {
        const input = document.querySelector(sel)
        input.focus()
        input.value = value
        input.dispatchEvent(new Event('input', { bubbles: true }))
    }, selector, item)
        await browser.keys('Enter')
        await expect(this.CategoriesContainer).toBeDisplayed()
    }



  async selectCategoriesFromDropdown(categories) {
        for (const category of categories) {
            await HomePage.CategoriesDropdown.click()
            await category.element.click()
            await HomePage.SearchButton.click()

            await expect(browser).toHaveUrl(
                expect.stringContaining(category.expectedUrl)
            )
        }
    }




    async TriggerSuggestionTest(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await this.SearchBar.click()
        await expect(this.SuggestionText).toBeDisplayed()
    }

    async ScrollOutSuggestionTest(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await this.SearchBar.click()
        await HomePage.scrollDown(600)
        await expect(this.SuggestionText).not.toBeDisplayed()
    }

    async ClickSuggestionTest(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await HomePage.EbayLogo.click()
        await this.SearchBar.click()
        await this.SuggestionText.click()
        await expect(this.ResultsHeading).toBeDisplayed()
    }

    async DeleteSuggestionTest() {
        await this.SearchBar.click()
        await this.XButtonCategories.click()
        await expect(this.SuggestionText).not.toBeDisplayed()
    }

    async TypoSuggetsionTest(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await expect(this.InstedText).toBeDisplayed()
    }

    async RemainHistoryTest() {
        await browser.keys('Enter')
        await HomePage.EbayLogo.click()
        await this.SearchBar.click()
        await expect(this.SuggestionText).toBeDisplayed()
    }

    async SuggestionAndHistoryTest() {
        await this.SearchBar.click()
        await this.XButtonCategories.click()
        await this.XButtonCategories.click()
        await expect (this.SuggestionText).not.toBeDisplayed()
    }


    async TypeSecurityTest(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await expect (this.ResultsHeading).toBeDisplayed
    }

}

module.exports = new SearchPage()