const HomePage = require('../pageobjects/Home.js')
const SearchPage = require('../pageobjects/Search.Bar.js')


describe('Verify Search Bar Utility With Imputs', () => { 

beforeEach(async () => {
        await HomePage.open()
    })
 
   it('Type Normal Text', async () => {
        await SearchPage.SearchExpectingHeading('iPhone')
    })

   it('Type Mixed Case', async () => {
        await SearchPage.SearchExpectingHeading('IpHoNe')
    })

    it('Type With Spaces', async () => {
        await SearchPage.SearchExpectingHeading('i P h o n e')
    })

    it('Type Invalid Text', async () => {
        await SearchPage.SearchExpectingCategories('@#$%^&*()')
    })

    it('Type Emoji Text', async () => {
        await SearchPage.SearchEmojiText('😭😂❤️😍😒👌')
    })
    
    it('Type Long Text', async () => {
        await SearchPage.SearchExpectingNoResult('i have no idea what i am going to say in this text but i am making sure that it is super long so in the test it can prove what happens when you right a super long text in the search bar and i am going to fill it out by adding my name at the end of this text and my birth date beacuse why not Oscar Pena Jr born the 6th of july of 2007 ')
    })

    it('Type Only Numbers', async () => {
        await SearchPage.SearchExpectingNoResult('12345678900987654321')
    })

    it('Search With No Text ', async () => {
        await SearchPage.SearchExpectingCategories('')
    })

    it('Type Random Text', async () => {
        await SearchPage.SearchExpectingNoResult('oiuytrdsdcfghjkoiuytr')
    })

    it('Type Spaces Only', async () => {
        await SearchPage.SearchNormalText('              ')
    })
})