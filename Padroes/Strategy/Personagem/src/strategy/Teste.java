package strategy;

public class Teste {
    public static void main(String[] args) {

        Personagem ladrao = new Personagem();

        Personagem policia = new Personagem();

        ladrao.setAcao(new Correr());
        ladrao.realizarAcao();

        policia.setAcao(new Correr());
        policia.realizarAcao();

        ladrao.setAcao(new Pular());
        ladrao.realizarAcao();

        policia.setAcao(new Correr());
        policia.realizarAcao();

        ladrao.setAcao(new Fugir());
        ladrao.realizarAcao();
    }
}
