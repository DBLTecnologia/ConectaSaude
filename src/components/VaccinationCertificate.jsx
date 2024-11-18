import React from 'react';
    import { QRCodeCanvas } from 'qrcode.react';

    function VaccinationCertificate() {
      const userData = {
        name: 'John Doe',
        vaccines: [
          { name: 'COVID-19', doses: ['2023-01-15', '2023-07-15'] },
          { name: 'Influenza', doses: ['2024-03-10'] },
        ],
      };

      const downloadCertificate = () => {
        // Lógica para download do certificado
        alert('Download do certificado iniciado!');
      };

      return (
        <div className="min-h-screen bg-gray-50 p-4">
          <h2 className="text-2xl font-bold mb-4">Certificado de Vacinação</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Nome: {userData.name}</h3>
            <ul className="mb-4">
              {userData.vaccines.map((vaccine, index) => (
                <li key={index} className="mb-2">
                  <strong>{vaccine.name}:</strong> {vaccine.doses.join(', ')}
                </li>
              ))}
            </ul>
            <QRCodeCanvas value={JSON.stringify(userData)} size={128} className="mb-4" />
            <button
              onClick={downloadCertificate}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Download Certificado
            </button>
          </div>
        </div>
      );
    }

    export default VaccinationCertificate;
