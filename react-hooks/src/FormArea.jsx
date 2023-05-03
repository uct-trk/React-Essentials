import useInput from "./useInput";

const FormArea = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} and ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <br />
      <form onSubmit={submitForm}>
        <div>
          <label>İsim</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Soyisim</label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Kaydet</button>
      </form>
    </div>
  );
};

export default FormArea;
