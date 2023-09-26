package Funcionarios;

import Contratos.Contrato;

public class PJ implements Contrato{
    private String nome;
    private int id;
    private String contrato;

    public PJ(String nome, int id, String contrato){
        this.nome = nome;
        this.id = id;
        this.contrato = contrato;
    }

    @Override
    public void mostrarContrato(){
        System.out.println(id + " - " + nome + " - Tipo de contrato: " + contrato);
    }

}
