package metodo_observer;


import java.util.ArrayList;
import java.util.List;

public class Time implements Observable {
    private List<Observer> observers = new ArrayList<>();
    private String nomeTime;

    // public Time(String nomeTime){
    //     this.nomeTime = nomeTime;
    // }

    public void setNomeTime(String nomeTime){
        this.nomeTime = nomeTime;
        this.notifyObservers();
    }

    @Override
    public void registerObserver(Observer observer) {
         observers.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
         observers.remove(observer);
    }

   @Override
   public void notifyObservers(){
        for(Observer ob : observers){
            System.out.println("Notificando observers sobre o time");
            ob.update(this.nomeTime);
        }
   }
}
