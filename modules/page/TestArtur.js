import AppPage from "./AppPage";

class TestArtur extends AppPage {
  get sel1() {
    return $('//div[@data-test-id="doctor-card-search-results"]');
  }
  get sel2() {
    return $('//button[@data-ga-action="clickTable"]');
  }
}

export default new TestArtur();