function GeneralInformation() {
  return (
    <form className="section-container">
      <h2>General Information</h2>
      <div className="name-container">
        <label htmlFor="full-name">Full Name *</label>
        <input type="text" id="full-name" placeholder="Billy Bob" required />
      </div>
      <div className="email-container">
        <label htmlFor="email">Email *</label>
        <input type="mail" id="email" placeholder="example@mail.com" required />
      </div>
      <div className="phone-container">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" />
      </div>
      <div className="location-container">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="City, Country" />
      </div>
    </form>
  );
}

export default GeneralInformation;
