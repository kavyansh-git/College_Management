import { Icon } from "@iconify/react";
import profile_image from "../assets/images/profile_image1.jpg";
import { useState, useEffect } from "react";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import TextInput from "../components/shared/TextInput";
import RadioButtonGroup from "../components/shared/RadioButton";
import PasswordInput from "../components/shared/PasswordInput";
import Header from "../components/shared/Header";
import "../App.css";
import AdminSidebar from "../components/shared/AdminSidebar";

const FacultyCreateComponent = () => {
  
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [facultyId, setFacultyId] = useState('');
  const [regNo, setRegNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [yearOfJoining, setyearOfJoining] = useState('');
  const [department, setDepartment] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperince] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [nationality, setNationality] = useState('');
  const [religion, setReligion] = useState('');
  const [caste, setCaste] = useState('');
  const [dob, setDob] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [mailingAddress, setMailingAddress] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    
    const FacultyData = {
      firstName,
      lastName,
      facultyId,
      regNo,
      email,
      password,
      department,
      yearOfJoining,
      specialization,
      qualification,
      experience,
      nationality,
      religion,
      caste,
      dob,
      fatherName,
      motherName,
      permanentAddress,
      mailingAddress,
      contactNo
    };
    
    const response = await makeUnauthenticatedPOSTRequest("/Faculty/FacultyRegister", FacultyData);
      if (response && !response.err) {                        
          const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});
            alert("Success");
            console.log("Faculty created successfully:", response);
            // Redirect to the admin dashboard after successful creation
          navigate("/AdminDashboard");
      } else {
            alert("Failure");
        }
    };

    useEffect(() => {
        if (!file) {
            setPreview(null);
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl); // cleanup previous preview
        };
    }, [file]);
    

  return (
    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">
        {/* first div  */}
        <div className="w-full h-full bg-black bg-opacity-60">
          <Header />

          <div className="w-full h-4/5 flex items-center justify-start">
            <AdminSidebar curActiveScreen="add Faculty" />

            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="w-9/10 h-9/10 bg-black bg-opacity-30 border border-white rounded-xl">
                  <div className="w-full h-1/10 bg-white bg-opacity-10 flex items-center justify-center border-b border-white text-white text-xl">
                    Enter Faculty Details
                  </div>
                  <div className="w-full h-9/10 overflow-auto">
                    <div className="w-full h-1/2 flex items-center justify-center">
                                            <div className="w-2/3 h-full flex flex-col items-center justify-center">
                    
                                            <div className="w-full h-1/2 flex items-center justify-center">
                                            </div>
                                        
                                            <div className="w-full h-1/2 flex items-center justify-center">                    
                                                <div className="w-1/2 h-full flex text-white items-center justify-center">
                                                    <div className="w-8/10 h-9/10 flex items-center justify-center">
                                                        <TextInput 
                                                            label="First Name*"
                                                            placeholder="Enter faculty's First name"
                                                            className="my-4"
                                                            value={firstName}
                                                            setValue={setFirstName}                                                                     
                                                                
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-1/2 h-full flex text-white items-center justify-center">
                                                    <div className="w-8/10 h-9/10 flex items-center justify-center">
                                                        <TextInput 
                                                            label="Last Name*"
                                                            placeholder="Enter faculty's last name"
                                                            className="my-4"
                                                            value={lastName}                                    
                                                            setValue={setLastName}    
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            </div>
                                            <div className="w-1/3 h-full flex flex-col items-center justify-center">
                                                <div className="w-4/10 h-8/10 flex items-end justify-center">
                                                    {/* Image upload component */}
                                                    <div className="w-9/10 h-8/10 mb-4">
                                                        <img
                                                            alt="Upload profile"
                                                            src={ preview || "https://media.istockphoto.com/id/1303840298/vector/photo-upload-icon-picture-flat-icons-uploading-your-photo-logo-camera-sign-vector-eps-10-ui.jpg?s=612x612&w=0&k=20&c=vvG8i2sRmEUFbcCcPzfO4wVbXCk3Fi53kCmMY_1n3WE=" }
                                                            className="w-full h-full rounded-md border border-white object-cover"
                                                            title="Profile Image"
                                                            
                                                        />
                                                        </div>
                                                    </div>
                                                    <div className="w-4/10 h-2/10 flex items-center justify-center text-white">
                                                        {/* Hidden input */}
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            id="profileImage"
                                                            className="hidden"
                                                            onChange={(e) => setFile(e.target.files[0])}
                                                        />
                    
                                                        {/* Custom trigger */}
                                                        <label
                                                            htmlFor="profileImage"
                                                            className="inline-block bg-blue-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out mb-4"
                                                        >
                                                        Select photo
                                                        </label>
                                                    </div>
                                            </div>
                                        </div>

                    <div className="w-full h-1/4 flex items-center justify-center">
                      <div className="w-1/3 h-full flex text-white items-center justify-center">
                        <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Faculty ID*"
                                    placeholder="Enter faculty ID"
                                    className="my-4"
                                    value={facultyId}
                                    setValue={setFacultyId}                                 
                                        
                                />
                            </div>
                          </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Faculty Reg No."
                                    placeholder="Enter faculty's reg no."
                                    className="my-4"
                                    value={regNo}
                                    setValue={setRegNo}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <PasswordInput 
                                    label="Password*"
                                    placeholder="Enter faculty's password"
                                    className="my-4"
                                    value={password}
                                    setValue={setPassword}    
                                />
                            </div>
                        </div>                        
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-center">                        
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Department*"
                                    placeholder="Enter faculty's department"
                                    className="my-4"
                                    value={department}
                                    setValue={setDepartment}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Year of Joining"
                                    placeholder="Enter faculty's year of joining"
                                    className="my-4"
                                    value={yearOfJoining}
                                    setValue={setyearOfJoining}    
                                />
                            </div>    
                        </div>  
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Specialization"
                                    placeholder="Enter faculty's specialization"
                                    className="my-4"
                                    value={specialization}
                                    setValue={setSpecialization}    
                                />
                            </div>    
                        </div>
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-center">                        
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Qualification"
                                    placeholder="Enter faculty's qualification"
                                    className="my-4"
                                    value={qualification}
                                    setValue={setQualification}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Experience"
                                    placeholder="Enter faculty's teaching experience"
                                    className="my-4"
                                    value={experience}
                                    setValue={setExperince}    
                                />
                            </div>    
                        </div>  
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
      
                        </div>
                            
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-center">                        
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Nationality"
                                    placeholder="Enter faculty's nationality"
                                    className="my-4"
                                    value={nationality}
                                    setValue={setNationality}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Religion"
                                    placeholder="Enter faculty's religion"
                                    className="my-4"
                                    value={religion}
                                    setValue={setReligion}    
                                />
                            </div>    
                        </div>  
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Caste"
                                    placeholder="Enter Faculty's caste"
                                    className="my-4"
                                    value={caste}
                                    setValue={setCaste}    
                                />
                            </div>    
                        </div>
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-center">
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Date of Birth"
                                    placeholder="Enter faculty's date of birth"
                                    className="my-4"
                                    value={dob}
                                    setValue={setDob}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-start">
                                <RadioButtonGroup
                                  label="Select Gender :"
                                  options={['Male', 'Female', 'Other']}                                                                    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                                
                        </div>
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-center">
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Father's Name"
                                    placeholder="Enter father's name"
                                    className="my-4"
                                    value={fatherName}
                                    setValue={setFatherName}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                                
                        </div>
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-center">
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Mother's Name"
                                    placeholder="Enter mother's name"
                                    className="my-4"
                                    value={motherName}
                                    setValue={setMotherName}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                          
                        </div>
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-center">
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Contact No."
                                    placeholder="Enter faculty's contact no."
                                    className="my-4"
                                    value={contactNo}
                                    setValue={setContactNo}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                          
                        </div>
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-start">
                        <div className="w-2/3 h-full flex text-white items-center justify-center">
                            <div className="w-9/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="E-mail address"
                                    placeholder="Enter email address"
                                    className="my-4"
                                    value={email}
                                    setValue={setEmail}    
                                />
                            </div>
                        </div>                     
                    </div>                    

                    <div className="w-full h-1/4 flex items-center justify-start">
                        <div className="w-2/3 h-full flex text-white items-center justify-center">
                            <div className="w-9/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Permanent Address"
                                    placeholder="Enter permanent address"
                                    className="my-4"
                                    value={permanentAddress}
                                    setValue={setPermanentAddress}    
                                />
                            </div>
                        </div>                     
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-start">
                        <div className="w-2/3 h-full flex text-white items-center justify-center">
                            <div className="w-9/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Mailing Address"
                                    placeholder="Enter mailing address"
                                    className="my-4"
                                    value={mailingAddress}
                                    setValue={setMailingAddress}    
                                />
                            </div>
                        </div>                     
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-start">
                      <div className="w-95/10 h-full flex items-center justify-end">
                        <button 
                          className="w-2/10 h-1/3 text-white font-semibold rounded-lg bg-green-700 hover:bg-green-600 hover:cursor-pointer"
                          onClick={(e) => {e.preventDefault();
                            handleSubmit();
                            }}
                          >
                          Create Faculty                          
                        </button>
                      </div>                        
                    </div>                   

                    

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCreateComponent;
