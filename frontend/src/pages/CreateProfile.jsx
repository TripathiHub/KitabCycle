import { useState } from "react";
import { auth } from "../firebase";
export default function CreateProfile() {
  const user = auth.currentUser;
  const [profile, setProfile] = useState({
    name: user ? user.displayName : "",
    email: user ? user.email : "",
    age: "",
    gender: "",
    educationType: "",
    institution: "",
    department: "",
    semester: "",
    standard: "",
    passingYear: ""
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }))
  }
  async function handleSubmit(e) {
     e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert("please login first");
      return 
    }
    const token = await user.getIdToken();
    const payload = {
      name: profile.name,
      age: Number(profile.age),
      gender: profile.gender,
      education: {
        institutionName: profile.institution,
        institutionType: profile.educationType,
        department: profile.department,
        standardOrSemester:
          profile.educationType === "college"
            ? profile.semester
            : profile.standard,
        passingYear: Number(profile.passingYear)
      }
    };
    try{
     const response = await fetch("http://localhost:5000/api/users/create-profile",{
      method : "POST",
      headers : {
       "Content-Type" : "application/json",
       "Authorization" : `Bearer ${token}`
      },
      body : JSON.stringify(payload)
    })
    const data =  await response.json();
    if(!response.ok){
      throw new Error(data.message);
    }
    console.log(data);
    } catch(error){
      console.error(error);
    }
   
  }
  return (
    <>
      <section className='create-profile'>
        <div className="create-profile-header">
          <h1>Complete Your KitabCycle Profile</h1>
          <p>Tell us a little about yourself so we can personalize your book experience.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="create-profile-card">
            <div className="profile-field">
              <label>Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="profile-field">
              <label>Email</label>
              <input
                id="email"
                type="text"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter youe email"
                required
              />
            </div>
            <div className="profile-field">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                value={profile.age}
                onChange={handleChange}
                placeholder="Enter your age"
              />
            </div>

            <div className="profile-field">
              <label htmlFor="gender">Gender</label>

              <select
                id="gender"
                name="gender"
                value={profile.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer-not-to-say">
                  Prefer not to say
                </option>
              </select>
            </div>

            <div className="profile-field">
              <label htmlFor="educationType">
                Education
              </label>

              <select
                id="educationType"
                name="educationType"
                value={profile.educationType}
                onChange={handleChange}
              >
                <option value="">
                  Select education type
                </option>
                <option value="college">College</option>
                <option value="school">School</option>
              </select>
            </div>

            <div className="profile-field">
              <label htmlFor="institution">
                {profile.educationType == "school" ? "School name" : "College name"}
              </label>

              <input
                id="institution"
                name="institution"
                type="text"
                value={profile.institution}
                onChange={handleChange}
                placeholder={profile.educationType == "school" ? "Enter your school name" : "Enter your college name"}
              />
            </div>
            {profile.educationType === "college" && (
              <>
                <div className="profile-field">
                  <label htmlFor="department">
                    Department
                  </label>

                  <input
                    id="department"
                    name="department"
                    type="text"
                    value={profile.department}
                    onChange={handleChange}
                    placeholder="e.g. Computer Science"
                  />
                </div>

                <div className="profile-field">
                  <label htmlFor="semester">
                    Semester
                  </label>

                  <select
                    id="semester"
                    name="semester"
                    value={profile.semester}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select semester
                    </option>

                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                  </select>
                </div>
              </>
            )}
            {profile.educationType === "school" && (
              <div className="profile-field">
                <label htmlFor="standard">
                  Standard
                </label>

                <select
                  id="standard"
                  name="standard"
                  value={profile.standard}
                  onChange={handleChange}
                >
                  <option value="">
                    Select standard
                  </option>
                  <option value="1">1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3rd</option>
                  <option value="4">4th</option>
                  <option value="5">5th</option>
                  <option value="6">6th</option>
                  <option value="7">7th</option>
                  <option value="8">8th</option>
                  <option value="9">9th</option>
                  <option value="10">10th</option>
                  <option value="11">11th</option>
                  <option value="12">12th</option>
                </select>
              </div>
            )}

            <div className="profile-field">
              <label htmlFor="passingYear">
                Passing Year
              </label>

              <input
                id="passingYear"
                name="passingYear"
                type="number"
                value={profile.passingYear}
                onChange={handleChange}
                placeholder={profile.educationType == "school" ? "eg. 2027" : "eg. 2029"}
              />
            </div>
          </div>
          <div className="create-profile-submit-btn">
            <button type="submit">Create Profile</button>
          </div>
        </form>
      </section>
    </>
  )
}
