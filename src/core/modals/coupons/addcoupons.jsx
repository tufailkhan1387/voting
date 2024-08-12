
import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const AddCoupons = () => {
  const price = [
    { value: "choose", label: "Choose Type" },
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
  ];


  return (
    <div>
      {/* Add coupons */}
      <div className="modal fade" id="add-units">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Add Polling Stations</h4>
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body custom-modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input placeholder="Polling-23" type="text" className="form-control" />
                        </div>
                      </div>
                     
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">Consistuency</label>

                          <Select
                            classNamePrefix="react-select"
                            options={price}
                            placeholder="Choose Type"
                          />
                        </div>
                      </div>
                     
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label"> No. of voters</label>
                          <input placeholder="34,234" type="text" className="form-control" />
                         
                        </div>
                      </div>
              
                      <div className="input-blocks m-0">
                        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                          <span className="status-label">Status</span>
                          <input
                            type="checkbox"
                            id="user3"
                            className="check"
                            defaultChecked="true"
                          />
                          <label htmlFor="user3" className="checktoggle">
                            {" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer-btn">
                      <button
                        type="button"
                        className="btn btn-cancel me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <Link to="#" className="btn btn-submit">
                        Save
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Coupons */}
    </div>
  );
};

export default AddCoupons;
