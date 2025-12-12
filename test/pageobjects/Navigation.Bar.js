const { $, expect } = require ('@wdio/globals')
const HomePage = require('../pageobjects/Home.js')

class NavPage {

    get Category() {
    return (name) => $(`=${name}`)}

    get MoreDropbox() {return $('div=More')}
    get MotorsSubPath() {return $('a.vl-flyout-nav__js-link')}
    get ShopNowButton() {return $('img.vl-flyout-nav__js-rtmImg[alt="Motors"]')}
    get SubHeader() {return $('h1.textual-display.page-title')}
    get NavContainer() {return $('ul.vl-flyout-nav__container')}
    get NavDropbox() {return $('.vl-flyout-nav__js-tab.vl-flyout-nav__js-show')}
    async hoverCategory(name) {
    await this.Category(name).moveTo()
 }
    


    async ClickAllPaths() {
    const paths = [
        { name: 'Motors', url: 'Auto-Parts-and-Vehicles' },
        { name: 'Electronics', url: 'Electronics' },
        { name: 'Collectibles', url: 'Collectibles-Art' },
        { name: 'Home & Garden', url: 'Home-Garden' },
        { name: 'Clothing, Shoes & Accessories', url: 'Clothing-Shoes-Accessories' },
        { name: 'Toys', url: 'Toys-Hobbies' },
        { name: 'Sporting Goods', url: 'Sporting-Goods' },
        { name: 'Business & Industrial', url: 'Business-Industrial', before: true },
        { name: 'Jewelry & Watches', url: 'Jewelry-Watches', before: true },
        { name: 'Refurbished', url: 'eBay-Refurbished', before: true },
    ]
    for (const p of paths) {
        if (p.before) {
        await this.MoreDropbox.click()}
        await this.Category(p.name).click()
        await expect(browser).toHaveUrl(expect.stringContaining(p.url))
        await HomePage.EbayLogo.click()
    }
}


    async HoverOverNav() {
        await this.Category('Motors').moveTo()
        await expect (this.NavDropbox).toBeDisplayed()
    }

    async HoverOutNav() {
        await this.Category('Motors').moveTo()
        await HomePage.EbayLogo.moveTo()
        await expect (this.NavDropbox).not.toBeDisplayed()
    }

    async ClickAllSubPaths() {
    const paths = [
        { name1: 'Motors',name2:'All Parts & Accessories', url: 'Auto-Parts-Accessories' },
        { name1: 'Electronics',name2:'Computers, Tablets & Network Hardware', url: 'Computers-Tablets-Network-Hardware' },
        { name1: 'Collectibles',name2:'Sports Trading Cards', url: 'Sports-Trading-Cards-Accessories' },
        { name1: 'Home & Garden',name2:'Home Improvement', url: 'Home-Improvement' },
        { name1: 'Clothing, Shoes & Accessories',name2:'Designer Handbags', url: 'Designer-Handbags' },
        { name1: 'Toys',name2:'LEGO', url: 'LEGO-R-Building-Toys' },
        { name1: 'Sporting Goods',name2:'Golf Clubs', url: 'Golf-Clubs' },
        { name1: 'Business & Industrial',name2:'Heavy Equipment', url: 'Heavy-Equipment', before: true },
        { name1: 'Jewelry & Watches',name2:'Luxury Watches', url: 'Luxury-Watches', before: true },
        { name1: 'Refurbished',name2:'Cell Phones & Smartphones', url: 'Cell-Phones-Smartphones', before: true },
    ]
    for (const p of paths) {
        if (p.before) {
        await browser.setWindowSize(1920, 1080)}
        await this.hoverCategory(p.name1)
        await this.Category(p.name2).click()
        await expect(browser).toHaveUrl(expect.stringContaining(p.url))
        await HomePage.EbayLogo.click()
    }
}


}
module.exports = new NavPage ()
