

function TextInput({label , type, value, onChange}){
  return (
    <label className='block'>
      <input className = 'px-4 py-2 border border-gray-500 rounded-md w-full '
          onChange={onChange}
          placeholder={label}
          type={type}
          value={value}
      />
    </label>
  );
};

export default TextInput;