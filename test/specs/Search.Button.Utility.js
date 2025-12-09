const HomePage = require('../pageobjects/Home.js')
const SearchPageButton = require('../pageobjects/Search.Button.js')

describe('Verify Search Bar Utility With Categories', () => {
    
beforeEach(async () => {
        await HomePage.open()
    })
    it('Click Serach Button', async () => {
            await SearchPageButton.ClickSearchButtonTest()
        })
    it('ReDirect to Serach Page', async () => {
            await SearchPageButton.ReDirectSearchPageTest()
        })
    it('Click Search Button With All Categories Option', async () => {
            await SearchPageButton.ClickSearchCategoriesTest()
        })
    it('Select a Category And Search', async () => {
            await SearchPageButton.SelectCategorySearchTest()
        })
    it('Click Search Button with Category Dropbox Open', async () => {
            await SearchPageButton.OpenDropboxSearchTest()
        })
    it('Click Out Of Dropbox and Search', async () => {
            await SearchPageButton.ClickOutDropboxTest()
        })
    it('Click Electronics Section Inside Search Page ', async () => {
            await SearchPageButton.ClickElectronicsSection()
        })
    it('Click Art Category and Section in Search Page ', async () => {
            await SearchPageButton.SelectSectionWithCategoriy()
        })
    it('Verifys Images Inside Electronics Section', async () => {
            await SearchPageButton.VerifyImagesInElectronics()
    })
    it('Verifys URL inside Electronics Section', async () => {
            await SearchPageButton.VerifyURLElectronicsSection()
        })
        it('Verifys Checkmark is Visible', async () => {
            await SearchPageButton.VerifyCheckmarkVisible()
        })
})




