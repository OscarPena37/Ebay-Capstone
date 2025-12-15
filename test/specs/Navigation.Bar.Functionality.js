const HomePage = require('../pageobjects/Home.js')
const NavPage = require('../pageobjects/Navigation.Bar.js')

describe('Verify Functionlity of the Navigation Bar', () => {
    
beforeEach(async () => {
        await HomePage.open()
    })
    
    
    it('Verifys That All Paths Are Clickable', async () => {
            await NavPage.ClickAllPaths()
        })
    it('Verifys Dropbox Is Hoverable', async () => {
            await NavPage.HoverOverNav()
        })
    it('Verifys Hovering Out of Dropbox', async () => {
            await NavPage.HoverOutNav()
        })
    it('Open a Sub Catyegory From Path', async () => {
            await NavPage.ClickAllSubPaths()
        })
    it('Click Image in Dropbox', async () => {
            await NavPage.hoverAndClickImage('Motors')
        })








})