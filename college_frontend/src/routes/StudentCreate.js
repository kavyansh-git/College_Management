import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import axios from "../utils/axios";
import TextInput from "../components/shared/TextInput";
import RadioButtonGroup from "../components/shared/RadioButton";
import SelectField from "../components/shared/SelectField";
import PasswordInput from "../components/shared/PasswordInput";
import Header from "../components/shared/Header";
import "../App.css";
import AdminSidebar from "../components/shared/AdminSidebar";

const StudentCreateComponent = () => {

  const [creating, setCreating] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [regNo, setRegNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [course, setCourse] = useState('');
  const [batch, setBatch] = useState('');
  const [branch, setBranch] = useState('');
  const [nationality, setNationality] = useState('');
  const [religion, setReligion] = useState('');
  const [caste, setCaste] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [mailingAddress, setMailingAddress] = useState('');
  const [contactNoStudent, setContactNoStudent] = useState('');
  const [contactNoParents, setContactNoParents] = useState('');
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const courses = ["B.Tech", "B.Pharm", "B.C.A.", "M.Tech", "M.Pharm"];
  const batches = ["2022", "2023", "2024", "2025"];
  const branches = ["CS", "IT", "EC", "EN", "ME"];

  const handleSubmit = async () => {
  console.log("file sent from admin panel is:", file);

  const formData = new FormData();

  // Append all student fields
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("rollNo", rollNo);
  formData.append("regNo", regNo);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("course", course);
  formData.append("batch", batch);
  formData.append("branch", branch);
  formData.append("nationality", nationality);
  formData.append("religion", religion);
  formData.append("caste", caste);
  formData.append("dob", dob);
  formData.append("gender", gender);
  formData.append("fatherName", fatherName);
  formData.append("fatherOccupation", fatherOccupation);
  formData.append("motherName", motherName);
  formData.append("motherOccupation", motherOccupation);
  formData.append("permanentAddress", permanentAddress);
  formData.append("mailingAddress", mailingAddress);
  formData.append("contactNoStudent", contactNoStudent);
  formData.append("contactNoParents", contactNoParents);

  // Append the image file
  if (file) {
    formData.append("file", file);
  }

  try {
    setCreating(true);
    const response = await axios.post("/student/studentRegister", formData );

    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      toast.success("Student created successfully!");
      navigate("/AdminDashboard");
    } else {
      toast.error("Failed to create student!");
    }
  } catch (error) {
    console.error("Error during student registration:", error);
    toast.error("Something went wrong!");
  } finally {
    setCreating(false);
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
            <AdminSidebar curActiveScreen="add Student" />

            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="w-9/10 h-9/10 bg-black bg-opacity-30 border border-white rounded-xl">
                  <div className="w-full h-1/10 bg-white bg-opacity-10 flex items-center justify-center border-b border-white text-white text-xl">
                    Enter Student Details
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
                                        placeholder="Enter Student's First name"
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
                                        placeholder="Enter Student's last name"
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
                                    label="Roll No.*"
                                    placeholder="Enter Student's roll no."
                                    className="my-4"
                                    value={rollNo}
                                    setValue={setRollNo}                                 
                                        
                                />
                            </div>
                          </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Student Reg No."
                                    placeholder="Enter Student's reg no."
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
                                    placeholder="Enter Student's password"
                                    className="my-4"
                                    value={password}
                                    setValue={setPassword}    
                                />
                            </div>
                        </div>                        
                    </div>

                    <div className="w-full h-1/4 flex items-center justify-center">

                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-full flex items-center justify-start">
                                <div className="flex gap-3 mb-2 text-white">                                    
                                    <SelectField
                                        id="course"
                                        label="Course"
                                        required={true}
                                        value={course}
                                        onChange={setCourse}
                                        options={courses}
                                        placeholder="Select Course"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-full flex items-center justify-start">
                                <div className="flex gap-3 mb-2 text-white">                                    
                                    <SelectField
                                        id="batch"
                                        label="Batch"
                                        required={true}
                                        value={batch}
                                        onChange={setBatch}
                                        options={batches}
                                        placeholder="Select Batch"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-full flex items-center justify-start">
                                <div className="flex gap-3 mb-2 text-white">                                    
                                    <SelectField
                                        id="branch"
                                        label="Branch"
                                        required={true}
                                        value={branch}
                                        onChange={setBranch}
                                        options={branches}
                                        placeholder="Select Branch"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full h-1/4 flex items-center justify-center">                        
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Nationality"
                                    placeholder="Enter Student's nationality"
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
                                    placeholder="Enter Student's religion"
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
                                    placeholder="Enter Student's caste"
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
                                    placeholder="Enter Student's date of birth"
                                    className="my-4"
                                    value={dob}
                                    setValue={setDob}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-start">
                                <RadioButtonGroup
                                  label="Gender"
                                  options={['Male', 'Female', 'Other']}
                                  selectedValue={gender}
                                  onChange={setGender}                                                                    
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
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Father's Occupation"
                                    placeholder="Enter father's occupation"
                                    className="my-4"
                                    value={fatherOccupation}
                                    setValue={setFatherOccupation}    
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
                                    label="Mother's Name"
                                    placeholder="Enter mother's name"
                                    className="my-4"
                                    value={motherName}
                                    setValue={setMotherName}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Mother's Occupation"
                                    placeholder="Enter mother's occupation"
                                    className="my-4"
                                    value={motherOccupation}
                                    setValue={setMotherOccupation}    
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
                                    label="Contact No. Student"
                                    placeholder="Enter student's contact no."
                                    className="my-4"
                                    value={contactNoStudent}
                                    setValue={setContactNoStudent}    
                                />
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                            <div className="w-8/10 h-9/10 flex items-center justify-center">
                                <TextInput 
                                    label="Contact No. Parents"
                                    placeholder="Enter parent's contact no."
                                    className="my-4"
                                    value={contactNoParents}
                                    setValue={setContactNoParents}    
                                />
                            </div>
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
                          className={`w-2/10 h-1/3 text-white font-semibold rounded-lg ${
                                creating
                                ? "bg-gray-500 hover:cursor-not-allowed opacity-70"
                                : "bg-green-700 hover:bg-green-600 hover:cursor-pointer"
                            }`}
                          onClick={(e) => {e.preventDefault();
                            handleSubmit();
                            }}
                          >
                          {creating ? "Creating..." : "Create Student"}                          
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

export default StudentCreateComponent;
