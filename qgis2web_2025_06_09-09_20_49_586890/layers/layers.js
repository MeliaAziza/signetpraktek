var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_signettttttfixSightseeingTour_1 = new ol.format.GeoJSON();
var features_signettttttfixSightseeingTour_1 = format_signettttttfixSightseeingTour_1.readFeatures(json_signettttttfixSightseeingTour_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_signettttttfixSightseeingTour_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_signettttttfixSightseeingTour_1.addFeatures(features_signettttttfixSightseeingTour_1);
cluster_signettttttfixSightseeingTour_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_signettttttfixSightseeingTour_1
});
var lyr_signettttttfixSightseeingTour_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_signettttttfixSightseeingTour_1, 
                style: style_signettttttfixSightseeingTour_1,
                popuplayertitle: 'signetttttt fix — Sightseeing Tour',
                interactive: true,
                title: '<img src="styles/legend/signettttttfixSightseeingTour_1.png" /> signetttttt fix — Sightseeing Tour'
            });
var format_ADMINISTRASIKABUPATEN_AR_50K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIKABUPATEN_AR_50K_2 = format_ADMINISTRASIKABUPATEN_AR_50K_2.readFeatures(json_ADMINISTRASIKABUPATEN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKABUPATEN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKABUPATEN_AR_50K_2.addFeatures(features_ADMINISTRASIKABUPATEN_AR_50K_2);
var lyr_ADMINISTRASIKABUPATEN_AR_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKABUPATEN_AR_50K_2, 
                style: style_ADMINISTRASIKABUPATEN_AR_50K_2,
                popuplayertitle: 'ADMINISTRASIKABUPATEN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKABUPATEN_AR_50K_2.png" /> ADMINISTRASIKABUPATEN_AR_50K'
            });
var format_rumahsakitgriyamedika_3 = new ol.format.GeoJSON();
var features_rumahsakitgriyamedika_3 = format_rumahsakitgriyamedika_3.readFeatures(json_rumahsakitgriyamedika_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahsakitgriyamedika_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahsakitgriyamedika_3.addFeatures(features_rumahsakitgriyamedika_3);
var lyr_rumahsakitgriyamedika_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahsakitgriyamedika_3, 
                style: style_rumahsakitgriyamedika_3,
                popuplayertitle: 'rumah sakit griya medika',
                interactive: true,
                title: '<img src="styles/legend/rumahsakitgriyamedika_3.png" /> rumah sakit griya medika'
            });
var format_rsmutiarabunda_4 = new ol.format.GeoJSON();
var features_rsmutiarabunda_4 = format_rsmutiarabunda_4.readFeatures(json_rsmutiarabunda_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rsmutiarabunda_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rsmutiarabunda_4.addFeatures(features_rsmutiarabunda_4);
var lyr_rsmutiarabunda_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rsmutiarabunda_4, 
                style: style_rsmutiarabunda_4,
                popuplayertitle: 'rs mutiara bunda',
                interactive: true,
                title: '<img src="styles/legend/rsmutiarabunda_4.png" /> rs mutiara bunda'
            });
var format_rsudtubaba_5 = new ol.format.GeoJSON();
var features_rsudtubaba_5 = format_rsudtubaba_5.readFeatures(json_rsudtubaba_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rsudtubaba_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rsudtubaba_5.addFeatures(features_rsudtubaba_5);
var lyr_rsudtubaba_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rsudtubaba_5, 
                style: style_rsudtubaba_5,
                popuplayertitle: 'rsud tubaba',
                interactive: true,
                title: '<img src="styles/legend/rsudtubaba_5.png" /> rsud tubaba'
            });
var format_rsummiathayya_6 = new ol.format.GeoJSON();
var features_rsummiathayya_6 = format_rsummiathayya_6.readFeatures(json_rsummiathayya_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rsummiathayya_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rsummiathayya_6.addFeatures(features_rsummiathayya_6);
var lyr_rsummiathayya_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rsummiathayya_6, 
                style: style_rsummiathayya_6,
                popuplayertitle: 'rs ummi athayya',
                interactive: true,
                title: '<img src="styles/legend/rsummiathayya_6.png" /> rs ummi athayya'
            });
