import React from 'react';
    import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
    import 'leaflet/dist/leaflet.css';

    function TestingCenters() {
      const centers = [
        {
          id: 1,
          name: 'Posto de Saúde Boa Vista',
          address: 'Rua da Saúde, 123',
          hours: '08:00-17:00',
          position: [-8.047, -34.908],
        },
        // Adicione mais centros conforme necessário
      ];

      return (
        <div className="min-h-screen bg-gray-50 p-4">
          <h2 className="text-2xl font-bold mb-4">Centros de Testagem e Vacinação</h2>
          <MapContainer center={[-8.047, -34.908]} zoom={13} className="h-64 mb-4">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {centers.map((center) => (
              <Marker key={center.id} position={center.position}>
                <Popup>{center.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
          <div className="space-y-4">
            {centers.map((center) => (
              <div key={center.id} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold">{center.name}</h3>
                <p>{center.address}</p>
                <p>Horário: {center.hours}</p>
                <button className="text-blue-600 hover:underline mt-2">Ver mais</button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default TestingCenters;
