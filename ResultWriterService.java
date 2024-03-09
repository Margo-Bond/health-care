package ru.itgirls.calcapp.service;

import ru.itgirls.calcapp.util.Calculator;

public class ResultWriterService {
    public static void printResult(double  a, double  b) {
        double  result =  Calculator.calculateMassIndex(a, b);
        double roundedResult = Math.round(result * 10.0) / 10.0;
        System.out.println("индекс массы тела: " + roundedResult);
        if (result < 16) {
            System.out.println("Выраженный дефицит массы тела");
        } else if (result >= 16 && result < 18.5) {
            System.out.println("Недостаточная масса тела (дефицит)");
        } else if (result >= 18.5 && result < 25) {
            System.out.println("Норма");
        } else if (result >= 25 && result < 30) {
            System.out.println("Избыточная масса тела (предожирение)");
        } else if (result >= 30 && result < 35) {
            System.out.println("Ожирение 1 степени");
        } else if (result >= 35 && result < 40) {
            System.out.println("Ожирение 2 степени");
        } else if (result >= 40) {
            System.out.println("Ожирение 3 степени");
        }
    }
}

