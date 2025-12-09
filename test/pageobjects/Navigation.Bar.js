const { $ } = require ('@wdio/globals')
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

    get NavContainer() {return $('ul.vl-flyout-nav__container')}
    get NavDropbox() {return $('.vl-flyout-nav__js-tab.vl-flyout-nav__js-show')}


    async VerifyNavExsists() {
        await expect (this.NavContainer).toBeDisplayed()
    }

    async ClickAllPaths(){
        await this.MotorsPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('Auto-Parts-and-Vehicles'))
        await HomePage.EbayLogo.click()

        await this.ElectronicsPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('Electronics'))
        await HomePage.EbayLogo.click()

        await this.CollectiblesPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('Collectibles-Art'))
        await HomePage.EbayLogo.click()

        await this.GardenPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('Home-Garden'))
        await HomePage.EbayLogo.click()

        await this.ClothingPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('Clothing-Shoes-Accessories'))
        await HomePage.EbayLogo.click()

        await this.ToysPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('Toys-Hobbies'))
        await HomePage.EbayLogo.click()

        await this.SportsPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('Sporting-Goods'))
        await HomePage.EbayLogo.click()

        await this.MoreDropbox.click()
        await this.BusinessPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('Business-Industrial'))
        await HomePage.EbayLogo.click()

        await this.MoreDropbox.click()
        await this.JewelryPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('Jewelry-Watches'))
        await HomePage.EbayLogo.click()

        await this.MoreDropbox.click()
        await this.RefurbishedPath.click()
        await expect (browser).toHaveUrl(expect.stringContaining('eBay-Refurbished'))
        await HomePage.EbayLogo.click()
        
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
        await expect (browser).toHaveUrl(expect.stringContaining('Auto-Parts-Accessories'))
    }

    async ClickShopNow(){
        await this.MotorsPath.moveTo()
        await this.ShopNowButton.click()
        await HomePage.scrollDown(600)
        await (expect.stringContaining('eBay Motors'))
    }

}
module.exports = new NavPage ()
