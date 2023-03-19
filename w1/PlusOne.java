import java.io.StreamTokenizer;
import java.lang.reflect.Array;
import java.util.Arrays;

public class PlusOne {
    public static void main(String[] args) {
    int[] digists = {9, 8,7 , 6, 5, 4, 3, 2, 1, 0};
        var x = plusOne(digists);
        for (int i = 0; i < x.length; i++) {
            System.out.print(x[i]);
        }

    }

    public static int[] plusOne(int[] num) {
        String s = "";
        for (int i = 0; i < num.length; i++) {
            s = s + num[i];
        }
        long curr = Integer.parseInt(s);
        ++curr;

        //map back to array
        s = curr + "";
        String[] s_arr = s.split("");
        return Arrays.stream(s_arr).mapToInt(x -> Integer.parseInt(Long.parseLong(x))).toArray();
    }
}
