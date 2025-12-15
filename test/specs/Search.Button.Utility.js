const HomePage = require('../pageobjects/Home.js')
const SearchPageButton = require('../pageobjects/Search.Button.js')

describe('Verify Search Bar Utility With Categories', () => {
    
beforeEach(async () => {
        await HomePage.Ebay()
    })
    it('ReDirect to Search Page', async () => {
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
    it('Click Art Category and Section in Search Page ', async () => {
            await SearchPageButton.SelectSectionWithCategoriy()
        })
   it('Click Electronics Section Inside Search Page', async () => {
            await SearchPageButton.verifyElectronicsSection(['URL'])
        })
   it('Verifies Images Inside Electronics Section', async () => {
            await SearchPageButton.verifyElectronicsSection(['IMAGE'])
        })
   it('Verifies URL Inside Electronics Section', async () => {
            await SearchPageButton.verifyElectronicsSection(['URL'])
        })
   it('Verifys Checkmark is Visible', async () => {
            await SearchPageButton.verifyElectronicsSection(['CHECKMARK'])
        })

})




