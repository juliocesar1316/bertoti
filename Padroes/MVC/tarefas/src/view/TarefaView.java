package view;

import java.util.List;

import model.Tarefa;

public class TarefaView {
    public void exibirTarefas(List<Tarefa> tarefas){
        if(tarefas.isEmpty()){
            System.out.println("Nenhuma tarefa disponivel!");
        } else{
            System.out.println("Lista de tarefas:");
            for (Tarefa tarefa : tarefas){
                System.out.println("Nome: " + tarefa.getNome());
                System.out.println("Prioridade: " + tarefa.getPrioridade());
                System.out.println("Data da tarefa: " + tarefa.getData());
                System.out.println("Categoria: " + (tarefa.getCategoria() != null ? tarefa.getCategoria().getNome() : "Sem categoria"));
                System.out.println("\n");
            }
        }
    }
}
