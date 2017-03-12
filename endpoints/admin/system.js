const Endpoint = require("../../core/Endpoint");
const Database = require("../../core/Database");

class SystemHandler extends Endpoint {
    constructor() {
        super({
            name: "System",
            description: "Handles System/Server",
            disabled: true,
            route: "/api/system",
            method: "POST",
            token: false,
            admin: true,
            mask: false
        });
    }

    async run(req, res, data) {
        if (!req.session || !req.session.token) return res.send({ ok: false, error: "Authentication Required" });
        if (!req.session.admin) return res.send({ ok: false, error: "Forbidden" });

        if (data.action) {
            if (data.action === "shutdown") {
                await res.send({ ok: true });
                return setTimeout(() => process.exit(0), 500);
            }
        }

        return res.send({ ok: false, error: "Missing Action" });
    }
}

module.exports = SystemHandler;
