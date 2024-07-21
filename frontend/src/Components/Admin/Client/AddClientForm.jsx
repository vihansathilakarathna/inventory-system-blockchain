import React from 'react'

export default function AddClientForm({
    onSubmit,
    formData,
    setFormData,
  }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: "", email: ""});
      };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" style={{margin: "5px"}}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="modal-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" style={{margin: "5px"}}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="modal-input"
        />
      </div>
      <div className="additem-btn">
        <button type="submit" className="add-btn">
          Add
        </button>
      </div>
    </form>
  );
}

