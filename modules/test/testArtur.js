import axios from 'axios';
import {expect} from 'chai';

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
    browser.$('//*[text()="Онлайн-расписание на 10 апреля"]').isDisplayed(30000);
    expect(browser.$('//button[@data-test-id="calendar-button"]').getText()).eq('Расписание на завтра');
  });
  //browser.pause(70000);

  it('should verify that 10 doctors show on the page', () => {
    expect(browser.$$('//div[@data-test-id="doctor-card-search-results"]').length).eq(10);
  });

  it('should verify that displayed all doctors work on selected date', () => {
    const allDoctors = browser.$$('//div[@data-test-id="doctor-card-search-results"]');
    const slots =[];
    for (let i = 1; i <= allDoctors.length; i++){
      const timeSlotsCount = $$(`(//div[@data-test-id="doctor-card-search-results"])[${i}]//button[@data-ga-action="clickTable"]`).length;
      slots.push(timeSlotsCount);
      console.log(timeSlotsCount);
      console.log(allDoctors.length);
      console.log("*****************************");
      const check = slots.every(el => el > 0);
      expect(check).true;


      //if (expect(timeSlotsCount).to.be.above(0)) console.log("--------- time is available -----------") ;
    }
  });
  //browser.pause(70000);

});