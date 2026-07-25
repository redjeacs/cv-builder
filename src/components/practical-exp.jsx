function PracticalExperience({ data, onUpdate }) {
  return (
    <form className="section-container">
      <h2>Practical Experience</h2>
      <div className="work-container">
        <label htmlFor="position">Title/Position</label>
        <input
          type="text"
          id="position"
          value={data.practical.position}
          onChange={(e) => onUpdate("practical", "position", e.target.value)}
          data-section="practical"
          placeholder="Front End Developer"
        />
      </div>
      <div className="company-container">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="company"
          value={data.practical.company}
          onChange={(e) => onUpdate("practical", "company", e.target.value)}
          data-section="practical"
          placeholder="Company"
        />
      </div>
      <div className="responsibilities-container">
        <label htmlFor="responsibilities">Job Responsibilities</label>
        <textarea
          name="responsibilities"
          id="responsibilities"
          value={data.practical.responsibilities}
          onChange={(e) =>
            onUpdate("practical", "responsibilities", e.target.value)
          }
          data-section="practical"
          rows="5"
          placeholder="List your achievements within the company and your main responsibility."
        ></textarea>
      </div>
      <div className="date-start-container">
        <label htmlFor="dateStart">Date Started</label>
        <input
          type="date"
          id="dateStart"
          value={data.practical.dateStart}
          onChange={(e) => onUpdate("practical", "dateStart", e.target.value)}
          data-section="practical"
          placeholder="MM/YYYY"
        />
      </div>
      <div className="degree-status-container">
        <div>
          <p>Ongoing:</p>
          <label className="switch" htmlFor="practical-ongoing">
            <input
              type="checkbox"
              id="practical-ongoing"
              name="ongoing"
              checked={data.practical.ongoing}
              onChange={(e) =>
                onUpdate("practical", "ongoing", e.target.checked)
              }
              data-section="practical"
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="date-end-container">
        <label htmlFor="dateEnd">Date Graduated</label>
        <input
          type="date"
          id="dateEnd"
          value={data.practical.dateEnd}
          onChange={(e) => onUpdate("practical", "dateEnd", e.target.value)}
          data-section="practical"
          placeholder="MM/YYYY"
        />
      </div>
    </form>
  );
}

export default PracticalExperience;
