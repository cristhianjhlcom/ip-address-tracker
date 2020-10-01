const setMyMapLocation = (coords) => {
  // We verify that there is no initialized map
  const mapContainer = L.DomUtil.get("showMap");
  if (mapContainer != null) {
    mapContainer._leaflet_id = null;
  }

  // we initialize a new map after every request
  let map = L.map("showMap");
  map.setView([coords.location.lat, coords.location.lng], 13);
  L.marker([coords.location.lat, coords.location.lng]).addTo(map);
  L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
};

const newIpRequest = async (e) => {
  e.preventDefault();

  if (inputForm.value === "") {
    const errorMessage = new UI();
    errorMessage.messageOfError("No puede dejar el campo vacio.");
  } else {
    const ui = new UI();
    const geoApi = new GeoAPI(KEY, inputForm.value);
    const responseGeoApi = await geoApi.apiRequest();
    setMyMapLocation(responseGeoApi);
    ui.buildCardWithInfo(responseGeoApi);
    e.target.reset();
  }
};

const getClientIP = async () => {
  const request = await fetch("http://ipinfo.io/?token=0568e2e77ac1ba");
  const response = await request.json();
  return response.ip;
};
