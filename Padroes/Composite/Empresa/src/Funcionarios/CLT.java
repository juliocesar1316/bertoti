package Funcionarios;

import Contratos.Contrato;

public class CLT implements Contrato{

    private String nome;
    private int id;
    private String contrato;

    public CLT(String nome, int id, String contrato){
        this.nome = nome;
        this.id = id;
        this.contrato = contrato;
    }

    @Override
    public void mostrarContrato(){
        System.out.println(id + " - " + nome + " - Tipo de contrato: " + contrato);
    }

}
