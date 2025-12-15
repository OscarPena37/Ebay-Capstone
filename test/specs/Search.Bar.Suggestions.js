const HomePage = require('../pageobjects/Home.js')
const SearchPage = require('../pageobjects/Search.Bar.js')

describe('Search Bar Auto-Suggestion & Search History Functionality', () => {

beforeEach(async () => {
        await HomePage.Ebay() 
    })


   it('Trigger Suggestion Text Box', async () => {
        await SearchPage.TriggerSuggestionTest('iPhone')
    })

    it('Scroll Out Of Suggestion Text Box', async () => {
        await SearchPage.ScrollOutSuggestionTest('Nintendo')
    })

    it('Click Suggestion Text Box', async () => {
        await SearchPage.ClickSuggestionTest('xbox')
    })

    it('Delete Suggestion Text Box', async () => {
        await SearchPage.DeleteSuggestionTest('Pokemon')
    })

    it('Typo Detection (did you mean…) Test', async () => {
        await SearchPage.TypoSuggetsionTest('iphne')
    })

    it('Search History Remains Test', async () => {
        await SearchPage.RemainHistoryTest('Laptop')
    })

    it('Suggetsion And History Test', async () => {
        await SearchPage.SuggestionAndHistoryTest('Samsung')
    })
})