const Home = require('../pageobjects/Home.js')
const HomePage = require('../pageobjects/Home.js')
const SearchPage = require('../pageobjects/Search.Bar.js')

describe('Verify Search Bar Utility With Categories', () => {

beforeEach(async () => {
        await HomePage.open()
    })

   it('Select categories from dropdown', async () => {
    const categories = [
        { element: HomePage.CategoryArt, expectedUrl: 'Art' },
        { element: HomePage.CategoryCollectibles, expectedUrl: 'Collectibles' },
        { element: HomePage.CategoryBooks, expectedUrl: 'Books' }
    ]

    await SearchPage.selectCategoriesFromDropdown(categories)
})

}) 