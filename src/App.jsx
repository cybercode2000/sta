import React, { Component } from 'react';
import Logo from "./logo.png"
import { toast, ToastContainer } from "react-toastify"
import Webcam from "react-webcam";
import Upload from "./compact-camera.png"
import axios from 'axios';

class App extends Component {
  state = { 
      file: "",
      checkings: "",
   } 

   handleImage = (e) => {
        let file = e.target.files[0];
        this.setState({ file: file });
        console.log(file)
    }

  handleSubmit = async (e) => {
    e.preventDefault();


    let payload = {
        surname: document.querySelector('#surname').value,
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        homeAddress: document.querySelector('#homeAddress').value,
        phoneNumber: document.querySelector('#phoneNumber').value,
        secondPhone: document.querySelector('#secondPhone').value,
        sex: document.querySelector('#sex').value,
        maritalStatus: document.querySelector('#maritalStatus').value,
        qualification: document.querySelector('#qualification').value,
        department: document.querySelector('#department').value,
        branch: document.querySelector('#branch').value,
        dob: document.querySelector('#dob').value,
        emailAddress: document.querySelector('#emailAddress').value,
        nin: document.querySelector('#nin').value,
        NOK: document.querySelector('#NOK').value,
        NOKAddress: document.querySelector('#NOKAddress').value,
        NOKphone: document.querySelector('#NOKphone').value,
        relationship: document.querySelector('#relationship').value,
        employement: document.querySelector('#employement').value,
        file: this.state.checkings
    }

    if(this.state.checkings === ""){
        toast.error('Please Add your Passport');
    }else {
        try {
            const postData = await axios.post('https://preskenhotels.com/staff/staffregistration', payload);

            if(postData.data === "successfully"){
                toast.success('Information Submitted Successfully');
                document.querySelector('#surname').value = ""
                document.querySelector('#firstName').value = ""
                document.querySelector('#lastName').value = ""
                document.querySelector('#homeAddress').value = ""
                document.querySelector('#phoneNumber').value = ""
                document.querySelector('#secondPhone').value = ""
                document.querySelector('#sex').value = ""
                document.querySelector('#maritalStatus').value = ""
                document.querySelector('#qualification').value = ""
                document.querySelector('#department').value = ""
                document.querySelector('#branch').value = ""
                document.querySelector('#dob').value = ""
                document.querySelector('#emailAddress').value = ""
                document.querySelector('#nin').value = ""
                document.querySelector('#NOK').value = ""
                document.querySelector('#NOKAddress').value = ""
                document.querySelector('#NOKphone').value = ""
                document.querySelector('#relationship').value = ""
                document.querySelector('#employement').value = ""
                this.setState({ checkings: "" })
            }
            else {
                toast.error(postData.data)
            }
        }catch(e){
            console.log(e)
        }
    }


  }

