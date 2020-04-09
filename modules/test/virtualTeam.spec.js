import HomePage from "../page/HomePage";
import VirtualTeamPage from "../page/VirtualTeamPage";
import ContactPage from "../page/ContactPage";
import {expect} from "chai";
import ServicesPage from "../page/ServicesPage";

describe('HOME_PAGE', () => {
  it('should open the homepage', () => {
    HomePage.open();
    browser.maximizeWindow();
  });

  it('should check menu item `Services` is exists', () => {
    const actual = $(HomePage.services).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should place cursor above the menu item `Services`', () => {
    $(HomePage.services).moveTo({});
  });
  browser.pause(30000);

  it('should place cursor above the menu item `Virtual Team`', () => {
    $(ServicesPage.virtualTeam).moveTo({});
  });

  it('should click on the menu item `Virtual Team`', () => {
    ServicesPage.virtualTeam.click();
  });

  it('should do the scrollIntoView command', () => {
    const elem = VirtualTeamPage.footer;
    // scroll to specific element
    elem.scrollIntoView();
  });
  browser.pause(70000);


  // it('should check the coockie message is exists', () => {
  //   const actual = $(VirtualTeamPage.coockie).isDisplayed();
  //   if (expect(actual).to.be.true) {
  //     VirtualTeamPage.coockie.click();
  //   }
  // });

  it('should check the button `Contact Us` is exists', () => {
    const actual = $(ContactPage.contactUsBtn).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should click on the button `Contact Us`', () => {
    ContactPage.contactUsBtn.isClickable();
  });
  browser.pause(7000);

});