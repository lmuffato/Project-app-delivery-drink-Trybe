require('dotenv').config();

export default function getServerUrl() {
  return process.env.URL_SERVER;
}
