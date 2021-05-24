const HealthController = {
    healthCheck: (req, res, next) => {
        res.json({ message: "Everything OK!"});
    }
}

module.exports = HealthController;