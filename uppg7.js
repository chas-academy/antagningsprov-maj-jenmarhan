

function uppg7() {
   
   import java.util.Scanner;

public class Input {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        System.out.print("Ange ett heltal ");
        int tal1 = input.nextInt();

        System.out.print("Ange ett till heltal: ");
        int tal2 = input.nextInt();
        int summa = summera(tal1, tal2);

        System.out.println("Summan av talen är " + summa);
    }

    public static int summera(int a, int b) {
        return a + b;
    }
}

 
}

module.exports = { uppg7 };
