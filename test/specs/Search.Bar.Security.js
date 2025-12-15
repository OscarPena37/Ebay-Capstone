const HomePage = require('../pageobjects/Home.js')
const SearchPage = require('../pageobjects/Search.Bar.js')


describe('Verify Search Bar Utility With Code Type Language', () => {

beforeEach(async () => {
        await HomePage.Ebay()
    })


   it('Type XSS Text', async () => {
        await SearchPage.TypeSecurityTest('<script>alert(1)</script>')
    })

    it('Type SQL Text', async () => {
        await SearchPage.TypeSecurityTest('SELECT * FROM items')
    })

    it('Type HTML Text', async () => {
        await SearchPage.TypeSecurityTest('<b>iPhone</b>')
    })

}) 