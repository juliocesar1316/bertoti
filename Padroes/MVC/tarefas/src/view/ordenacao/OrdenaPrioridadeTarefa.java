package view.ordenacao;

import java.util.Collections;
import java.util.List;

import model.Tarefa;

public class OrdenaPrioridadeTarefa implements OrdenacaoTarefa {
    @Override
    public void sort(List<Tarefa> tarefas){
        Collections.sort(tarefas, (tarefa1, tarefa2) -> {
            if(tarefa1.getPrioridade() < tarefa2.getPrioridade()){
                return -1;
            } else if (tarefa1.getPrioridade() > tarefa2.getPrioridade()){
                return 1;
            } else {
                return 0;
            }
        });
    }
}
