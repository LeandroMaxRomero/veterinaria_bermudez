
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import PropTypes from "prop-types";

export const Pago = ({ setPedidoMP }) => {
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  initMercadoPago(PUBLIC_KEY, {locale: "es-AR"});
  
  const [preferenceId, setPreferenceId] = useState(null);
  const [confPedido, setConfPedido] = useState(false);

  const createPreference = async () => {
    try {
      const response = await axios.post("http://https://server-vet.onrender.com/create_preference", {
        title: "Consulta veterinaria",
        price: 1,
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
      {preferenceId && <Wallet initialization={{ preferenceId, redirectMode: 'modal' }} />}
    </div>
  );
};
Pago.propTypes = {
  setPedidoMP: PropTypes.node.isRequired,
};