const handleHttpError = (res, message = 'algo', code = 403) => {
  res.status(code);
  res.send({ error: message });
};
module.exports = { handleHttpError };
