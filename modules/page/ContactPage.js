import AppPage from "./AppPage";

class ContactPage extends AppPage {

  get h1() {
    return $('//h1');
  };

  get contactUsBtn() {
    return $('//span[@class="qodef-btn-text"]');
  };

  get contactUsInputTitleName() {
    return $('//span[contains(text(),"Name")]');
  };

  get contactUsInputName() {
    return $('//input[@name="your-name"]');
  };

  get contactUsInputTitleEmail() {
    return $('//span[contains(text(),"Email")]');
  };

  get contactUsInputEmail() {
    return $('//input[@name="your-email"]');
  };

  get contactUsInputTitleMessage() {
    return $('//span[contains(text(),"Message")]');
  };

  get contactUsInputMessage() {
    return $('//textarea[@name="your-message"]');
  };

  get contactUsRecapchaCheckBox() {
    return $('//span[@id="recaptcha-anchor"]');
  };

  get coockie() {
    return $('//a[@id=\"cn-accept-cookie\"]');
  };

  open() {
    super.open('https://www.evolvice-team.de/en/kontakt/');
  }
}

export default new ContactPage();