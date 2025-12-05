const HomePage = require('../pageobjects/Home.js')
const SearchPage = require('../pageobjects/Search.Bar.js')


describe('Verify Search Bar Utility With Code Type Language', () => {

beforeEach(async () => {
        await HomePage.open()
    })


   it('Type XSS Text', async () => {
        await SearchPage.TypeXSSTest('<script>alert(1)</script>')
    })

    it('Type SQL Text', async () => {
        await SearchPage.TypeSQLTest('SELECT * FROM items')
    })

    it('Type HTML Text', async () => {
        await SearchPage.TypeHTMLTest('<b>iPhone</b>')
    })

}) 