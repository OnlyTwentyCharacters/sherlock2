const Endpoint = require("../../core/Endpoint");

class PanelLogs extends Endpoint {
    constructor() {
        super({
            name: "Panel",
            description: "Admin Panel",
            route: "/panel/logs",
            method: "GET",
            token: false,
            admin: true,
            mask: false
        });
    }

    async run(req, res) {
        if (!req.session || !req.session.token) return res.redirect("/panel/login");
        return res.render("panel/views/layout", {
            title: "Logs",
            content: "logs.ejs",
            data: {
                admin: req.session.admin,
                active: "logs"
            }
        });
    }
}

module.exports = PanelLogs;
