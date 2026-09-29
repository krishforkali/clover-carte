export const openWhatsApp = () => {
  const phone = "918839153737";

  const message = encodeURIComponent(
    "Hello! I'm interested in your vending machine solutions.",
  );

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
};
