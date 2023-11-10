package view.ordenacao;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import model.Tarefa;

public class OrdenaDataTarefa implements OrdenacaoTarefa {
    @Override
    public void sort (List<Tarefa> tarefas){
        Collections.sort(tarefas, new dateComparator());
    }

    private class dateComparator implements Comparator<Tarefa> {
        @Override
        public int compare(Tarefa tarefa1, Tarefa tarefa2){
            return tarefa1.getData().compareTo(tarefa2.getData());
        }  
    }
}
