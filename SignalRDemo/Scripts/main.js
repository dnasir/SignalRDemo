angular.module("mapApp", ["uiGmapgoogle-maps"])
    .factory("markers", function() {
        var markers = {};

        markers.list = [];

        markers.add = function(marker) {
            markers.list.push(marker);
        };

        markers.remove = function (marker) {
            var index = markers.list.indexOf(marker);
            if (index < 0) return;
            markers.list.splice(index, 1);
        };

        return markers;
    })
    .controller("mainCtrl", function (uiGmapGoogleMapApi, markers) {
        this.map = { center: { latitude: 58.9633, longitude: 5.7189 }, zoom: 12 };
        this.options = {};
        this.markers = markers.list;

        uiGmapGoogleMapApi.then(function(maps) {
            markers.add({
                id: 1,
                latitude: 58.922868,
                longitude: 5.704264,
                options: {
                    title: "Marker 1",
                    icon: {
                        url: "http://www.catalinmunteanu.com/wp-content/uploads/2015/01/gmaps_marker.png",
                        scaledSize: new maps.Size(45, 45)
                    }
                }
            });
            markers.add({
                id: 2,
                latitude: 58.922746,
                longitude: 5.719864,
                options: {
                    title: "Marker 2",
                    icon: {
                        url: "http://www.catalinmunteanu.com/wp-content/uploads/2015/01/gmaps_marker.png",
                        scaledSize: new maps.Size(45, 45)
                    }
                }
            });
            markers.add({
                id: 3,
                latitude: 58.918016,
                longitude: 5.724799,
                options: {
                    title: "Marker 3",
                    icon: {
                        url: "http://www.catalinmunteanu.com/wp-content/uploads/2015/01/gmaps_marker.png",
                        scaledSize: new maps.Size(45, 45)
                    }
                }
            });
        });
    })
    .controller("markerCtrl", function (markers) {
        this.markers = markers.list;

        this.remove = function(marker) {
            markers.remove(marker);
        };
    })