export const welcomeEmail = (user: any) => {
  const email = {
    from: "<admin@restaurant.com>",
    to: user.email,
    subject: "Welcome",
    html: `<h1>Bienvenido ${user.name} gracias por registrarte</h1>`,
    text: `Bienvenido ${user.name} gracias por registrarte`,
  };
  return email;
};
