const { $, expect } = require ('@wdio/globals')
const HomePage = require('../pageobjects/Home.js')

class NavPage {

    get MotorsPath() {return $('=Motors')}
    get ElectronicsPath() {return $('=Electronics')}
    get CollectiblesPath() {return $('=Collectibles')}
    get GardenPath() {return $('=Home & Garden')}
    get ClothingPath() {return $('=Clothing, Shoes & Accessories')}
    get ToysPath() {return $('=Toys')}
    get SportsPath() {return $('=Sporting Goods')}
    get BusinessPath() {return $('=Business & Industrial')}
    get JewelryPath() {return $('=Jewelry & Watches')}
    get RefurbishedPath() {return $('=Refurbished')}
    get MoreDropbox() {return $('div=More')}
    get MotorsSubPath() {return $('a.vl-flyout-nav__js-link')}
    get ShopNowButton() {return $('img.vl-flyout-nav__js-rtmImg[alt="Motors"]')}

    get SubHeader() {return $('h1.textual-display.page-title')}
    get NavContainer() {return $('ul.vl-flyout-nav__container')}
    get NavDropbox() {return $('.vl-flyout-nav__js-tab.vl-flyout-nav__js-show')}


    async ClickAllPaths() {
    const paths = [
        { click: this.MotorsPath, url: 'Auto-Parts-and-Vehicles' },
        { click: this.ElectronicsPath, url: 'Electronics' },
        { click: this.CollectiblesPath, url: 'Collectibles-Art' },
        { click: this.GardenPath, url: 'Home-Garden' },
        { click: this.ClothingPath, url: 'Clothing-Shoes-Accessories' },
        { click: this.ToysPath, url: 'Toys-Hobbies' },
        { click: this.SportsPath, url: 'Sporting-Goods' },
        { before: this.MoreDropbox, click: this.BusinessPath, url: 'Business-Industrial' },
        { before: this.MoreDropbox, click: this.JewelryPath, url: 'Jewelry-Watches' },
        { before: this.MoreDropbox, click: this.RefurbishedPath, url: 'eBay-Refurbished' },
    ]
    for (const p of paths) {
        if (p.before) await p.before.click()
        await p.click.click()
        await expect(browser).toHaveUrl(expect.stringContaining(p.url))
        await HomePage.EbayLogo.click()
    }
}

    async HoverOverNav() {
        await this.MotorsPath.moveTo()
        await expect (this.NavDropbox).toBeDisplayed()
    }

    async HoverOutNav() {
        await this.MotorsPath.moveTo()
        await HomePage.EbayLogo.moveTo()
        await expect (this.NavDropbox).not.toBeDisplayed()
    }

    async ClickSubPath(){
        await this.MotorsPath.moveTo()
        await this.MotorsSubPath.click()
        await expect(this.SubHeader).toBeDisplayed
    }

    async ClickShopNow(){
        await this.MotorsPath.moveTo()
        await this.ShopNowButton.click()
        await HomePage.scrollDown(600)
        await expect(browser).toHaveTitle(expect.stringContaining('Electronics, Cars, Fashion, Collectibles & More | eBay'))
    }

}
module.exports = new NavPage ()
