
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import PropTypes from "prop-types";

export const Pago = ({ setPedidoMP }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [confPedido, setConfPedido] = useState(false);

  initMercadoPago('TEST-aea14fc6-7bdb-4cf2-a6d6-22abc5618a2f', {locale: "es-AR"});

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3000/create_preference", {
        description: "Consulta veterinaria",
        price: 4500,
        quantity: 1,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
    };

    const handleBuy = async () => {
      const id = await createPreference();
      if (id) {
        setPreferenceId(id);
      }
      setConfPedido(true);
    };

  return (
    <div className='container__pago'>
      <p>Las consultas online no están pensadas para resolver situaciones de alta complejidad o de urgencia.</p>
      <button onClick={handleBuy} className={(confPedido===true ? "ocultar" : "") + " btn--confirmarPedido"}>Continuar</button>
      <button onClick={()=>setPedidoMP(false)} className={(confPedido===true ? "ocultar" : "") + " btn--cancelarPedido"}>Cancelar</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
};
Pago.propTypes = {
  setPedidoMP: PropTypes.node.isRequired,
};