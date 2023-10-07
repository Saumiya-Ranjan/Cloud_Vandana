import java.util.Random;
import java.util.Arrays;
public class arrayRandom {
	public static void main(String[] args) {
		int[] array = { 1, 2, 3, 4, 5, 6, 7 };          //array declaration
		Random rand = new Random();                     // random function
		for (int i = 0; i < array.length; i++) {        //traversing the array
			int randomIndexToSwap = rand.nextInt(array.length);
			int temp = array[randomIndexToSwap];
			array[randomIndexToSwap] = array[i];
			array[i] = temp;
		}
		System.out.println(Arrays.toString(array));     //printing the suffle array.
	}
}