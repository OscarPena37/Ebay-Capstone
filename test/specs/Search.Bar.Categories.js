const HomePage = require('../pageobjects/Home.js')
const SearchPage = require('../pageobjects/Search.Bar.js')

describe('Verify Search Bar Utility With Categories', () => {

beforeEach(async () => {
        await HomePage.open()
    })

    it('Open Drop Box', async () => {
            await SearchPage.ClickCategoriesDropdownTest()
        })

    it('Open and close Drop Box', async () => {
            await SearchPage.ClickOutCategoriesDropdownTest()
        })

    it('Select art Category ', async () => {
            await SearchPage.SelectSpecificCategoryTest()
        })

    it('Search Inside a Category', async () => {
            await SearchPage.SelectCategory(HomePage.CategoryArt, 'Art')
        })


}) 