package facade;

public class Fachada {
    private Peso peso;
    private Altura altura;
    private double imc;

    public Fachada(){
        this.peso = new Peso();
        this.altura = new Altura();
    }

    public void imc(int idade, Peso peso, Altura altura ){
        imc = (peso.obterPeso()/(altura.obterAltura() * altura.obterAltura()));

        System.out.println("Peso: " + peso.obterPeso() + " kg ");
        System.out.println("Altura: " + altura.obterAltura() + " m "); //transformar em metros
        System.out.println("Idade: " + idade + " anos  ");
        System.out.println("O calculo do seu IMC é: "  + imc);
        
        if(imc < 18.5){
            System.out.println("De acordo com seu imc voce esta abaixo do peso");
        }else if(imc > 18.5 && imc <24.9){
            System.out.println("De acordo com seu imc voce esta com peso normal");
        }else if(imc > 25 && imc <29.9){
            System.out.println("De acordo com seu imc voce esta com Pré-obesidade ");
        }else if(imc > 30 && imc <34.9){
            System.out.println("De acordo com seu imc voce esta com Obesidade Grau 1");
        }else if(imc > 35 && imc <39.9){
            System.out.println("De acordo com seu imc voce esta com Obesidade Grau 2");
        }else{
            System.out.println("De acordo com seu imc voce esta com Obesidade Grau 3");
        }
    }
}
