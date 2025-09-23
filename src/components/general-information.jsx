function GeneralInformation({ onChange, data }) {
  return (
    <form className="section-container">
      <h2>General Information</h2>
      <div className="name-container">
        <label htmlFor="fullName">Full Name *</label>
        <input
          type="text"
          id="fullName"
          value={data.general.fullName}
          placeholder="Billy Bob"
          onChange={onChange}
          data-section="general"
          required
        />
      </div>
      <div className="email-container">
        <label htmlFor="email">Email *</label>
        <input
          type="mail"
          id="email"
          placeholder="example@mail.com"
          data-section="general"
          value={data.general.email}
          onChange={onChange}
          required
        />
      </div>
      <div className="phone-container">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          data-section="general"
          value={data.general.phone}
          onChange={onChange}
          placeholder="0912345678"
        />
      </div>
      <div className="location-container">
        <label htmlFor="location">Location *</label>
        <input
          type="text"
          id="location"
          placeholder="City, Country"
          data-section="general"
          value={data.general.location}
          onChange={onChange}
          required
        />
      </div>
    </form>
  );
}

export default GeneralInformation;
