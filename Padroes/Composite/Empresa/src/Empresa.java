import Contratos.ContratoEmpresarial;
import Funcionarios.CLT;
import Funcionarios.Estagiario;
import Funcionarios.PJ;

public class Empresa {
    public static void main(String[] args) {
        
        CLT clt1 = new CLT("Julio Cesar", 252, "Carteira Assinada (CLT)");
        CLT clt2 = new CLT("Maria Fatima", 203, "Carteira Assinada (CLT)");
        ContratoEmpresarial cltEmpresarial = new ContratoEmpresarial();
        cltEmpresarial.addContrato(clt1);
        cltEmpresarial.addContrato(clt2);

        Estagiario estag1 = new Estagiario("Allan Matheus", 332, "Estágio");
        Estagiario estag2 = new Estagiario("Felipe Ramos", 333, "Estágio");
        ContratoEmpresarial estagEmpresarial = new ContratoEmpresarial();
        estagEmpresarial.addContrato(estag1);
        estagEmpresarial.addContrato(estag2);

        PJ pj1 = new PJ("Hallas ALphonse", 115, "Pessoa Juridica (PJ)");
        PJ pj2 = new PJ("Carla", 120, "Pessoa Juridica (PJ)");
        ContratoEmpresarial pjEmpresarial = new ContratoEmpresarial();
        pjEmpresarial.addContrato(pj1);
        pjEmpresarial.addContrato(pj2);

        ContratoEmpresarial empresarial = new ContratoEmpresarial();
        empresarial.addContrato(cltEmpresarial);
        empresarial.addContrato(estagEmpresarial);
        empresarial.addContrato(pjEmpresarial);
        empresarial.mostrarContrato();


    }
}
