import "dotenv/config";

function getEnv(key) {
  const value = process.env[key];

  if (!value) {
    throw new Error(`O valor da variável de ambiente ${key} não foi definido.`);
  }

  return value;
}

export const env = {
  DATABASE_URL: getEnv("DATABASE_URL"),
  PORT: getEnv("PORT"),
};
