public class SpiralMatrix {
    public static void main(String[] args) {
        int length = 5;

        int[][] spiralMatrix = spiralMatrix(length);

        for (int i = 0; i < length; i += 1) {
            for (int j = 0; j < length; j += 1) {
                System.out.print(spiralMatrix[i][j]);
                System.out.print("\t");
            }
            System.out.println();
        }
    }

    public static int[][] spiralMatrix(int length) {
        int[][] spiralMatrix = new int[length][length];

        int arrayLength = length;

        int i = -1;
        int j = 0;
        int value = -1;
        int increment = 1;

        for (int k = 0; k < arrayLength; k += 1) {
            i += 1;
            value += 1;
            spiralMatrix[j][i] = value;
        }

        arrayLength -= 1;

        while (arrayLength != 0) {
            for (int k = 0; k < arrayLength; k += 1) {
                value += 1;
                j += increment;
                spiralMatrix[j][i] = value;
            }

            for (int k = 0; k < arrayLength; k += 1) {
                value += 1;
                i -= increment;
                spiralMatrix[j][i] = value;
            }

            arrayLength -= 1;
            increment *= -1;
        }

        return spiralMatrix;
    }
}
