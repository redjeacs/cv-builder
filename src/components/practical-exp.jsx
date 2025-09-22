function PracticalExperience() {
  return (
    <form className="section-container">
      <h2>Practical Experience</h2>
      <div className="work-container">
        <label htmlFor="position">Title/Position</label>
        <input type="text" id="position" placeholder="Front End Developer" />
      </div>
      <div className="company-container">
        <label htmlFor="company">Company Name</label>
        <input type="text" id="company" placeholder="Company" />
      </div>
      <div className="responsibilities-container">
        <label htmlFor="responsibilities">Job Responsibilities</label>
        <textarea
          name="responsibilities"
          id="responsibilities"
          rows="5"
          placeholder="List your achievements within the company and your main responsibility."
        ></textarea>
      </div>
      <div className="date-start-container">
        <label htmlFor="date-started">Date Started</label>
        <input type="date" id="date-started" placeholder="MM/YYYY" />
      </div>
      <div className="degree-status-container">
        <div>
          <p>Ongoing:</p>
          <label className="switch" htmlFor="ongoing">
            <input type="checkbox" id="ongoing" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="date-end-container">
        <label htmlFor="date-ended">Date Graduated</label>
        <input type="date" id="date-ended" placeholder="MM/YYYY" />
      </div>
    </form>
  );
}

export default PracticalExperience;
