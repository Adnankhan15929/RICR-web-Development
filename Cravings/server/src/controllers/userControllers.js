import User from "../models/userModel.js"

export const UserUpdate = async (req, res , next)=>{
    try {
        //login here

        const {fullName, email, mobileNumber} = req.body;
        const currentUser = req.user;

        if(!fullName || !email || !mobileNumber){
            const error = new Error("All Fields Required");
            error.statusCode = 400;
            return next(error);
        }
        console.log("OldData: ",currentUser);//old user data in json format
        //first Way 
        //currentUser.fullName = fullName;
        //currentUser.email = email;
        //currentUser.mobileNumber = mobileNumber;
        //await currentUser.save();

        //console..log("NewData: ",currentUser);



        //Second way
        
        const updateUser = await User.findByIdAndUpdate(
            {
                _id: currentUser._id
            },
            {fullName, email, mobileNumber},
            {new: true},
        );

        console.log("Updated User: ", updateUser);
        res.status(200).json({message: "User Updated Successfully", data: updateUser});

        console.log("Updating the user")
        
    } catch (error) {
        next(error);
    }
}