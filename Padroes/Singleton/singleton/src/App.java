public class App {
    public static void main(String[] args) throws Exception {
        Singleton sin = Singleton.getInstance();

        System.out.println(sin);
        System.out.println(Singleton.getInstance());
    }
}
