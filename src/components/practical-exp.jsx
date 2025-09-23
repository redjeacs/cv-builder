function PracticalExperience({ data, onChange }) {
  return (
    <form className="section-container">
      <h2>Practical Experience</h2>
      <div className="work-container">
        <label htmlFor="position">Title/Position</label>
        <input
          type="text"
          id="position"
          value={data.practical.position}
          onChange={onChange}
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
          onChange={onChange}
          placeholder="Company"
        />
      </div>
      <div className="responsibilities-container">
        <label htmlFor="responsibilities">Job Responsibilities</label>
        <textarea
          name="responsibilities"
          id="responsibilities"
          value={data.practical.responsibilities}
          onChange={onChange}
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
          onChange={onChange}
          data-section="practical"
          placeholder="MM/YYYY"
        />
      </div>
      <div className="degree-status-container">
        <div>
          <p>Ongoing:</p>
          <label className="switch" htmlFor="ongoing">
            <input
              type="checkbox"
              id="ongoing"
              checked={data.practical.ongoing}
              onChange={onChange}
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
          onChange={onChange}
          data-section="practical"
          placeholder="MM/YYYY"
        />
      </div>
    </form>
  );
}

export default PracticalExperience;
