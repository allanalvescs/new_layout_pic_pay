function MenuFooter({ name, array }) {
  return (
    <ul>
      <h3>{name}</h3>
      {array.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
}

export default MenuFooter;
