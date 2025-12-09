const { $ } = require ('@wdio/globals')
const HomePage = require('../pageobjects/Home.js')

class SearchPage {

    get SearchBar() {return $('#gh-ac')}
    get SuggestionText() {return $('#ebay-ac-suggestion-0')}
    get XButtonCategories() {return $('.ac-button.ac-recent-remove.call-to-action')}
    get NoResultsText() {return $('h3.srp-save-null-search__heading')}
    get ResultsHeading() {return $('h1.srp-controls__count-heading')}
    get ErrorBlock() {return $('div.s-error')}
    get CategoriesContainer() {return $('div.content-container')}
    get InstedText() {return $('.section-notice__main')}

    async SearchNormalText(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
 }


    // Verify Search Bar Utility With Imputs


    async SearchExpectingHeading(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await expect(this.ResultsHeading).toBeDisplayed()
    }

 async SearchExpectingCategories(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await expect(this.CategoriesContainer).toBeDisplayed()
    }

 async SearchExpectingNoResult(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await expect(this.NoResultsText).toBeDisplayed()
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


    // Verify Search Bar Utility With Categories

 async ClickCategoriesDropdownTest() {
        await HomePage.CategoriesDropdown.click()
        await expect (HomePage.CategoriesDropdown).toBeClickable()
    }

    async ClickOutCategoriesDropdownTest() {
        await HomePage.CategoriesDropdown.click()
        await this.SearchBar.click()
        await expect (HomePage.CategoryArt).not.toBeClickable()
    }

    async SelectCategoryTest() {
        await HomePage.CategoriesDropdown.click()
        await HomePage.CategoryArt.click()
        await (expect.stringContaining('[data-gtm-form-interact-field-id="0"]'))
    }

    async SearchInCategoryTest() {
        await HomePage.CategoriesDropdown.click()
        await HomePage.CategoryArt.click()
        await HomePage.CategoryArt.isClickable()
        await browser.keys('Enter')
         await expect(browser).toHaveUrl(expect.stringContaining('Art'))
    }

    // Search Bar Auto-Suggestion & Search History Functionality

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

    // Injecting Code Type Language

    async TypeXSSTest(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await expect (this.ResultsHeading).toBeDisplayed
    }

    async TypeSQLTest(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await expect (this.ResultsHeading).toBeDisplayed
    }

    async TypeHTMLTest(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await expect (this.ResultsHeading).toBeDisplayed
    }

}

module.exports = new SearchPage()