import { useState } from "react";
import { auth } from "../firebase";
export default function CreateProfile() {
  const user = auth.currentUser;
  const [profile, setProfile] = useState({
    name : user.displayName,
    email : user.uid,
    age: "",
    gender: "",
    educationType: "",
    institution: "",
    department: "",
    semester: "",
    standard: "",
    passingYear: ""
  });
  return (
    <>
      <section className='create-profile'>
        <div className="create-profile-header">
        </div>
        <div className="create-profile-card">

        </div>
        <div className="create-profile-submit-btn">

        </div>
      </section>
    </>
  )
}
