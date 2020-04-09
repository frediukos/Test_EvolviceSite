import AppPage from "./AppPage";

class ServicesPage extends AppPage {

  get virtualTeam(){
    return $('//span[contains(text(),"Virtual Team")]');
    //$('//li[@id="sticky-nav-menu-item-6200"]');
    // //span[@class="item_text"][contains(text(),"Language")]'); //$('//span[contains(text(),"Virtual Team")]');
  };

}

export default new ServicesPage();