const Profile = () => {
    const userType = 'student';
    
    return (
        <div className="main-box profile-container">
            <h1 className="title">Profile details</h1>
            <form className="profile-form">
                <label>First Name</label>
                <input 
                    type="text"
                    placeholder="Enter first name...."
                />
                <label>Last Name</label>
                <input 
                    type="text"
                    placeholder="Enter last name...."
                />
                <label>Mobile Number</label>
                <input 
                    type="text"
                    placeholder="Enter phone number name...."
                />
                <label>Email Address</label>
                <input 
                    type="email"
                    placeholder="Enter email address name...."
                />
                { userType === 'staff' && (
                    <div className="profile-form">
                        <h2>Staff Details</h2>
                        <label>Staff Role</label>
                        <input
                            type='text'
                            placeholder="Enter your role..."
                        />
                    </div>
                )}
                    
                { userType === 'student' && (
                    <div className="profile-form">
                        <h2>Student Details</h2>
                        <label>Course Title</label>
                        <input
                            type='text'
                            placeholder="Enter your course's title..."
                        />
                        <label>Year of Study</label>
                        <input
                            type='text'
                            placeholder="Enter your year of study (L3 - L7)..."
                        />
                        <label>Student type</label>
                        <input
                            type='text'
                            placeholder="Enter your course's title..."
                        />
                        <label> Student status</label>
                        <input
                            type='text'
                            placeholder="Enter your course's title..."
                        />
                    </div>
                )}

                <label>Current Skills</label>
                <input 
                    type="checkbox"
                />
                <label>Desired Skills</label>
                <input 
                    type="checkbox"
                />
                
                <label>Research Experience</label>
                <input 
                    type="checkbox"
                />
                <h2>Research Interests</h2>
                <label>Option1</label>
                <input
                    type="checkbox"
                />
                <label>Option2</label>
                <input
                    type="checkbox"
                />
                <label>Option3</label>
                <input
                    type="checkbox"
                />
            </form>
        </div>
    )
}

export default Profile