package controller;

import java.util.ArrayList;
import java.util.List;

import model.Tarefa;
import view.TarefaObserver;
import view.TarefaView;
import view.ordenacao.OrdenacaoTarefa;

public class TarefaController {
    private List<Tarefa> tarefas;
    private TarefaView view;
    private List<TarefaObserver> observers;
    private OrdenacaoTarefa ordenacaoTarefas;

    public TarefaController(List<Tarefa> tarefas, TarefaView view){
        this.tarefas = tarefas;
        this.view = view;
        this.observers = new ArrayList<>();
        this.observers.add(view);
    }

    public void addTarefa(Tarefa tarefa){
        tarefas.add(tarefa);
        notifyObservers();
    }

    public void removeTarefa(Tarefa tarefa){
        tarefas.remove(tarefa);
        notifyObservers();
    }
    public void updateView(){
        if(ordenacaoTarefas != null){
            ordenacaoTarefas.sort(tarefas);
        }
        view.exibirTarefas(tarefas);
    }

    public void addObserver(TarefaObserver observer){
        observers.add(observer);
    }

    public void setOrdenacao(OrdenacaoTarefa ordTarefa){
        this.ordenacaoTarefas = ordTarefa;
    }

    private void notifyObservers(){
        for (TarefaObserver observer : observers){
            observer.update();
        }
    }
    
}

