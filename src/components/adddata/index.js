import React, { Component } from "react";

export default class AddAppointments extends Component {

  render(){
    return(
        <div>
          <div>
            <span></span> Add Appointment</div>
            <div className="panel-body">
            <form>
              <div class="form-group">
                <label>Pet Name</label>
                <div>
                  <input type="text" class="form-control"
                    id="petName" ref="inputPetName" placeholder="Pet's Name" />
                </div>
              </div>
              <div class="form-group">
                <label>Pet Owner</label>
                <div>
                  <input type="text" class="form-control"
                    id="petOwner" ref="inputOwnerName" placeholder="Owner's Name" />
                </div>
              </div>
              <div class="form-group">
                <label>Date</label>
                <div class="col-sm-4">
                  <input type="date" class="form-control"
                    id="aptDate" ref="inputAptDate" />
                </div>
                <label>Time</label>
                <div class="col-sm-4">
                  <input type="time" class="form-control"
                    id="aptTime" ref="inputAptTime" />
                </div>

              </div>
              <div class="form-group">
                <label>Apt. Notes</label>
                <div class="col-sm-10">
                  <textarea class="form-control" rows="4" cols="50"
                    id="aptNotes" ref="inputAptNotes" placeholder="Appointment Notes"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div>
                  <button type="submit">Add Appointment</button>
                </div>
              </div>
            </form>
          </div>
        </div>
            );
          }
} //Component to addNewdata into the current data set

