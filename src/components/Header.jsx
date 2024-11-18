import React from 'react';
    import { Link } from 'react-router-dom';

    function Header() {
      return (
        <header className="bg-white shadow-md fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Conecta Saúde</div>
            <nav className="space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/appointments" className="text-gray-700 hover:text-blue-600">Agendamentos</Link>
              <Link to="/medical-history" className="text-gray-700 hover:text-blue-600">Histórico Médico</Link>
              <Link to="/vaccination-certificate" className="text-gray-700 hover:text-blue-600">Certificado de Vacinação</Link>
              <Link to="/testing-centers" className="text-gray-700 hover:text-blue-600">Centros de Testagem</Link>
              <Link to="/profile" className="text-gray-700 hover:text-blue-600">Perfil</Link>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
