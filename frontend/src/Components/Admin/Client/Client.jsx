import React,{useState, useEffect} from 'react'
import AddClientModal from './AddClientModal';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Client() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalClient, setTotalClient] = useState(() => {
        const savedItems = localStorage.getItem("totalClient");
        return savedItems ? JSON.parse(savedItems) : [];
      });

      const {id} = useParams();

      useEffect(() => {
        localStorage.setItem("totalClient", JSON.stringify(totalClient));
      }, [totalClient]);

      useEffect(() => {
        axios.get('http://localhost:3001/api/users/users') 
            .then(response => {
                setTotalClient(response.data);
            })
            .catch(error => console.log(error));
    }, [id]);
    

      const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const handleFormSubmit = (data) => {
        axios.post('http://localhost:3001/api/users/clients', data)
            .then(response => {
                setTotalClient([...totalClient, response.data]);
                handleCloseModal();
            })
            .catch(error => console.log(error));
    };

  return (
    <div>
        <p className="ai-title">Client Management</p>
        <div className="ai-button-div">
        <button className="ai-button" onClick={handleOpenModal}>
          Add Client 
        </button>
        </div>
        <div>
        <table style={{width: "95%"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {totalClient.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <AddClientModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
      />
    </div>
  )
}
