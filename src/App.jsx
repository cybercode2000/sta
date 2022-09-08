import React, { Component } from 'react';
import Logo from "./logo.png"
import { toast, ToastContainer } from "react-toastify"

class App extends Component {
  state = {  } 

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // formData.append('surname', document.querySelector('#surname').value);
    // formData.append('firstName', document.querySelector('#firstName').value);
    // formData.append('lastName', document.querySelector('#lastName').value);
    // formData.append('homeAddress', document.querySelector('#homeAddress').value);
    // formData.append('phoneNumber', document.querySelector('#phoneNumber').value);
    // formData.append('secondPhone', document.querySelector('#secondPhone').value);
    // formData.append('sex', document.querySelector('#sex').value);
    // formData.append('maritalStatus', document.querySelector('#maritalStatus').value);
    // formData.append('qualification', document.querySelector('#qualification').value);
    // formData.append('department', document.querySelector('#department').value);
    // formData.append('branch', document.querySelector('#branch').value);
    // formData.append('dob', document.querySelector('#dob').value);

    toast.success('Information Submitted Successfully')
  }

  render() { 
    return (
      <>
      <ToastContainer />
        <div class="col-lg-12  d-flex justify-content-center">

        <div class="staff">
        <div className='d-flex mb-3 justify-content-center'>
            <img style={{ height: '40px' }} alt="Logo" src={Logo} />
        </div>
            <h4 class="text-center font-weight-bold" style={{fontFamily: 'arial'}}>Staff Registration</h4>
            <p style={{marginTop: '-8px'}} class="text-center mb-4">Please fill in your details below</p>

            <form onSubmit={this.handleSubmit}>
            <div class="row ">
                <div class="col-lg-6 mb-4 mt-2">
                    <label for="">Surname</label>
                    <input id='surname' class="form-control p-3" type="text" required/>
                </div>
                
                <div class="col-lg-6 mb-4 mt-2">
                    <label for="">First Name</label>
                    <input id='firstName' class="form-control" type="text" required/>
                </div>
                
                <div class="col-lg-6 mb-4">
                    <label for="">Last Name</label>
                    <input id='lastName' class="form-control" type="text" required/>
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">Home Address</label>
                    <input id='homeAddress' class="form-control" type="text" required/>
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">Phone Number</label>
                    <input id='phoneNumber' class="form-control" type="number" required/>
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">Altnative Phone Number</label>
                    <input id='secondPhone' class="form-control" type="number" required/>
                </div>

                <div class="col-lg-6 mb-4">
                    <div>Sex</div>
                    <select id='sex' class="form-control nice-select" name="" required>
                        <option value="">Please Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div class="col-lg-6 mb-4">
                    <label>Marital Status</label>
                    <select class="form-control nice-select p-2" name="" id="maritalStatus" required>
                        <option value="">Please Select</option>
                        <option value="">Single</option>
                        <option value="">Married</option>
                        <option value="">Divorce</option>
                    </select>
                </div>

                <div class="col-lg-6 mb-4">
                    <label>Qualification</label>
                    <select class="form-control nice-select p-2" name="" id="qualification" required>
                        <option value="">Please Select</option>
                        <option value="BSC">BSC</option>
                        <option value="MSC">MSC</option>
                        <option value="NCE">NCE</option>
                        <option value="SSCE">SSCE</option>
                    </select>
                </div>

                <div class="col-lg-6 mb-4">
                    <label>Department</label>
                    <select class="form-control nice-select p-2" name="" id="department" required>
                        <option value="">Please Select</option>
                        <option value="BSC">BSC</option>
                        <option value="MSC">MSC</option>
                        <option value="NCE">NCE</option>
                        <option value="SSCE">SSCE</option>
                    </select>
                </div>

                <div class="col-lg-6 mb-4">
                    <label>Branch</label>
                    <select class="form-control p-2" name="" id="branch" required>
                        <option value="">Please Select</option>
                        <option value="Head Office">Head Office</option>
                        <option value="Presken Hotel and Resorts MOJIDI">Presken Hotel and Resorts MOJIDI</option>
                        <option value="Presken Hotel @ Awolowo way">Presken Hotel @ Awolowo way</option>
                        <option value="Presken Hotels @Alade Avenue">Presken Hotels @Alade Avenue</option>
                        <option value="PRESKEN HOTEL @ K-ONE PLACE">PRESKEN HOTEL @ K-ONE PLACE</option>
                        <option value="Presken Hotel @ G.R.A, Ikeja">Presken Hotel @ G.R.A, Ikeja</option>
                        <option value="Presken Hotel @ International Airport Road">Presken Hotel @ International Airport Road</option>
                        <option value="Presken Hotels @ Maryland Ikeja">Presken Hotels @ Maryland Ikeja</option>
                        <option value="PRESKEN HOTELS OPEBI LAGOS">PRESKEN HOTELS OPEBI LAGOS</option>
                        <option value="Presken Hotel (Reliance)">Presken Hotel (Reliance)</option>
                        <option value="Presken Hotel @ Abuja">Presken Hotel @ Abuja</option>
                        <option value="Presken Hotel @Oniru">Presken Hotel @Oniru</option>
                        <option value="PRESKEN RESIDENCE @ G.R.A, LAGOS">PRESKEN RESIDENCE @ G.R.A, LAGOS</option>
                        <option value="Presken Hotels @ Freedom Way, Lekki">Presken Hotels @ Freedom Way, Lekki</option>
                        <option value="PRESKEN RESIDENCE ANNEX, G.R.A. IKEJA">PRESKEN RESIDENCE ANNEX, G.R.A. IKEJA</option>
                        <option value="PRESKEN HOTELS @ VICTORIA ISLAND">PRESKEN HOTELS @ VICTORIA ISLAND</option>
                        <option value="Presken Hotel @ Castle">Presken Hotel @ Castle</option>
                        <option value="Presken Luxury Apartment">Presken Luxury Apartment</option>
                        <option value="PRESKEN HOTELS @ FAJODD-4">PRESKEN HOTELS @ FAJODD-4</option>
                        <option value="Presken White House">Presken White House</option>
                    </select>
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">Date Of Birth</label>
                    <input id='dob' class="form-control p-2" type="date" required />
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">Email Address</label>
                    <input id='emailAddress' class="form-control p-2" type="email" required />
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">Passport</label>
                    <input id='passport' class="form-control p-2" type="file" required />
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">NIN</label>
                    <input id='nin' class="form-control p-2" type="number" required />
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">Next Of Kin Name</label>
                    <input id='NOK' class="form-control p-2" type="text" required />
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">House Address Next Of Kin</label>
                    <input id='NOKAddress' class="form-control p-2" type="text" required />
                </div>

                <div class="col-lg-6 mb-4">
                    <label for="">Relationship</label>
                    <input id='relationship' class="form-control p-2" type="text" required />
                </div>

                <div class="col-12 mt-4 d-flex justify-content-center font-weight-bold">
                    <button type='submit' class="btn">Submit</button>
                </div>
            </div>
            </form>
        </div>
    </div>
      </>
    );
  }
}
 
export default App;