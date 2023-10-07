import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class pangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");     //input the sentence
        String input = scanner.nextLine().toLowerCase();    //converts the input to lowercase

        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        
        Set<Character> letterSet = new HashSet<>();     //create the hash set

        for (char c : input.toCharArray()) {            //traversing through the input sentence
            if (Character.isLetter(c) && Character.isLowerCase(c)) {
                letterSet.add(c);
            }
        }
        return letterSet.size() == 26;      //check the set size is 26
    }
}