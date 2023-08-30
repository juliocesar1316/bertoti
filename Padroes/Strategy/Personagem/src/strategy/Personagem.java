package strategy;

public class Personagem {
    
    private Acao acao;

    public void setAcao(Acao action){
        acao = action;
    }

    public void realizarAcao(){
        acao.agir();
    }
}