  render() { 

    const videoConstraints = {
  width: 100,
  height: 100,
  facingMode: "user"
};
    return (
      <>
      <ToastContainer />

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Passport</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

         <Webcam
    audio={false}
    height={400}
    screenshotFormat="image/jpeg"
    width={"100%"}
    videoConstraints={videoConstraints}
  >
    {({ getScreenshot }) => (
        <div className='d-flex justify-content-center'>

      <button className='btn text-white' data-dismiss="modal" style={{ background: 'sienna' }}
        onClick={() => {
            const imageSrc = getScreenshot();
            console.log('here we go bros');
            console.log(imageSrc);
            this.setState({ checkings: imageSrc });
        }}
        >
        Capture photo
      </button>
          </div>
    )}
  </Webcam>
      </div>
    </div>
  </div>
</div>

        <div class="col-lg-12  d-flex justify-content-center">

        <div class="staff">
        <div className='d-flex mb-3 justify-content-center'>
            <img style={{ height: '40px' }} alt="Logo" src={Logo} />
        </div>
            <h4 class="text-center font-weight-bold" style={{fontFamily: 'arial'}}>Staff Registration</h4>
            <p style={{marginTop: '0px'}} class="text-center mb-3">Please fill in your details below</p>

            <form onSubmit={this.handleSubmit}>

                <div className="d-flex justify-content-center">
                    <div className='p-2 text-center' style={{ cursor: 'pointer' }} data-toggle="modal" placeholder='Click To Add Passport' data-target="#exampleModal">
                        <img style={{ height: '80px', padding: '10px', borderRadius: '10px', background: 'white' }} src={this.state.checkings === "" ? Upload : this.state.checkings} alt="" />
                        <p style={{ fontSize: '17px' }}>Upload your image</p>
                    </div>
                </div>
            <div class="row">
                <div class="col-lg-6 mb-3 mt-1">
                    <label for="">Surname</label>
                    <input id='surname' class="form-control" type="text" required/>
                </div>
                
                <div class="col-lg-6 mb-3 mt-1">
                    <label for="">First Name</label>
                    <input id='firstName' class="form-control" type="text" required/>
                </div>
                
                <div class="col-lg-6 mb-3">
                    <label for="">Last Name</label>
                    <input id='lastName' class="form-control" type="text" required/>
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">Home Address</label>
                    <input id='homeAddress' class="form-control" type="text" required/>
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">Phone Number</label>
                    <input id='phoneNumber' minLength={11} maxLength={11} class="form-control" type="number" required/>
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">Alternative Phone Number</label>
                    <input id='secondPhone' minLength={11} maxLength={11} class="form-control" type="number" required/>
                </div>

                <div class="col-lg-6 mb-3">
                    <div>Sex</div>
                    <select id='sex' class="form-control" name="" required>
                        <option value="">Please Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div class="col-lg-6 mb-3">
                    <label>Marital Status</label>
                    <select class="form-control p-2" id="maritalStatus" required>
                        <option value="">Please Select</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorce">Divorce</option>
                    </select>
                </div>

                <div class="col-lg-6 mb-3">
                    <label>Qualification</label>
                    <select class="form-control p-2" name="" id="qualification" required>
                        <option value="">Please Select</option>
                        <option value="PHD">PHD</option>
                        <option value="MSC">MSC</option>
                        <option value="BSC">BSC</option>
                        <option value="HND">HND</option>
                        <option value="OND">OND</option>
                        <option value="NCE">NCE</option>
                        <option value="SSCE">SSCE</option>
                    </select>
                </div>

                <div class="col-lg-6 mb-3">
                    <label>Department</label>
                    <select class="form-control nice-select p-2" name="" id="department" required>
                        <option value="">Please Select</option>
                        <option value="Receptionist">RECEPTIONIST</option>
                        <option value="Manager">MANAGER</option>
                        <option value="porter">PORTER</option>
                        <option value="housekeeper">HOUSEKEEPER</option>
                        <option value="waitress">WAITRESS</option>
                        <option value="waiter">WAITER</option>
                        <option value="cook">COOK</option>
                        <option value="laundry">LAUNDRY</option>
                        <option value="MAINTENANCE">MAINTENANCE</option>
                        <option value="public area">PUBLIC AREA</option>
                        <option value="I.T">I.T</option>
                        <option value="logistics">LOGISTICS</option>
                        <option value="hr">H.R</option>
                        <option value="fc & sp">FC & SP</option>
                        <option value="f, d & e">F, D & E</option>
                        <option value="wadd/c.s">WADD/C.S</option>
                        <option value="property">PROPERTY</option>
                    </select>
                </div>

                <div class="col-lg-6 mb-3">
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

                <div class="col-lg-6 mb-3">
                    <label for="">Date Of Birth</label>
                    <input id='dob' class="form-control p-2" type="date" required />
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">Email Address</label>
                    <input id='emailAddress' class="form-control p-2" type="email" required />
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">NIN</label>
                    <input id='nin' class="form-control p-2" type="number" required />
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">Next Of Kin Name</label>
                    <input id='NOK' class="form-control p-2" type="text" required />
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">House Address Next Of Kin</label>
                    <input id='NOKAddress' class="form-control p-2" type="text" required />
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">Next Of Kin Phone Number</label>
                    <input id='NOKphone' class="form-control p-2" type="text" required />
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">Relationship</label>
                    <input id='relationship' class="form-control p-2" type="text" required />
                </div>

                <div class="col-lg-6 mb-3">
                    <label for="">Year of Employement</label>
                    <input id='employement' class="form-control p-2" type="year" required />
                </div>

                <div class="col-12 mt-4 d-flex justify-content-center font-weight-bold">
                    <button style={{ fontSize: '16px' }} type='submit' class="btn btn-sm p-2 font-weight-bold">Submit</button>
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