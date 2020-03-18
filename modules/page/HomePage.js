import AppPage from './AppPage';

class HomePage extends AppPage {
  get logo(){
    return $('//img[@class="qodef-light-logo"]');
  }

  get services(){
    return $('//span[contains(text(),"Services")]');
  }

  get company(){
    return $('//span[contains(text(),"Company")]');
  }

  get news(){
    return $('//span[contains(text(),"News")]');
  }

  get blog(){
    return $('//span[contains(text(),"Blog")]');
  }

  get jobs(){
    return $('//span[contains(text(),"Jobs")]');
  }

  get contact(){
    return $('//span[contains(text(),"Contact")]');
  }

  get language(){
    return $('//span[contains(text(),"Language")]');
  }

  open() {
    super.open('https://www.evolvice-team.de//en');
  }

}

export default new HomePage();