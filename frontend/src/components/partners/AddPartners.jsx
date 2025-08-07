import "./AddPartners.css";

const AddPartners = () => {
  return (
    <div className="add-partners-container">
      <h2>Adicionar Novo Parceiro</h2>
      <form className="add-partners-form">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Telefone" />
        <button type="submit">Adiconar</button>
      </form>
    </div>
  );
};

export default AddPartners;
