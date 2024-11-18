import React from 'react';

    function MedicalHistory() {
      const records = [
        { id: 1, date: '2023-11-10', time: '09:00', type: 'Consulta', detailsLink: '#' },
        { id: 2, date: '2023-10-05', time: '11:30', type: 'Exame de Sangue', detailsLink: '#' },
        // Adicione mais registros conforme necessário
      ];

      return (
        <div className="min-h-screen bg-gray-50 p-4">
          <h2 className="text-2xl font-bold mb-4">Histórico Médico</h2>
          <ul className="space-y-4">
            {records.map((record) => (
              <li key={record.id} className="bg-white shadow-md rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">{record.type}</p>
                    <p className="text-gray-600">{record.date} às {record.time}</p>
                  </div>
                  <a href={record.detailsLink} className="text-blue-600 hover:underline">
                    Ver Detalhes
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default MedicalHistory;