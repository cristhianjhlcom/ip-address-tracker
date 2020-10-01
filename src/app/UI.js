class UI {
  buildCardWithInfo(data) {
    const geoDataContainer = document.querySelector("#geoContentResponse");
    const infoContainer = `
      <div class="content__col">
        <h4 class="content__title">IP Address</h4>
        <p class="content__description">${data.ip}</p>
      </div>
      <div class="content__col">
        <h4 class="content__title">Location</h4>
        <p class="content__description">${data.location.city}, ${data.location.region} ${data.location.postalCode}</p>
      </div>
      <div class="content__col">
        <h4 class="content__title">Timezone</h4>
        <p class="content__description">UTC${data.location.timezone}</p>
      </div>
      <div class="content__col">
        <h4 class="content__title">ISP</h4>
        <p class="content__description">${data.isp}</p>
      </div>
    `;
    geoDataContainer.innerHTML = infoContainer;
  }
  messageOfError(message) {
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("messageError");
    errorContainer.innerHTML = message;
    document.querySelector("body").appendChild(errorContainer);
    setTimeout(() => {
      errorContainer.classList.add("errorHidde");
    }, 3000);
  }
}
