import ru.itgirls.calcapp.service.ResultWriterService;

import java.util.Scanner;


public class _Main {

    public static void main(String[] args) {
        Scanner sc;
        sc = new Scanner(System.in);
        int i = 1;
        while (i < 3) {
            System.out.println("введите значение массы в килограммах");
            double m = Double.parseDouble(sc.nextLine());
            System.out.println("введите значение роста в сантиметрах");
            double h = Double.parseDouble(sc.nextLine());
            i++;
            ResultWriterService.printResult(m, h);
        }
    }
}
