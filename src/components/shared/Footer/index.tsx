import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.footer}>
      Este sitio está protegido por reCAPTCHA. Se aplican los Términos del
      servicio y la Política de privacidad de Google.
    </div>
  );
};
