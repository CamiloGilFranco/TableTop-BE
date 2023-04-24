export const SECRET = process.env.SECRET_KEY as string;

export const HOSTNAME = process.env.SMTP_SERVER;
export const EMAILPORT = Number(process.env.SMTP_PORT);
export const USER = process.env.SMTP_USER;
export const PASS = process.env.SMTP_PASSWORD;

export const PORT = process.env.PORT || 8080;