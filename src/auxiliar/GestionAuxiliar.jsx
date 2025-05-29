import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function GestionAuxiliar() {
  const urlItem = "http://localhost:8080/items";
  const [items, setItems] = useState([]);

  // Estado para un nuevo item
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
        itemName: "",
        itemDescription: "",
        itemQuantity: 0,
        itemType: ""
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

}