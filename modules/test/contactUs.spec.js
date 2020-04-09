import ContactPage from "../page/ContactPage";
import {expect} from "chai";
import {userData} from "../data/userData";
import ServicesPage from "../page/VirtualTeamPage";

describe('CONTACT_PAGE', () => {
  it('should open the `Contact` page', () => {
    ContactPage.open();
    browser.maximizeWindow();
  });

  it('should check the coockie message is exists', () => {
    const actual = $(ServicesPage.coockie).isDisplayed();
    if (expect(actual).to.be.true) {
      ServicesPage.coockie.click();
    };
  });

  it('should check the title `Contact` is exists', () => {
    const actual = $(ContactPage.h1).getText();
    const expected = 'Contact';
    expect(actual).eq(expected);
  });

  it('should check the input title `Name` is exists', () => {
    const actual = $(ContactPage.contactUsInputTitleName).getText();
    const expected = 'Name';
    expect(actual).eq(expected);
  });

  it('should check the input field `Name` is exists', () => {
    const actual = $(ContactPage.contactUsInputName).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should fill out the `Name` field', () => {
    ContactPage.contactUsInputName.setValue(userData.name);
  });

  it('should check the input title `Email` is exists', () => {
    const actual = $(ContactPage.contactUsInputTitleEmail).getText();
    const expected = 'Email';
    expect(actual).eq(expected);
  });

  it('should check the input field `Email` is exists', () => {
    const actual = $(ContactPage.contactUsInputEmail).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should fill out the `Email` field', () => {
    ContactPage.contactUsInputEmail.setValue(userData.email);
  });

  it('should check the input title `Message` is exists', () => {
    const actual = $(ContactPage.contactUsInputTitleMessage).getText();
    const expected = 'Message';
    expect(actual).eq(expected);
  });

  it('should check the input field `Message` is exists', () => {
    const actual = $(ContactPage.contactUsInputMessage).isDisplayed();
    expect(actual).to.be.true;
  });

  it('should fill out the `Message` field', () => {
    ContactPage.contactUsInputMessage.setValue(userData.message);
  });

  it('should do the scrollIntoView command', () => {
    const elem = ServicesPage.footer;
    // scroll to specific element
    elem.scrollIntoView();
  });
  browser.pause(20000);
  //
  // it('should check the recapcha checkbox is exists', () => {
  //   const actual = $(ContactPage.contactUsRecapchaCheckBox).isDisplayed();
  //   expect(actual).to.be.true;
  // });
  //
  // it('should click recapcha checkbox', () => {
  //   browser.$(ContactPage.contactUsRecapchaCheckBox).click();
  // });
  browser.pause(20000);
});
