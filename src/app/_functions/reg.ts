const regCheck = (name, value) => {
  const reg = {
    customerId: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
    email: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/,
    businessRegistrationNumber: /([0-9]{3})-?([0-9]{2})-?([0-9]{5})/,
  };
  return reg[name].test(value);
};

export default regCheck;
