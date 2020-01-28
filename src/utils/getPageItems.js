const getPageItems = (items, page, itemsPerPage) => {
  const pageItems = [...items];
  const pages = Math.ceil(items.length / itemsPerPage);
  return pageItems.splice((pages - page) * itemsPerPage, itemsPerPage);
};

export default getPageItems;
