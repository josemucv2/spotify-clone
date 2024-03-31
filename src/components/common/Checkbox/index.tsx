import s from "./checkbox.module.scss";

export const CheckBox = () => {
  return (
    <div className={`${s.container} space-x-2`}>
      <input type="checkbox" className={`toggle toggle-success ${s.input}`} />
      <label>Recuérdame</label>
    </div>
  );
};
