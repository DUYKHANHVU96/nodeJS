const UserInfoForm = (props) => {
    const{label, type, handleChange} = props;

  return (
    <div>
        <div>
            <label>{label}</label>
            <input type={type} onChange={handleChange} />
        </div>
    </div>
  );
};
export default UserInfoForm;
