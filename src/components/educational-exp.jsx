function EducationalExperience({ data, onUpdate }) {
  return (
    <form className="section-container">
      <h2>Educational Experience</h2>
      <div className="school-container">
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          id="schoolName"
          value={data.education.schoolName}
          onChange={(e) => onUpdate("education", "schoolName", e.target.value)}
          data-section="education"
          placeholder="Enter School/University"
        />
      </div>
      <div className="degree-container">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          value={data.education.degree}
          onChange={(e) => onUpdate("education", "degree", e.target.value)}
          data-section="education"
          placeholder="Degree"
        />
      </div>
      <div className="date-start-container">
        <label htmlFor="dateStart">Date Started</label>
        <input
          type="month"
          id="dateStart"
          value={data.education.dateStart}
          onChange={(e) => onUpdate("education", "dateStart", e.target.value)}
          data-section="education"
        />
      </div>
      <div className="degree-status-container">
        <div>
          <p>Ongoing:</p>
          <label className="switch" htmlFor="ongoing">
            <input
              type="checkbox"
              id="ongoing"
              checked={data.education.ongoing}
              onChange={(e) =>
                onUpdate("education", "ongoing", e.target.checked)
              }
              data-section="education"
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="date-end-container">
        <label htmlFor="dateEnd">Date Graduated</label>
        <input
          type="month"
          id="dateEnd"
          value={data.education.dateEnd}
          onChange={(e) => onUpdate("education", "dateEnd", e.target.value)}
          data-section="education"
          placeholder="MM/YYYY"
        />
      </div>
    </form>
  );
}

export default EducationalExperience;
