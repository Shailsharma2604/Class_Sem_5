
import java.util.*;

public class Day_2 {
    public static void main(String[] args) {

        System.out.println("The complement of ~5 is: " + (~5));

        System.out.println("The complement of ~ -6 is: " + (~-6));

        int number_1 = 5;
        int twoComplement_1 = ~number_1;
        System.out.println("2's complement of ~5 is: " + twoComplement_1);

        int number_2 = -6;
        int twoComplement_2 = ~number_2;
        System.out.println("2's complement of -6 is: " + twoComplement_2);


        String ABC = "Hello";
        String TBR = ABC;
        String PQR = new String("Hello");
        System.out.println(ABC==TBR);
        System.out.println(ABC.equals(PQR));
        System.out.println(ABC==PQR);
        System.out.println(ABC.equals(PQR));


        ABC = "world";
        System.out.println(TBR);
        System.out.println(ABC==TBR);


        int a=-5;
        int b=10;
        int c=a++;
        int d=++a;
        int x=b+c+d;  // 10+(-5)+(-3)
        System.out.println(x);


    }
}
