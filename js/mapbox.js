mapboxgl.accessToken = '<pk.eyJ1IjoibW9jYXRpb24iLCJhIjoiY2piZW1lcHVwMm1scjJxbnUzb2c1bGd1bSJ9.aNIQCgZmF0qRKW1wqRAoPw>';
var mapbox = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mocation/cjbxueu3410ut2smhpj7uzyyz',
	center: [121.152278, 24.979832],
	zoom: 10.38
});
mapbox.on('load', function () {

	mapbox.addLayer({
		"id": "points",
		"type": "symbol",
		"source": {
			"type": "FeatureCollection",
			"features": [
				{
					"type": "Feature",
					"properties": {},
					"geometry": {
						"type": "Point",
						"coordinates": [
          121.24172687530519,
          25.117252275490756
        ]
					}
    },
				{
					"type": "Feature",
					"properties": {},
					"geometry": {
						"type": "Point",
						"coordinates": [
          121.01251602172852,
          24.98911154868766
        ]
					}
    },
				{
					"type": "Feature",
					"properties": {},
					"geometry": {
						"type": "LineString",
						"coordinates": [
          [
            121.24168395996095,
            25.117932276583332
          ],
          [
            121.22726440429688,
            25.11358020421456
          ],
          [
            121.21559143066406,
            25.111093236145866
          ],
          [
            121.20391845703125,
            25.106430034654863
          ],
          [
            121.1846923828125,
            25.095548539604252
          ],
          [
            121.16477966308594,
            25.084977017545775
          ],
          [
            121.14521026611328,
            25.079379959695842
          ],
          [
            121.12598419189453,
            25.075648445630527
          ],
          [
            121.11122131347655,
            25.07005096131539
          ],
          [
            121.1016082763672,
            25.067874092769078
          ],
          [
            121.09251022338867,
            25.061110004374438
          ],
          [
            121.0806655883789,
            25.05271268549025
          ],
          [
            121.06976509094238,
            25.04750294849465
          ],
          [
            121.06015205383302,
            25.044470313080836
          ],
          [
            121.05131149291992,
            25.039493518078086
          ],
          [
            121.0396385192871,
            25.030161483147243
          ],
          [
            121.03423118591309,
            25.021450943482748
          ],
          [
            121.02796554565431,
            25.011806410672037
          ],
          [
            121.01245164871214,
            24.989208793540882
          ]
        ]
					}
    }
  ]
		},

	});
});
