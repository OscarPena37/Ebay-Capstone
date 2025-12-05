const HomePage = require('../pageobjects/Home.js')
const SearchPage = require('../pageobjects/Search.Bar.js')

describe('Search Bar Auto-Suggestion & Search History Functionality', () => {

beforeEach(async () => {
        await HomePage.open() 
    })


   it('Trigger Suggestion Text Box', async () => {
        await SearchPage.TriggerSuggestionTest('iPhone')
    })

    it('Scroll Out Of Suggestion Text Box', async () => {
        await SearchPage.ScrollOutSuggestionTest('iPhone')
    })

    it('Click Suggestion Text Box', async () => {
        await SearchPage.ClickSuggestionTest('iPhone')
    })

    it('Delete Suggestion Text Box', async () => {
        await SearchPage.DeleteSuggestionTest('iPhone')
    })

    it('Typo Detection (did you mean…) Test', async () => {
        await SearchPage.TypoSuggetsionTest('iphne')
    })

    it('Search History Remains Test', async () => {
        await SearchPage.RemainHistoryTest('iPhone')
    })

    it('Suggetsion And History Test', async () => {
        await SearchPage.SuggestionAndHistoryTest('iPhone')
    })
})