function Preview({ data }) {
  const formatDate = (date) => {
    const [year, month] = date.split("-");
    return `${month}/${year}`;
  };
  return (
    <div className="preview-container">
      <div className="preview">
        <div className="general-info-preview">
          <h1 className="name">{data.general.fullName}</h1>
          <div className="contacts">
            <div className="email-preview">
              <i className="fa-solid fa-envelope"></i>
              {data.general.email}
            </div>
            <div className="phone-preview">
              <i className="fa-solid fa-phone"></i>
              {data.general.phone}
            </div>
            <div className="location-preview">
              <i className="fa-solid fa-location-dot"></i>
              {data.general.location}
            </div>
          </div>
          <div className="inner-border"></div>
        </div>
        <div className="education-preview">
          <h3>Education</h3>
          <div className="school">
            <div className="dates">
              {formatDate(data.education.dateStart)} -{" "}
              {data.education.ongoing
                ? "Present"
                : formatDate(data.education.dateEnd)}
            </div>
            <div className="right-section">
              <div className="schoolName-preview">
                {data.education.schoolName}
              </div>
              <div className="degree-preview">{data.education.degree}</div>
            </div>
          </div>
          <div className="inner-border"></div>
        </div>
        <div className="practical-preview">
          <h3>Practical Experience</h3>
          <div className="job">
            <div className="dates">
              {formatDate(data.practical.dateStart)} -{" "}
              {data.practical.ongoing
                ? "Present"
                : formatDate(data.practical.dateEnd)}
            </div>
            <div className="right-section">
              <div className="company-preview">{data.practical.company}</div>
              <div className="position-previw">{data.practical.position}</div>

              <div className="responsibilities-preview">
                {data.practical.responsibilities}
              </div>
            </div>
          </div>
          <div className="inner-border"></div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
