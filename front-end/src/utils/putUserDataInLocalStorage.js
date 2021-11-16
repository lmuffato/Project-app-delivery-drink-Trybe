export default function (data) {
  const stringfiedData = JSON.stringify(data);
  localStorage.setItem('connectedUser', stringfiedData);
};
