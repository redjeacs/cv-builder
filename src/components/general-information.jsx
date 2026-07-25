function GeneralInformation({ onUpdate, data }) {
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
          onChange={(e) => onUpdate("general", "fullName", e.target.value)}
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
          onChange={(e) => onUpdate("general", "email", e.target.value)}
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
          onChange={(e) => onUpdate("general", "phone", e.target.value)}
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
          onChange={(e) => onUpdate("general", "location", e.target.value)}
          required
        />
      </div>
    </form>
  );
}

export default GeneralInformation;
