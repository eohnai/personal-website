
const Experience = () => {
  return (
    <div className="container text-center">
      <h2 className="mb-4 display-4 fw-bold">Experience</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Finance Officer</h5>
              <h6 className="card-subtitle mb-2 text-muted">Singapore Police Force (Apr 2023 - Jul 2023)</h6>
              <p className="card-text">
                <ul className="list-unstyled">
                  <li>
                    Processed salary disbursements for officers, ensuring on-time
                    payments and resolving discrepancies efficiently.
                  </li>
                  <li>
                    Conducted tax and bonus calculations with accuracy and compliance
                    with financial regulations.
                  </li>
                  <li>
                    Reconciled bank accounts for transactions, streamlining reporting
                    processes for audit readiness.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Digital Ambassador</h5>
              <h6 className="card-subtitle mb-2 text-muted">InfoComm Media Development Authority (Jan 2021 - Mar 2021)</h6>
              <p className="card-text">
                <ul className="list-unstyled">
                  <li>
                    Provided lessons to seniors on smartphone functions like messaging,
                    navigation, and app usage.
                  </li>
                  <li>
                    Promoted digital payment adoption amongst hawkers, increasing
                    awareness in key areas.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
