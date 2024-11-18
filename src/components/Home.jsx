import React from 'react';
    import { Link } from 'react-router-dom';
    import { MapContainer, TileLayer, Marker } from 'react-leaflet';
    import 'leaflet/dist/leaflet.css';

    function Home() {
      return (
        <div className="min-h-screen flex flex-col">
          {/* Barra de Navegação Superior */}
          <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Conecta Saúde</div>
            <nav className="space-x-4">
              <Link to="/appointments" className="hover:underline">Agendamentos</Link>
              <Link to="/medical-history" className="hover:underline">Histórico Médico</Link>
              <Link to="/vaccination-certificate" className="hover:underline">Certificado de Vacinação</Link>
              <Link to="/testing-centers" className="hover:underline">Centros de Testagem</Link>
              <Link to="/profile" className="hover:underline">Perfil</Link>
            </nav>
          </header>

          {/* Banner Principal */}
          <section className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-image.jpg)' }}>
            <h1 className="text-3xl text-white font-bold">Acesse seus serviços de saúde de forma rápida e fácil</h1>
          </section>

          {/* Seção de Destaques */}
          <section className="p-4">
            <h2 className="text-2xl font-bold mb-4">Destaques</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="font-semibold">Agendamento de Consultas</h3>
                <p>Agende suas consultas de forma prática.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="font-semibold">Eventos de Saúde</h3>
                <p>Participe de campanhas de vacinação.</p>
              </div>
            </div>
          </section>

          {/* Categorias de Serviços */}
          <section className="p-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Categorias de Serviços</h2>
            <div className="flex space-x-4">
              <div className="flex-1 bg-white shadow-md rounded-lg p-4 text-center">
                <i className="fas fa-stethoscope text-2xl"></i>
                <p>Consultas</p>
              </div>
              <div className="flex-1 bg-white shadow-md rounded-lg p-4 text-center">
                <i className="fas fa-vial text-2xl"></i>
                <p>Exames</p>
              </div>
              <div className="flex-1 bg-white shadow-md rounded-lg p-4 text-center">
                <i className="fas fa-syringe text-2xl"></i>
                <p>Vacinação</p>
              </div>
              <div className="flex-1 bg-white shadow-md rounded-lg p-4 text-center">
                <i className="fas fa-info-circle text-2xl"></i>
                <p>Informações de Saúde</p>
              </div>
            </div>
          </section>

          {/* Mapa Interativo */}
          <section className="p-4">
            <h2 className="text-2xl font-bold mb-4">Mapa de Unidades de Saúde</h2>
            <MapContainer center={[-8.047, -34.908]} zoom={13} className="h-64">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[-8.047, -34.908]} />
            </MapContainer>
          </section>

          {/* Notícias e Atualizações */}
          <section className="p-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Notícias e Atualizações</h2>
            <div className="space-y-4">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="font-semibold">Nova Campanha de Vacinação</h3>
                <p>Confira as datas e locais para a nova campanha de vacinação.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="font-semibold">Atualização de Serviços</h3>
                <p>Veja as últimas atualizações nos serviços de saúde.</p>
              </div>
            </div>
          </section>

          {/* Rodapé */}
          <footer className="bg-blue-600 text-white p-4 text-center">
            <p>&copy; 2023 Conecta Saúde</p>
            <div className="space-x-4">
              <Link to="/privacy" className="hover:underline">Política de Privacidade</Link>
              <Link to="/terms" className="hover:underline">Termos de Uso</Link>
              <Link to="/social" className="hover:underline">Redes Sociais</Link>
            </div>
          </footer>
        </div>
      );
    }

    export default Home;