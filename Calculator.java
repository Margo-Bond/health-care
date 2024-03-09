package ru.itgirls.calcapp.util;

public class Calculator {
    public static double  calculateMassIndex(double  weight, double height) {
        double bodyMassIndex = weight / (((height / 100) * height) / 100);
        return bodyMassIndex;
    }
}

