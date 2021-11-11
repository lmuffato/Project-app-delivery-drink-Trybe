export const handleInput = ({ target }, data, setData) => {
  const { name, value } = target;
  setData({ ...data, [name]: value });
};

export const goRoute = (route, history) => history.push(route);
