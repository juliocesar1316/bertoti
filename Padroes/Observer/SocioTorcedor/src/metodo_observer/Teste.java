package metodo_observer;

public class Teste {
    
    public static void main(String[] args) {
        Time time = new Time("Time");
        
        MeuCorinthians obs1 = new MeuCorinthians();
        time.registerObserver(obs1);
        time.setNomeTime("Santos");  
        time.setNomeTime("Corinthians"); 
        
        MeuSaoPaulo obs3 = new MeuSaoPaulo();
        time.registerObserver(obs3);
        time.setNomeTime("Vasco");
        time.setNomeTime("Sao Paulo");


    }
}
