package model;

import java.util.ArrayList;
import java.util.List;

public class Categoria {
    private String nome;
    private List<Tarefa> tarefas = new ArrayList<>();

    public void addTarefa(Tarefa tarefa){
        tarefas.add(tarefa);
    }

    public Categoria(String nome, List<Tarefa> tarefas){
        this.nome = nome;
        this.tarefas = tarefas;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Tarefa> getTarefas() {
        return tarefas;
    }

    public void setTarefas(List<Tarefa> tarefas) {
        this.tarefas = tarefas;
    }
    
}
