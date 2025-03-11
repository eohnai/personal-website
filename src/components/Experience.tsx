const Experience = () => {
  return (
    <div className="container text-center">
      <h2 className="mb-4 display-4 fw-bold">Experience</h2>
      <div className="timeline">
        <div className="row mb-5">
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Finance Officer | Staff Assistant</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Singapore Police Force (Jun 2021 - Jul 2023)
                </h6>
                <ul className="list-unstyled text-start">
                  <li className="mb-2">
                    ▹ Processed salary disbursements for officers, ensuring on-time payments.
                  </li>
                  <li className="mb-2">
                    ▹ Conducted tax and bonus calculations and reconciled bank accounts monthly for transactions.
                  </li>
                  <li className="mb-2">
                    ▹ Managed bank account signatories as well as placements, renewals, and withdrawals of fixed deposits.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 mx-auto">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Digital Ambassador</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  InfoComm Media Development Authority (Jan 2021 - Mar 2021)
                </h6>
                <ul className="list-unstyled text-start">
                  <li className="mb-2">
                    ▹ Delivered personalised lessons to senior citizens, enhancing smartphone proficiency by teaching essential functions.
                  </li>
                  <li className="mb-2">
                    ▹ Championed the adoption of digital payments among hawkers, driving increased awareness and implementations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;