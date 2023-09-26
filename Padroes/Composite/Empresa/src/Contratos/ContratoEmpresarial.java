package Contratos;

import java.util.ArrayList;
import java.util.List;

public class ContratoEmpresarial implements Contrato {
    
    private List<Contrato> contratos = new ArrayList<>();

    @Override
    public void mostrarContrato(){
        
        for(Contrato con: contratos){
            con.mostrarContrato();
        }
    }

    public void addContrato(Contrato con){
        contratos.add(con);
    }

    public void removeContrato(Contrato con){
        contratos.remove(con);
    }

    
}


