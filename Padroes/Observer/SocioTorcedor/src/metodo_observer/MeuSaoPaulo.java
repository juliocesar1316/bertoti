package metodo_observer;

public class MeuSaoPaulo implements Observer{
    
    @Override
    public void update(String novoTime){
        if("Sao Paulo".equals(novoTime)){
            System.out.println("Seu time ganhou!");
        }
        else{
            System.out.println("Seu time perdeu!");
        }
    }
}
