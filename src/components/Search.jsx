function Search({ setCity }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Inserisci una città"
        onChange={setCity}
        style={{ borderRadius: '30px', padding: '10px 20px', fontSize: '16px' }}
      />
    </div>
  );
}

export default Search;
