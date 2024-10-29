import {useState} from 'react';
import {
    YMaps,
    Map,
    Placemark,
    ZoomControl,
    SearchControl,
    TrafficControl,
    TypeSelector,
    FullscreenControl,
    GeolocationControl
} from '@pbe/react-yandex-maps';

const YandexMap = () => {
    const [markers, setMarkers] = useState([
        {id: 1, coordinates: [41.326531417579865, 69.22842943947454], hint: 'Marker 1'}
    ]);

    const defaultState = {
        center: [41.326531417579865, 69.22842943947454],
        zoom: 12,
    };

    const handleMapClick = (event: any) => {
        const coords = event.get('coords');
        console.log('Clicked coordinates:', coords);

        const newMarker = {
            id: markers.length + 1,
            coordinates: coords,
            hint: `Marker ${markers.length + 1}`
        };

        setMarkers([...markers, newMarker]);
    };

    const handleDragEnd = (id: number) => (event: any) => {
        const newCoordinates = event.get('target').geometry.getCoordinates();

        setMarkers((prevMarkers) =>
            prevMarkers.map((marker) =>
                marker.id === id ? {...marker, coordinates: newCoordinates} : marker
            )
        );
    };

    const handleMarkerClick = (id: number) => () => {
        setMarkers((prevMarkers) =>
            prevMarkers.filter(marker => marker.id !== id)
        );
    };

    return (
        <div className={'px-5 md:px-10 lg:px-20 bg-black h-full'}>
            <div data-aos={'zoom-in-down'}>
                <YMaps query={{apikey: 'e904c66a-6150-47be-b3b3-0025775ead07'}}>
                    <Map
                        defaultState={defaultState}
                        style={{width: '100%', height: '500px', borderRadius: '18px'}}
                        onClick={handleMapClick}
                    >
                        <SearchControl
                            options={{
                                float: 'right',
                                provider: 'yandex#map',
                                results: 5,
                                language: 'en-US',
                            }}
                        />
                        <TrafficControl options={{float: 'right'}}/>
                        <TypeSelector options={{float: 'right'}}/>
                        <FullscreenControl options={{float: 'right'}}/>
                        <GeolocationControl options={{float: 'right'}}/>
                        {markers.map(marker => (
                            <Placemark
                                key={marker.id}
                                geometry={marker.coordinates}
                                properties={{hintContent: marker.hint}}
                                options={{draggable: true}}
                                onDragEnd={handleDragEnd(marker.id)}
                                onClick={handleMarkerClick(marker.id)}
                            />
                        ))}
                        <ZoomControl options={{float: 'right'}}/>
                    </Map>
                </YMaps>
            </div>
        </div>
    );
};

export default YandexMap;
