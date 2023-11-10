import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import controller.TarefaController;
import model.Categoria;
import model.Tarefa;
import view.TarefaView;
import view.ordenacao.OrdenaPrioridadeTarefa;

public class App {
    public static void main(String[] args) {
        List<Tarefa> tarefas = new ArrayList<>();
        TarefaView view = new TarefaView();
        TarefaController controller = new TarefaController(tarefas, view);
        controller.setOrdenacao(new OrdenaPrioridadeTarefa());
        
        Categoria categoria1 = new Categoria("Casa", tarefas);
        Categoria categoria2 = new Categoria("Trabalho", tarefas);
        Categoria categoria3 = new Categoria("Faculdade", tarefas);

        Tarefa tarefa1 = new Tarefa("Comprar piso", 2, new Date(), categoria1);
        Tarefa tarefa2 = new Tarefa("Prova Programação", 1, new Date(), categoria3);
        Tarefa tarefa3 = new Tarefa("Atualizar planilha", 3, new Date(), categoria2);

        controller.addTarefa(tarefa1);
        controller.addTarefa(tarefa2);
        controller.addTarefa(tarefa3);

        controller.updateView();

        controller.removeTarefa(tarefa2);

        controller.updateView();
        
    }
}
