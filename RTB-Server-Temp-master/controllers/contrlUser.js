import 'dotenv/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sgMail from '@sendgrid/mail';

//SendGrig mail
sgMail.setApiKey(process.env.SEND_GRID_API_KEY52342);

// Secret for JWT
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY576;
const expiresIn = '1h';


//Hash password===================================
export const hashPassword = async (password) =>
{
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

//FOR TESTING-------------------------------------
const uid = 1;
const uType = "user";
const un = "Admin";
const pw = await hashPassword('1234');


export const emailVerificationCode = async (req, res, next) =>
{
    const { useremail } = req.body;

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code

    req.session.regEmail = useremail;
    req.session.regVeriCode = verificationCode;

    const msg = {
        to: useremail,
        from: process.env.SENDGRID_SENDER2658,
        subject: 'Verification code: ' + verificationCode,
        text: ' Use this code to verify your email address.',
        html: '<strong>This code is valid once.</strong>',
    }

    sgMail
        .send(msg)
        .then(() =>
        {
            console.log('Email sent to:' + msg.to + ".");

            console.log("VeriCode is:" + req.session.regVeriCode);//ONLY FOR TESTING....

            res.json({ message: 'Email verification code was emailed.' });
        })
        .catch((err) =>
        {
            console.log('Error while emailing verification code: ' + err);

            const error = new Error(`Error while emailing the verification code.`);
            error.status = 500;
            return next(error);
        })
}

export const verifyEmailAndCreateProfile = async (req, res, next) =>
{
    const { useremail, emailVeriCode } = req.body;

    console.log("REQ: " + useremail + ":" + emailVeriCode);
    console.log("SESSION: " + req.session.regEmail + ":" + req.session.regVeriCode);


    if (req.session.regEmail == useremail)
    {
        if (req.session.regVeriCode == emailVeriCode)
        {
            //CREATE THE PROFILE
            //
            //

            res.json({ message: 'Email verified and profile created successfully.' });
        }
        else
        {
            const error = new Error(`Bad email verification code.`);
            error.status = 401;
            return next(error);
        }
    }
    else
    {
        const error = new Error(`Email cannot be changed.`);
        error.status = 401;
        return next(error);
    }
}

//Login============================================
export const userLogin = async (req, res, next) =>
{
    try
    {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password)
        {
            const error = new Error(`Username and password are required.`);
            error.status = 400;
            return next(error);
        }

        // Find user's password in database
        //
        //
        //un="???"
        //

        if (username != un)
        {
            const error = new Error(`Invalid user.`);
            error.status = 403;
            return next(error);
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, pw);
        if (!isPasswordValid)
        {
            const error = new Error(`Cannot authenticate user.`);
            error.status = 403;
            return next(error);
        }


        //Set session
        req.session.uid = uid;
        req.session.uname = un;
        req.session.uType = uType;

        // Generate JWT
        const token = jwt.sign({ id: uid, username: un }, JWT_SECRET_KEY, { expiresIn: expiresIn });
        res.json({ message: 'Login successful.', token });
    }
    catch (err)
    {
        console.log(err);
        const error = new Error(`Error while authenticating the user.`);
        error.status = 500;
        return next(error);
    }

}

//Logout==========================================
export const userLogout = (req, res) =>
{
    req.session.destroy((err) =>
    {
        if (err)
        {
            const error = new Error(`Error while logging out.`);
            error.status = 500;
            return next(error);
        }
        res.clearCookie('connect.sid'); // Clear session cookie
        res.json({ message: 'Logged out successfully.' });
    });
};



/* Example of adding a user
(async () => {
  const hashedPassword = await hashPassword('password123');
  users.push({ id: 2, username: 'user2', password: hashedPassword });
})();
*/