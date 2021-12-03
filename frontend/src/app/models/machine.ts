export class Machine {
    nom: string;
    ip: string;
    systemExploitation: string;
    etat:string;
    
    constructor(nom: string,ip: string,systemExploitation:string,etat:string) {
      this.nom=nom;
      this.ip=ip;
      this.systemExploitation=systemExploitation;
      this.etat=etat
    }
}