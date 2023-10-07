import java.util.*;

public class romanToNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);		
        System.out.print("Enter a Roman number: ");			//input the roman number
        String romanNumeral = scanner.nextLine().toUpperCase();		//coverting the input into uppercase
        int result = romanToInteger(romanNumeral);
        System.out.println("Number is: " + result);
    }

    public static int romanToInteger(String s) {
        Map<Character, Integer> romanMap = new HashMap<>();		//creating the hash map 
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int result = 0;
        int preVal = 0;

        for (int i = s.length() - 1; i >= 0; i--) {		//traversing the hash map from input
            int currVal = romanMap.get(s.charAt(i));

            if (currVal < preVal) {
                result -= currVal;
            } else {
                result += currVal;
            }

            preVal = currVal;
        }

        return result;
    }
}