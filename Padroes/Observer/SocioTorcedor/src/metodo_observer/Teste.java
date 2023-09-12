package metodo_observer;

public class Teste {
    
    public static void main(String[] args) {
        Time time = new Time();
        
        MeuTime obs1 = new MeuTime();
        time.registerObserver(obs1);
        time.setNomeTime("Santos");  

        MeuTime obs2 = new MeuTime();
        time.registerObserver(obs2);
        time.setNomeTime("Corinthians");  
    }
}
