interface UserEmailData {
  email: string;
  name: string;
}

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  subtotal: number;
  id: string;
  id_restaurant: string;
}

interface OrderEmailData {
  price: number;
  name: string | undefined;
  email: string;
  order: string;
  address: string;
  city: string;
  cart: CartItem[];
}

interface ReserveEmailData {
  name: string;
  email: string;
  reserve: string;
  restaurant: string;
  venue: string;
  address: string;
  date: string;
}

export const welcomeEmail = ({ name, email }: UserEmailData) => {
  const welcomeEmail = {
    from: "<admin@restaurant.com>",
    to: email,
    subject: "Bienvenido a Table Top!!!",
    html: `<div style="font-family: sans-serif; text-align: center;">
  <img src="https://raw.githubusercontent.com/CamiloGilFranco/TableTop-FE/main/public/logo.png" alt="log" style="width: 150px; margin: 0 auto;">
  <h1 style="margin-top: 30px;">Hola ${name}</h1>
  <p style="font-size: 18px; margin-top: 30px;">¡Bienvenido/a a Table Top! Estamos emocionados de tenerte como parte de nuestra comunidad de amantes de la comida.</p>
  <p style="font-size: 18px; margin-top: 30px;">A partir de ahora puedes ordenar comida en línea y hacer reservas en los puntos físicos de nuestros restaurantes asociados. Con la comodidad de poder hacer todo desde la palma de tu mano, estamos seguros de que disfrutarás de una experiencia gastronómica sin complicaciones.</p>
  <p style="font-size: 18px; margin-top: 30px;">Además, con nuestra amplia variedad de opciones de menú y la posibilidad de filtrar tus resultados según tus preferencias, estamos seguros de que encontrarás algo delicioso que satisfaga tus antojos.</p>
  <p style="font-size: 18px; margin-top: 30px;">Si tienes alguna pregunta o comentario sobre la aplicación, no dudes en ponerte en contacto con nuestro equipo de atención al cliente en cualquier momento.</p>
  <p style="font-size: 18px; margin-top: 30px;">¡Que disfrutes de tu comida!</p>
</div>`,
  };
  return welcomeEmail;
};

export const orderEmail = ({
  price,
  name,
  email,
  order,
  address,
  city,
  cart,
}: OrderEmailData) => {
  const list = () => {
    let text = "";
    for (let i = 0; i < cart.length; i++) {
      const item = `<tr>
            <td style="border: 1px solid black; padding: 5px">${
              cart[i].title
            }</td>
            <td style="border: 1px solid black; padding: 5px">$${cart[
              i
            ].price.toLocaleString()}</td>
            <td style="border: 1px solid black; padding: 5px">${
              cart[i].quantity
            }</td>
            <td style="border: 1px solid black; padding: 5px">$${cart[
              i
            ].subtotal.toLocaleString()}</td>
          </tr>`;

      text += item;
    }

    return text;
  };

  const orderEmail = {
    from: "<admin@restaurant.com>",
    to: email,
    subject: "Tu pedido esta en camino!!!",
    html: `<div style="font-family: sans-serif; text-align: center;">
    <img src="https://raw.githubusercontent.com/CamiloGilFranco/TableTop-FE/main/public/logo.png" alt="log"
      style="width: 150px; margin: 0 auto;">
    <h1 style="margin-top: 30px;">Hola ${name}</h1>

    <h2>Tu pedido esta en camino</h2>

    <div style="border: solid 2px black; font-size: 18px;">
      <p><b>Factura numero:</b> ${order}</p>
      <p><b>Dirección de entrega:</b> ${address} - ${city}</p>
      <table style="margin: 0 auto; border-collapse: collapse ;">
        <tr>
          <td style="border: 1px solid black;  padding: 5px;"><b>Producto</b></td>
          <td style="border: 1px solid black; padding: 5px;"><b>V/U</b></td>
          <td style="border: 1px solid black; padding: 5px;"><b>Cantidad</b></td>
          <td style="border: 1px solid black; padding: 5px;"><b>Subtotal</b></td>
        </tr>
        ${list()}
      </table>
      <p><b>TOTAL:</b> $${price.toLocaleString()}</p>
    </div>
    <p style="font-size: 18px; margin-top: 30px;">Si tienes alguna pregunta o comentario sobre la aplicación, no dudes
      en
      ponerte en contacto con nuestro equipo de atención al cliente en cualquier momento.</p>
    <p style="font-size: 18px; margin-top: 30px;">¡Que disfrutes de tu comida!</p>
  </div>`,
  };
  return orderEmail;
};

export const reserveEmail = ({
  name,
  email,
  reserve,
  restaurant,
  venue,
  address,
  date,
}: ReserveEmailData) => {
  const reserveEmail = {
    from: "<admin@restaurant.com>",
    to: email,
    subject: "Tu reserva esta lista!!!",
    html: `<div style="font-family: sans-serif; text-align: center;">
    <img src="https://raw.githubusercontent.com/CamiloGilFranco/TableTop-FE/main/public/logo.png" alt="log"
      style="width: 150px; margin: 0 auto;">
    <h1 style="margin-top: 30px;">Hola ${name}</h1>

    <h2>Tu reserva esta lista</h2>

    <div style="border: solid 2px black; font-size:18px;">
      <p><b>Numero de reserva:</b> ${reserve}</p>
      <p><b>Restaurante:</b> ${restaurant}</p>
      <p><b>Sede:</b> ${venue}</p>
      <p><b>Dirección:</b> ${address}</p>
      <p><b>Fecha y hora:</b> ${date}</p>
      <p style="font-size: 12px;">* Recuerda que debes llegar al lugar al menos 10 minutos antes de la hora de tu
        reserva o esta sera cancelada
      </p>
      <p style="font-size: 12px;">* Para cancelar tu reserva contacta directamente a la sede en que fue hecha tu reserva
      </p>

    </div>
    <p style="font-size: 18px; margin-top: 30px;">Si tienes alguna pregunta o comentario sobre la aplicación, no dudes
      en
      ponerte en contacto con nuestro equipo de atención al cliente en cualquier momento.</p>
    <p style="font-size: 18px; margin-top: 30px;">¡Que disfrutes de tu comida!</p>
  </div>`,
  };
  return reserveEmail;
};
