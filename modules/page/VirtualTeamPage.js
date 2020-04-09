import AppPage from './AppPage';

class VirtualTeamPage extends AppPage {
  //
  // get servicesDropDown(){
  //   return $('//span[contains(text(),"Services")]');
  // };

  get h1() {
    return $('//h1');
  };

  get coockie() {
    return $('//a[@id=\"cn-accept-cookie\"]');
  };

  get footer() {
    return $('//div[@class="qodef-footer-bottom-holder"]');
  };

}

export default new VirtualTeamPage();