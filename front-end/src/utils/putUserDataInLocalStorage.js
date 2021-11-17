export default function storeUser(data) {
  const stringfiedData = JSON.stringify(data);
  localStorage.setItem('connectedUser', stringfiedData);
}
