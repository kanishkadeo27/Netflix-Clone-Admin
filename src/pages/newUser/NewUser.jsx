import './newUser.css'

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">
                New User
            </h1>
            <form className="newUserForm">
                <div className="newUserFormItem">
                    <label>Username</label>
                    <input type="text" name="" id="" placeholder='john' />
                </div>
                <div className="newUserFormItem">
                    <label>Full Name</label>
                    <input type="text" name="" id="" placeholder='john smith' />
                </div>
                <div className="newUserFormItem">
                    <label>Email</label>
                    <input type="email" name="" id="" placeholder='john@gmail.com' />
                </div>
                <div className="newUserFormItem">
                    <label>Password</label>
                    <input type="password" name="" id="" placeholder='*****' />
                </div>
                <div className="newUserFormItem">
                    <label>Phone</label>
                    <input type="number" name="" id="" placeholder='+91 345745349439' />
                </div>
                <div className="newUserFormItem">
                    <label>Address</label>
                    <input type="number" name="" id="" placeholder='new york ,Usa' />
                </div>
                <div className="newUserFormItem">
                    <label>Address</label>
                    <input type="number" name="" id="" placeholder='new york ,Usa' />
                </div>
                <div className="newUserFormItem">
                    <label>Active</label>
                    <select className="newUserSelect" name='active' id='active'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="newUserFormItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value='male' />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value='female' />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="others" value='others' />
                        <label for="others">Other</label>
                    </div>
                </div>
                <button className="newUserBtn">Create</button>
            </form>
        </div>
    )
}

export default NewUser