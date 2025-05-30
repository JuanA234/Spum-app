import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardInventario() {
  const urlItem = "http://localhost:8080/items";
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState({
    itemName: "",
    itemDescription: "",
    itemQuantity: 0,
    itemType: 0
  });

  // Cargar items al montar el componente
  useEffect(() => {
    cargarItems();
  }, []);

  // Leer todos los items
  const cargarItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(urlItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Resultado de cargar items:", response.data);
      setItems(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error de respuesta:", error.response.data);
      } else if (error.request) {
        console.error("No se recibió respuesta:", error.request);
      } else {
        console.error("Error al configurar la petición:", error.message);
      }
    }
  };

  // Crear nuevo item
  const handleCreate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(urlItem, newItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewItem({
        itemName: newItem.itemName,
        itemDescription: newItem.itemDescription,
        itemQuantity: newItem.itemQuantity,
        itemType: newItem.itemType
      });
      cargarItems(); // Recargar lista
    } catch (error) {
      console.error("Error al crear item", error);
    }
  };

  // Actualizar item existente
  const handleUpdate = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const updatedItem = items.find(item => item.id === id);
      await axios.put(`${urlItem}/${id}`, updatedItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      cargarItems();
    } catch (error) {
      console.error("Error al actualizar item", error);
    }
  };

  // Eliminar item
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${urlItem}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      cargarItems();
    } catch (error) {
      console.error("Error al eliminar item", error);
    }
  };

  //Buscar por nombre
  const cargarItemByName = async (name) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${urlItem}/search`, {
        params: { name },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(response.data); 
    } catch (error) {
      console.error("Error al buscar item por nombre:", error);
    }
  };

  //Buscar por Tipo
  const cargarItemByType = async (typeId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${urlItem}/type/${typeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setItems(response.data);
  } catch (error) {
    console.error("Error al buscar items por tipo:", error);
  }
};

  return (
    <div>
      <header className="bg-dark text-white py-3">
        <div className="container text-center">
          <h1 className="m-0 text-white fw-bold">
            Inventario de Juegos de Mesa
          </h1>
        </div>
      </header>

      <div className="container">
        <div className="text-center my-4 justify-content-between"> 
          <button className="btn text-white m-1"
          onClick={() => alert("Añadir artículo")}
          style={{background:"#6610f2"}}>
            Añadir Artículo
          </button>
          <button className="btn text-white m-1" 
          onClick={() => alert("Eliminar artículo")}
          style={{background:"#6610f2"}}
          >
            Eliminar Artículo
          </button>
          <button className="btn text-white m-1"
          onClick={() => alert("Editar artículo")}
          style={{background:"#6610f2"}}>
            Editar Artículo
          </button>
        </div>
        <div className="">
          <table className="table">
            <thead>
              <tr>
                <th scope="scol">Nombre del Juego</th>
                <th scope="col">Código</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map((juego, index) => (
                <tr key={index}>
                  <td>{juego.itemName}</td>
                  <td>{juego.itemId}</td>
                  <td className="actions">  
                    <i
                      className="fas fa-edit"
                      onClick={() => alert(`Editar ${juego.nombre}`)}
                    ></i>
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => alert(`Eliminar ${juego.nombre}`)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
       <div className="text-center mt-4">
          <Link to="/auxiliar"className="btn text-white" style={{background:"#6610f2"}}>Regresar</Link>
        </div>
    </div>
  );
}
