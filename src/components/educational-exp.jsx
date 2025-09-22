function EducationalExperience() {
  return (
    <form className="section-container">
      <h2>Educational Experience</h2>
      <div className="school-container">
        <label htmlFor="school-name">School Name</label>
        <input
          type="text"
          id="school-name"
          placeholder="Enter School/University"
        />
      </div>
      <div className="degree-container">
        <label htmlFor="degree">School Name</label>
        <input type="text" id="degree" placeholder="Degree" />
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

export default EducationalExperience;
