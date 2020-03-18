import AppPage from './AppPage';

class ServicesPage extends AppPage {

  get servicesDropDown(){
    return $('//span[contains(text(),"Services")]');
  };

  get virtualTeam(){
    return $('//span[contains(text(),"Virtual Team")]');
  };

  get h1() {
    return $('//h1');
  };
}

export default new ServicesPage();