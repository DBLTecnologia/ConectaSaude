import React, { useState } from 'react';

    function Profile() {
      const [user, setUser] = useState({
        avatar: 'https://via.placeholder.com/150',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123456789',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
      };

      return (
        <div className="min-h-screen bg-gray-50 p-4">
          <h2 className="text-2xl font-bold mb-4">Perfil</h2>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full mb-4" />
            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label className="block text-gray-700">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Telefone</label>
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Salvar
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default Profile;
