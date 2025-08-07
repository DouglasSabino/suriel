import React from "react";
import "./Partners.css";

const Partners = () => {
  const handleAdd = () => {
    console.log("Adicionar Novo Parceiro");
    // Aqui você pode abrir um modal ou navegar para um formulário
  };

  const handleList = () => {
    console.log("Listar Parceiros");
    // Aqui você pode carregar/parar uma lista ou redirecionar
  };

  return (
    <div className="partners-container">
      <h2>Gestão de Parceiros</h2>
      <div className="partners-buttons">
        <button onClick={handleAdd}>Adicionar Novo Parceiro</button>
        <button onClick={handleList}>Listar Parceiros</button>
      </div>
    </div>
  );
};

export default Partners;
