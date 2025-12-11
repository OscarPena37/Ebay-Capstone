const HomePage = require('../pageobjects/Home.js')
const SearchPage = require('../pageobjects/Search.Bar.js')


describe('Verify Search Bar Utility With Imputs', () => { 

beforeEach(async () => {
        await HomePage.open()
    })
 
   it('Type Normal Text', async () => {
        await SearchPage.SearchAndExpect('iPhone', SearchPage.ResultsHeading)
    })

   it('Type Mixed Case', async () => {
        await SearchPage.SearchAndExpect('IpHoNe', SearchPage.ResultsHeading)
    })

    it('Type With Spaces', async () => {
        await SearchPage.SearchAndExpect('i P h o n e', SearchPage.ResultsHeading)
    })

    it('Type Invalid Text', async () => {
        await SearchPage.SearchAndExpect('@#$%^&*()',SearchPage.CategoriesContainer)
    })

    it('Type Emoji Text', async () => {
        await SearchPage.SearchEmojiText('😭😂❤️😍😒👌')
    })
    
    it('Type Long Text', async () => {
       
        const longText = "test".repeat(100)
        await SearchPage.SearchAndExpect(longText, SearchPage.ErrorBlock)
    })

    it('Type Only Numbers', async () => {
        await SearchPage.SearchAndExpect('12345678900987654321', SearchPage.NoResultsText)
    })

    it('Search With No Text ', async () => {
        await SearchPage.SearchAndExpect('',SearchPage.CategoriesContainer)
    })

    it('Type Random Text', async () => {
        await SearchPage.SearchAndExpect('oiuytrdsdcfghjkoiuytr', SearchPage.NoResultsText)
    })

    it('Type Spaces Only', async () => {
        await SearchPage.SearchAndExpect('              ', SearchPage.ErrorBlock)
    })
})