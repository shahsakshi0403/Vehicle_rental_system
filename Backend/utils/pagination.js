const getPaginationData = (data) => {
  const page = Number(data.page) || 1;
  const limit = Number(data.limit) || 10;
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

module.exports = getPaginationData;
