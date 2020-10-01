class GeoAPI {
  constructor(API_KEY, searchField) {
    this.API_KEY = API_KEY;
    this.searchField = searchField;
  }

  async apiRequest() {
    const request = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${this.API_KEY}&domain=${this.searchField}`
    );
    if (request.status === 422) {
      const errorMessage = new UI();
      let inputIp = document.querySelector("#inputTrack");
      errorMessage.messageOfError(
        "The search parameter is wrong, please check and try again."
      );
      inputIp.value = "";
      inputIp.focus();
    } else {
      const response = await request.json();

      return response;
    }
  }
}
