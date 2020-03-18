import HomePage from "../page/HomePage";
import ServicesPage from "../page/ServicesPage";
import {expect} from "chai";

describe('HOMEPAGE', () => {
  it('should open the homepage', () => {
    HomePage.open();
  });

  it('should check menu item `Services` is exists', () => {
    const actual = $(HomePage.services).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should place cursor above the menu item `Services`', () => {
    $(ServicesPage.servicesDropDown).moveTo({});
  });

  it('should click on the menu item `Virtual Team`', () => {
    ServicesPage.virtualTeam.click();
  });

  it('should check the title `Virtual Team` is exists', () => {
    const actual = $(ServicesPage.h1).getText();
    const expected = 'Virtual Team';
    expect(actual).eq(expected);
  });

});