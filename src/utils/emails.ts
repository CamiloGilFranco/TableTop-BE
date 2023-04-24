interface UserEmailData {
  email: string;
  name: string;
}
export const welcomeEmail = ({name, email}: UserEmailData) => {
  const welcomeEmail = {
    from: "<admin@restaurant.com>",
    to: email,
    subject: "Welcome",
    html: `<h1>Welcome ${name} thank you for registering to the TableTop restaurant</h1>`,
    text: `Wellcome ${name} thank you for registering to the TableTop restaurant`,
  };
  return welcomeEmail;
};
