const { $ } = require ('@wdio/globals')
const HomePage = require('../pageobjects/Home.js')

class SearchPageButton {
    get SearchButton() {return $('span.gh-search-button__label')}
    get ElectronicsPage() {return $('a[href="#electronics"]')}
    get ArtDrawings() {return $('=Art Drawings')}


    get ElectronicsImage() {return $('img[alt="Computers, Tablets & Network Hardware"]')}
    get ActiveElectronics() {return $('li.active a[href="#electronics"]')}


    async ClickSearchButtonTest() {
        await this.SearchButton.click()
        await expect (this.SearchButton).toBeClickable()
    }
    async ReDirectSearchPageTest() {
        await this.SearchButton.click()
        await expect(browser).toHaveUrl(expect.stringContaining('/n/all-categories?_nkw=&_sacat=0&_from=R40&_trksid=m570.l1313'))
    }
    async ClickSearchCategoriesTest() {
        await this.SearchButton.click()
        await expect (this.SearchButton).toBeClickable()
    }
    async SelectCategorySearchTest(){
        await HomePage.CategoriesDropdown.click()
        await HomePage.CategoryArt.click()
        await this.SearchButton.click()
    }
    async OpenDropboxSearchTest(){
        await HomePage.CategoriesDropdown.click()
        await this.SearchButton.click()
        await expect (this.SearchButton).toBeClickable()
    }
    async ClickOutDropboxTest(){
        await HomePage.CategoriesDropdown.click()
        await HomePage.scrollDown(600)
        await this.SearchButton.click()
        await expect (this.SearchButton).toBeClickable()
    }
    async ClickElectronicsSection() {
        await this.SearchButton.click()
        await this.ElectronicsPage.click()
        await expect (browser).toHaveUrl(expect.stringContaining('#electronics'))
    }
    async SelectSectionWithCategoriy() {
        await HomePage.CategoriesDropdown.click()
        await HomePage.CategoryArt.click()
        await this.SearchButton.click()
        await this.ArtDrawings.click()
        await expect (browser).toHaveUrl(expect.stringContaining('/b/Art-Drawings'))
    }
    async VerifyImagesInElectronics() {
        await this.SearchButton.click()
        await this.ElectronicsPage.click()
        await expect (this.ElectronicsImage).toBeDisplayed()
    }
    async VerifyURLElectronicsSection() {
        await this.SearchButton.click()
        await this.ElectronicsPage.click()
        await expect (browser).toHaveUrl(expect.stringContaining('#electronics'))
    }
    async VerifyCheckmarkVisible() {
    await this.SearchButton.click()
    await this.ElectronicsPage.click()
    await expect (this.ActiveElectronics).toBeDisplayed()
    }
}
module.exports = new SearchPageButton()










