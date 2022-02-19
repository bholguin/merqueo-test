const useUtils = () => {
  var formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  return {
    formatter,
  };
};

export default useUtils;
