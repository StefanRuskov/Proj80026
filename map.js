require(["esri/config", "esri/WebMap", "esri/views/MapView", "esri/widgets/Home", "esri/widgets/LayerList", "esri/widgets/BasemapGallery", "esri/widgets/Directions", "esri/layers/RouteLayer", "esri/widgets/ScaleBar", "esri/widgets/Search"],
    function (esriConfig, WebMap, MapView, Home, LayerList, BasemapGallery, Directions, RouteLayer, ScaleBar, Search) {

        esriConfig.apiKey = "AAPK77ebc8a134de4074a160da0e32d0d877onv_cK6xV7_3fD5hbgt8oYIPGcwHVf3SZVZkhweY7eONVEXqwdhRAkgphMmXCg9x"

        const routeLayer = new RouteLayer();

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });

        webmap.layers.add(routeLayer);

        const view = new MapView({
            container: "viewDiv",
            map: webmap
        });

        const directionsWidget = new Directions({
            layer: routeLayer,
            apiKey: "AAPK77ebc8a134de4074a160da0e32d0d877onv_cK6xV7_3fD5hbgt8oYIPGcwHVf3SZVZkhweY7eONVEXqwdhRAkgphMmXCg9x",
            view
        });

        view.ui.add(directionsWidget, { position: "bottom-right" });

        const homeBtn = new Home({
            view,
        });

        view.ui.add(homeBtn, "top-left");

        const layerList = new LayerList({
            view,
        });

        view.ui.add("layer-list-btn", "top-right");
        view.ui.add(layerList, "top-right");
        view.ui.add("basemap-gallery-btn", "top-right");

        const basemapGallery = new BasemapGallery({
            view
        });

        view.ui.add(basemapGallery, "top-right");

        const scaleBar = new ScaleBar({
            view
        });
        view.ui.add(scaleBar, {
            position: "bottom-left"
        });

        const searchWidget = new Search({
            view
        });
        view.ui.add(searchWidget, {
            position: "top-left",
            index: 0
        });

        document.getElementById("layer-list-btn").addEventListener("click", function () {
            toggleButton("layerList");
        });

        document.getElementById("basemap-gallery-btn").addEventListener("click", function () {
            toggleButton("gallery");
        });

        function toggleButton(element) {
            if (element == "layerList") {
            const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
            const currentProp = layerListEl.style.getPropertyValue("display");

            layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");
            } else if (element == "gallery") {
            const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
            const currentPropGallery = galleryEl.style.getPropertyValue("display");
            galleryEl.style.setProperty("display", currentPropGallery == "none" ? "block" : "none");
            }
            


            
        };

        

        

        




    })