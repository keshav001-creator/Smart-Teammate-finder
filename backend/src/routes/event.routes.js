const express = require("express");
const router = express.Router();
const authUser=require("../middlewares/post.middleware")
const {createEvent,joinEvent,getParticipants,getAllEvents}=require("../controllers/event.controller")

router.post("/create",authUser,createEvent);
router.post("/:eventId/join",authUser,joinEvent);
router.get("/:eventId/participants",authUser,getParticipants);
router.get("/", getAllEvents);


module.exports = router;
