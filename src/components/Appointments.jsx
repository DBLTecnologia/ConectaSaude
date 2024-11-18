import React, { useState } from 'react';

    function Appointments() {
      const [appointments, setAppointments] = useState([
        { id: 1, date: '2023-11-20', time: '10:30', unit: 'UBS Boa Vista', type: 'Consulta' },
        { id: 2, date: '2023-10-15', time: '14:00', unit: 'UAE Central', type: 'Exame' },
        // Adicione mais agendamentos conforme necessário
      ]);

      const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123456789',
      });

      const handleUserDataChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
      };

      return (
        <div className="min-h-screen bg-gray-50 p-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Agendamentos</h2>

          {/* Visualização de Agendamentos */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Meus Agendamentos</h3>
            <ul className="space-y-6">
              {appointments.map((appointment) => (
                <li key={appointment.id} className="bg-white shadow-lg rounded-lg p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl font-semibold text-gray-800">{appointment.type}</p>
                      <p className="text-gray-600">{appointment.date} às {appointment.time}</p>
                      <p className="text-gray-600">Unidade: {appointment.unit}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 transition">Detalhes</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Agendamento de Consultas e Exames */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Agendar Novo Atendimento</h3>
            <button className="bg-green-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition">
              Agendar Consulta
            </button>
          </section>

          {/* Atualização de Dados Cadastrais */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Atualizar Dados Cadastrais</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Telefone</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleUserDataChange}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition">
                Salvar Alterações
              </button>
            </form>
          </section>

          {/* Histórico de Atendimentos */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Histórico de Atendimentos</h3>
            <ul className="space-y-6">
              {/* Exemplo de histórico, pode ser preenchido com dados reais */}
              <li className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-xl font-semibold text-gray-800">Consulta - 2023-09-10</p>
                <p className="text-gray-600">UBS Boa Vista</p>
              </li>
            </ul>
          </section>
        </div>
      );
    }

    export default Appointments;