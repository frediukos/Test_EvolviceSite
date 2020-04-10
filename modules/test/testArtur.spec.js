import axios from 'axios';
import {expect} from 'chai';
import TestArtur from "../page/TestArtur";

describe('DOCTOR SEARCH', () => {
  before('should open docdoc.ru/doctor', () => {
    browser.url('https://docdoc.ru/doctor');
    browser.maximizeWindow();
  });

  it('should verify that there are 10 doctors on a page', () => {
    expect(browser.$$('//div[@data-test-id="doctor-card-search-results"]').length).eq(10);
  });

  it('should verify that `select dates` element is displayed', () => {
    browser.$('//button[@data-test-id="calendar-button"]').scrollIntoView();
    expect(browser.$('//button[@data-test-id="calendar-button"]').isDisplayed()).true;

    //div[@class='sorting-filters-wrapper']//div[@class='select-box-with-calendar']//div//button[@class='button color--red vue-button']
    browser.pause(3000);
    //expect(browser.$('//div[@data-test-id="date_select_items"]').isDisplayed()).true;
  });

  it('should verify that `Все дни` is selected', () => {
    browser.$('//button[@data-test-id="calendar-button"]').click();
    const elementClass = browser.$('//button[@data-test-id="date_select"]').getAttribute('class');
    expect(elementClass.includes('active')).true;
  });

  it('should click `Завтра` and verify that sort button label is correct', () => {
    // 2nd option: browser.$('//button[@data-test-id="calendar-item.1"]').click();
    browser.$('//button//*[contains(text(),"Завтра")]').click();
    expect(browser.$('//button[@data-test-id="calendar-button"]').getText()).eq('Расписание на завтра');
  });
  //browser.pause(70000);

  it('should verify that 10 doctors show on the page', () => {
    const quantity = browser.$$('//div[@data-test-id="doctor-card-search-results"]').length;
    expect(quantity).eq(10);
  });

  it('should check the text `Онлайн-расписание на`', () => {
    browser.$('//*[text()="Онлайн-расписание на"]').isDisplayed(30000);
  });

  it('should verify that displayed all doctors work on selected date', () => {
    const allDoctors = browser.$$('//div[@data-test-id="doctor-card-search-results"]');
    for (let i = 1; i <= allDoctors.length; i++){
      const timeSlotsCount = $$('//div[@data-test-id="doctor-card-search-results"][${i}]//button[@data-ga-action="clickTable"]').length;
      expect(timeSlotsCount).to.be.above(0);
    }
  });
  browser.pause(70000);

});