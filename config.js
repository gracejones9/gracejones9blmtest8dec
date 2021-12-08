var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiZ3JhY2Vqb25lcyIsImEiOiJja3d1YnpvNWYwaDV1MnVxbmJoaGppd3pwIn0.33ChyvS6EIBjkbFnvyx7TA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Spatial mapping of BLM',
    subtitle: 'How a social movement spread across the globe',
    byline: 'By Grace Jones',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'The spark',
            image: './path/to/image/source.png',
            description: 'BLM emerged in 2013 when George Zimmerman was acquitted for the murder of Trayvon Martin, in Sanford Florida.',
            location: {
                center: [-81.26771, lat: 28.81238],
                zoom: 12.37,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'mikebrown',
            alignment: 'right',
            hidden: false,
            title: 'The growth of BLM',
            image: './path/to/image/source.png',
            description: 'It was not until 2014, when police officer Darren Wilson shot and killed Michael Brown, a Black teenager, that BLM grew as a national movement in the US.',
            location: {
                center: [-90.29879, lat: 38.74886],
                zoom: 12.81,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
