const eventModel = require("../models/event.model")


async function createEvent(req, res) {


    const { name, description } = req.body

    try {

        const Event = await eventModel.create({
            name,
            description
        })

        res.status(200).json({
            message: "event created successfully",
            Event
        })
    } catch (err) {
        res.status(401).json({ error: err.message })
    }
}



async function joinEvent(req, res) {

    try {
        const { userId } = req.body; // The user who wants to join
        const event = await eventModel.findById(req.params.eventId);

        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        // Check if the user is already a participant
        if (!event.participants.includes(userId)) {
            event.participants.push(userId);
            await event.save();
        }

        res.status(200).json({
            message: "User joined event successfully",
            event
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}



async function getParticipants(req, res) {
    try {
        const { skill, interest } = req.query; // New query params for filtering

        const event = await eventModel
            .findById(req.params.eventId)
            .populate("participants"); // get full user objects

        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        let filteredParticipants = event.participants;

        // Filter by skill if provided
        if (skill) {
            filteredParticipants = filteredParticipants.filter(user =>
                user.skills.includes(skill)
            );
        }

        // Filter by interest if provided
        if (interest) {
            filteredParticipants = filteredParticipants.filter(user =>
                user.interest.includes(interest)
            );
        }

        res.status(200).json(filteredParticipants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


async function getAllEvents(req, res) {
  try {
    const events = await eventModel.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


module.exports = {
    createEvent,
    joinEvent,
    getParticipants,
    getAllEvents
}