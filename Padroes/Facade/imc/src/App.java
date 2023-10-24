import facade.Altura;
import facade.Fachada;
import facade.Peso;

public class App {
    public static void main(String[] args){

       Altura altura = new Altura(1.80);
       Peso peso = new Peso(85.5);

       Fachada facade = new Fachada();

       facade.imc(27, peso, altura);
       
    }
}
