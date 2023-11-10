package model;

import java.util.Date;

public class Tarefa {
    private String nome;
    private int prioridade;
    private Date data;
    private Categoria categoria;

    public Tarefa(){
    }

    public Tarefa(String nome,int prioridade,Date data, Categoria categoria){
        this.nome = nome;
        this.prioridade = prioridade;
        this.data = data;
        this.categoria = categoria;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public int getPrioridade() {
        return prioridade;
    }
    public void setPrioridade(int prioridade) {
        this.prioridade = prioridade;
    }
    public Date getData() {
        return data;
    }
    public void setData(Date data) {
        this.data = data;
    }
    public Categoria getCategoria() {
        return categoria;
    }
    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    
}
