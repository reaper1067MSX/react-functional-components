import React from "react";

interface IProps {
  onEdit: (person: Person) => void;
}

interface Person {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  photoUrl: string;
}

const PersonCard: React.FC<IProps> = ({ onEdit }) => {
  const person: Person = {
    id: 1,
    name: "Ana García",
    email: "ana.garcia@email.com",
    phone: "+34 123 456 789",
    address: "Calle Principal 123, Madrid",
    photoUrl: "/path/to/photo.jpg",
  };

  const handleClick = () => {
    onEdit(person);
  };

  return (
    <div className="card p-4 shadow-lg rounded-lg">
      <img
        src={person.photoUrl}
        alt={person.name}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{person.name}</h2>
        <p className="text-gray-600">{person.email}</p>
        <p className="text-gray-600">{person.address}</p>
        <p className="text-gray-600">{person.phone}</p>
        <button
          onClick={handleClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