var format_rsassyifamedika_7 = new ol.format.GeoJSON();
var features_rsassyifamedika_7 = format_rsassyifamedika_7.readFeatures(json_rsassyifamedika_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rsassyifamedika_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rsassyifamedika_7.addFeatures(features_rsassyifamedika_7);
var lyr_rsassyifamedika_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rsassyifamedika_7, 
                style: style_rsassyifamedika_7,
                popuplayertitle: 'rs assyifa medika',
                interactive: true,
                title: '<img src="styles/legend/rsassyifamedika_7.png" /> rs assyifa medika'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_signettttttfixSightseeingTour_1.setVisible(true);lyr_ADMINISTRASIKABUPATEN_AR_50K_2.setVisible(true);lyr_rumahsakitgriyamedika_3.setVisible(true);lyr_rsmutiarabunda_4.setVisible(true);lyr_rsudtubaba_5.setVisible(true);lyr_rsummiathayya_6.setVisible(true);lyr_rsassyifamedika_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_signettttttfixSightseeingTour_1,lyr_ADMINISTRASIKABUPATEN_AR_50K_2,lyr_rumahsakitgriyamedika_3,lyr_rsmutiarabunda_4,lyr_rsudtubaba_5,lyr_rsummiathayya_6,lyr_rsassyifamedika_7];
lyr_signettttttfixSightseeingTour_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_rumahsakitgriyamedika_3.set('fieldAliases', {'id': 'id', 'rs': 'rs', 'foto': 'foto', 'foto rs gm': 'foto rs gm', });
lyr_rsmutiarabunda_4.set('fieldAliases', {'id': 'id', 'rs': 'rs', 'foto': 'foto', 'foto rs mb': 'foto rs mb', });
lyr_rsudtubaba_5.set('fieldAliases', {'id': 'id', 'rs': 'rs', 'foto': 'foto', 'foto rs tb': 'foto rs tb', });
lyr_rsummiathayya_6.set('fieldAliases', {'id': 'id', 'rs': 'rs', 'foto': 'foto', 'foto ua': 'foto ua', 'foto um': 'foto um', });
lyr_rsassyifamedika_7.set('fieldAliases', {'id': 'id', 'rs': 'rs', 'foto': 'foto', 'foto am': 'foto am', });
lyr_signettttttfixSightseeingTour_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'ExternalResource', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_rumahsakitgriyamedika_3.set('fieldImages', {'id': 'TextEdit', 'rs': 'TextEdit', 'foto': 'TextEdit', 'foto rs gm': 'ExternalResource', });
lyr_rsmutiarabunda_4.set('fieldImages', {'id': 'TextEdit', 'rs': 'TextEdit', 'foto': 'TextEdit', 'foto rs mb': 'ExternalResource', });
lyr_rsudtubaba_5.set('fieldImages', {'id': 'TextEdit', 'rs': 'TextEdit', 'foto': 'TextEdit', 'foto rs tb': 'ExternalResource', });
lyr_rsummiathayya_6.set('fieldImages', {'id': 'TextEdit', 'rs': 'TextEdit', 'foto': 'TextEdit', 'foto ua': 'TextEdit', 'foto um': 'ExternalResource', });
lyr_rsassyifamedika_7.set('fieldImages', {'id': 'TextEdit', 'rs': 'TextEdit', 'foto': 'TextEdit', 'foto am': 'ExternalResource', });
lyr_signettttttfixSightseeingTour_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_rumahsakitgriyamedika_3.set('fieldLabels', {'id': 'no label', 'rs': 'no label', 'foto': 'no label', 'foto rs gm': 'no label', });
lyr_rsmutiarabunda_4.set('fieldLabels', {'id': 'no label', 'rs': 'no label', 'foto': 'no label', 'foto rs mb': 'no label', });
lyr_rsudtubaba_5.set('fieldLabels', {'id': 'no label', 'rs': 'no label', 'foto': 'no label', 'foto rs tb': 'no label', });
lyr_rsummiathayya_6.set('fieldLabels', {'id': 'no label', 'rs': 'no label', 'foto': 'no label', 'foto ua': 'no label', 'foto um': 'no label', });
lyr_rsassyifamedika_7.set('fieldLabels', {'id': 'no label', 'rs': 'no label', 'foto': 'no label', 'foto am': 'no label', });
lyr_rsassyifamedika_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});