const UserInfoForm = (props) => {
    const{label, type, handleChange} = props;// props là props của component  
    // label là nhãn của input, type là kiểu của input, handleChange là hàm xử lý sự kiện khi người dùng nhập vào input
  return (
    <div>
        <div>
            <label>{label}</label>// label là nhãn của input
            <input type={type} onChange={handleChange} />// input là thẻ input, type là kiểu của input, onChange là hàm xử lý sự kiện khi người dùng nhập vào input
        </div>
    </div>
  );
};
export default UserInfoForm;
