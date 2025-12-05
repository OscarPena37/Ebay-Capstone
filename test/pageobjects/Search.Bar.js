const { $ } = require ('@wdio/globals')


class SearchPage {
    get EbayLogo() {return $('#gh-logo')}
    get SearchBar() {return $('#gh-ac')}
    get SearchButton() {return $('button#gh-search-button')}
    get XButtonCategories() {return $('.ac-button.ac-recent-remove.call-to-action')}
    get SuggestionText() {return $('#ebay-ac-suggestion-0')}
    get CategoriesDropdown() {return $('#gh-cat.gh-search-categories')}
    get CategoryArt() {return $('#gh-cat option[value="550"]')}


    get NoResultsText() {return $('h3.srp-save-null-search__heading')}
    get ResultsHeading() {return $('h1.srp-controls__count-heading')}
    get ErrorBlock() {return $('div.s-error')}
    get CategoriesContainer() {return $('div.content-container')}
    get InstedText() {return $('.section-notice__main')}


    async scrollDown(px) {
    await browser.execute((y) => {
        window.scrollBy(0, y)
    }, px)
 }
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
    }
 
 async SearchExpectingErrorBlock(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await expect(this.ErrorBlock).toBeDisplayed()
    }


    // Verify Search Bar Utility With Categories

 async ClickCategoriesDropdownTest() {
        await this.CategoriesDropdown.click()
        await expect (this.CategoriesDropdown).toBeClickable()
    }

    async ClickOutCategoriesDropdownTest() {
        await this.CategoriesDropdown.click()
        await this.SearchBar.click()
        await expect (this.CategoriesDropdown).toBeClickable()
    }

    async SelectCategoryTest() {
        await this.CategoriesDropdown.click()
        await this.CategoryArt.click()
        await this.CategoryArt.isClickable()
    }

    async SearchInCategoryTest() {
        await this.CategoriesDropdown.click()
        await this.CategoryArt.click()
        await this.CategoryArt.isClickable()
        await browser.keys('Enter')
        await expect(browser).toHaveUrl(expect.stringContaining('/b/Art/550/bn_1853728'))
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
        await this.scrollDown(600)
        await expect(this.SuggestionText).not.toBeDisplayed()
    }

    async ClickSuggestionTest(item) {
        await this.SearchBar.setValue(item)
        await browser.keys('Enter')
        await this.EbayLogo.click()
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
        await this.EbayLogo.click()
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