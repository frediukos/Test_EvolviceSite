import {expect} from 'chai';
//import AppPage from "../page/AppPage";
import HomePage from "../page/HomePage";

describe('HOME_PAGE', () => {
  it('should open the homepage', () => {
    HomePage.open();
    browser.maximizeWindow();
  });

  it('should check the logo Evolvice is exists', () => {
    const actual = $(HomePage.logo).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should check menu item `Services` is exists', () => {
    const actual = $(HomePage.services).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should click on the menu item Services', () => {
    HomePage.services.click();
  });

  it('should check menu item `Company` is exists', () => {
    const actual = $(HomePage.company).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should click on the menu item `Company`', () => {
    HomePage.company.click();
  });

  it('should check menu item `News` is exists', () => {
    const actual = $(HomePage.news).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should click on the menu item `News`', () => {
    HomePage.news.click();
  });

  it('should check menu item `Blog` is exists', () => {
    const actual = $(HomePage.blog).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should click on the menu item `Blog`', () => {
    HomePage.blog.click();
  });

  it('should check menu item `Jobs` is exists', () => {
    const actual = $(HomePage.jobs).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should click on the menu item `Jobs`', () => {
    HomePage.jobs.click();
  });

  it('should check menu item `Contact` is exists', () => {
    const actual = $(HomePage.contact).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should click on the menu item `Contact`', () => {
    HomePage.contact.click();
  });

  it('should check menu item `Language` is exists', () => {
    const actual = $(HomePage.language).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should click on the menu item `Language`', () => {
    HomePage.language.click();
  });

});