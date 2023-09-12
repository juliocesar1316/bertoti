package metodo_observer;

public class MeuTime implements Observer {

    @Override
    public void update(String novoTime){
        if("Corinthians".equals(novoTime)){
            System.out.println("Seu time ganhou!");
        }
        else{
            System.out.println("Seu time perdeu!");
        }
    }
}

