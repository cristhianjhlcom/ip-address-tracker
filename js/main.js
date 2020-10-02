"use strict";

const KEY = "at_aMGHtYnUYpJ0ACMN3hLsIgJ1DLkjS";
const trackForm = document.querySelector("#track-form");
const inputForm = document.querySelector("#inputTrack");
const ui = new UI();

document.addEventListener("DOMContentLoaded", async () => {
  trackForm.addEventListener("submit", newIpRequest);
  const curretIp = await getClientIP();
  const geoApi = new GeoAPI(KEY, curretIp);
  const responseGeoApi = await geoApi.apiRequest();

  setMyMapLocation(responseGeoApi);
  ui.buildCardWithInfo(responseGeoApi);
});
