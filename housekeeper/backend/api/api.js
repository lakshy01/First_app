const Router = require('express').Router();
const UserDetail = require('../models/Users');
const AdminDetail = require('../models/Admin');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const JWT_SECRET = "efennvbhsagehkfkgghaeufbakewfrghusragh1u437wt4q940t5y-";

const Admin_ids = ["1", "2", "3", "4", "5"];

// done
Router.route('/register/:userId')
    .post(async (req, res) => {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            email: req.body.email,
            password: hashPassword,
            roomNo: req.body.roomNo,
            regNo: req.body.regNo,
            isCompleted: false, // registration is completed
            time_slots: '',
            timeRegistration: '',
            isFinish: false, // room has been cleaned or not
            floorNo: -1,
        }
        const user = new UserDetail(data);
        user.save();
        return res.status(200).json(user);
    })

// done    
Router.route('/login/:userId')
    .post(async (req, res) => {
        const { password, roomNo } = req.body;
        const user = await UserDetail.findOne({ roomNo }).lean();
        if (!user) {
            console.log(user.roomNo)
            return res.json({ status: "error", error: "Invalid Username/Password" });
        }
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({
                _id: user._id,
                roomNo: user.roomNo
            }, JWT_SECRET);
            console.log(token);
            return res.json({ status: 'ok', data: token });
        }
        res.json({ status: "error", data: "Invalid Username/Password" });
    })

// done    
Router.route('/time_slot_registered_data/:User_id')
    // This API suppose to be hit when user clicked on the time slots and form will be opened and when we click
    // on the submit button form data will be submitted and we update the user details -> isCompleted and time_slots 
    // and we have to disable the time_slots means we need to get the array and add this time
    // create the success or error pop-up
    .post((req, res) => {
        UserDetail.findOne({ roomNo: req.params.User_id })
            .then((user) => {
                if (user.isCompleted === true) {
                    return res.status(200).json({ message: "Already filled" })
                }
                user.isCompleted = req.body.isCompleted;
                user.time_slots = req.body.time_slots;
                user.timeRegistration = new Date();
                user.save();
                return res.status(200).json(user);
            })
            .catch((err) => {
                return res.json({ status: "error", error: "Not able to registered time slots" });
            })
    })

Router.route('/register_slots_details/:User_id')
    .get((req, res) => {
        UserDetail.findOne({ roomNo: req.params.User_id })
            .then((user) => {
                return res.status(200).json(user);
            })
            .catch((err) => {
                return res.json({ status: "error", error: "No details" });
            })
    })

Router.route('/isCleanerFinished/:User_id')
    .post((req, res) => {
        UserDetail.findOne({ roomNo: req.params.User_id })
            .then((user) => {
                if (user.isCompleted === true) {
                    if (user.isFinish === true) {
                        return res.status(200).json({ status: "Done", message: "Already cleaned !!!" });
                    } else {
                        user.isFinish = req.body.isFinish;
                        user.save();
                        return res.status(200).json(user);
                    }
                }
            })
            .catch((err) => {
                return res.status(200).json({ status: "error", error: "Not able to find the user" });
            })
    })

// done    
Router.route('/login_details/:time_zone')
    .get((req, res) => {
        UserDetail.find()
            .then((users) => {
                let n = users.length;
                let morning_slots = [];
                let evening_slots = [];
                for (let i = 0; i < n; i++) {
                    let selected_time = users[i].time_slots;
                    let m = selected_time.length;
                    let tmp = selected_time[m - 2] + selected_time[m - 1];
                    if (tmp === "AM") morning_slots.push(users[i])
                    else if (tmp === "PM") evening_slots.push(users[i]);
                }
                if (req.params.time_zone === "AM") {
                    return res.status(200).json(morning_slots);
                } else if (req.params.time_zone === "PM") {
                    return res.status(200).json(evening_slots);
                }
            })
            .catch((err) => {
                console.log(err);
                return res.json({ status: "error", error: "Not able to retrieve the users" });
            })
    })

// Admin Schema

Router.route('/register_admin/:admin_id')
    .post(async (req, res) => {
        let flag = false;
        for (let i = 0; i < 5; i++) {
            if (Admin_ids[i].localeCompare(req.body.AdminID)) flag = true;
        }
        if (!flag) return res.json({ status: "error", error: "No admin has been registered with this ID" });
        const hashPassword = await bcrypt.hash(req.body.Password, 10);
        const data = {
            EmailID: req.body.EmailID,
            Password: hashPassword,
            AdminID: req.body.AdminID
        };
        const admin = new AdminDetail(data);
        admin.save();
        return res.status(200).json(admin);
    })

Router.route('/login_admin/:AdminId')
    .post(async (req, res) => {
        const { Password, AdminID } = req.body;
        const admin = await AdminDetail.findOne({ AdminID }).lean();
        if (!admin) {
            return res.json({ status: "error", error: "Invalid Username/Password" });
        }
        if (await bcrypt.compare(Password, admin.Password)) {
            const token = jwt.sign({
                _id: admin._id,
                AdminID: admin.AdminID
            }, JWT_SECRET);
            console.log(token);
            return res.json({ status: 'ok', data: token });
        }
        res.json({ status: "error", data: "Invalid Username/Password" });
    })

Router.route('/all_room_per_floor_details/:floorId')
    // floorId -> would be assigned when the user click on the floor we get the particuar id from that room
    .get((req, res) => {
        UserDetail.find({ floorNo: req.params.floorId })
            .then((rooms) => {
                return res.status(200).json(rooms);
            })
            .catch((err) => {
                return res.json({ status: "error", error: "No floor found!!!" });
            })
    })


exports = module.exports = Router;