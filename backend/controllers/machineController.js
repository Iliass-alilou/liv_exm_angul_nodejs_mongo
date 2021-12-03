const Machine = require("../models/machine")

module.exports = {
    async addMachine(req, res) {
        const machine = req.body;
        const MV = new Machine({ nom: machine.nom, ip: machine.ip,systemExploitation: machine.systemExploitation,
            etat: machine.etat});
        res.send(await MV.save());
    },
    async getAllMachines (req, res) {
        const machines = await Machine.find();
        res.send(machines);
    },
    async getMachinebyIP(req, res) {
        const ip = req.params["id"];
        const machine = await Machine.find({ip:ip});
        res.send(machine);
    },
    async updateMachineByIP(req, res) {
        const machine = req.body;
        const ip = req.params["id"];
        const findMachineByIp = Machine.findOne({ip:ip})
        const updatedUser = await Machine.findOneAndUpdate(findMachineByIp,machine);
        res.send(machine)
    },
    async deleteMachinebyIp(req, res) {
        const ip = req.params["id"];
        const findMachineByIp = Machine.findOne({email:ip})
        const deleteu = await findMachineByIp.remove();
        res.send(deleteu);
    },
    
}