#include <stdio.h>

void one_dim_array(void);
void two_dim_array(void);
void print_arr(const int *arr, const int size);

int main(void)
{
    one_dim_array();
    two_dim_array();

    return 0;
}

void one_dim_array(void)
{
    printf("-------------------------------------------------------------------------------\n");
    printf("- One Dimensional Arrays                                                      -\n\n");

    // Declare and initialise a 10 elment array
    int arr1[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

    // Get the length of the array
    printf("len:%ld\n", sizeof(arr1) / sizeof(arr1[0]));

    // Access array elements by iterating over the array
    for (int i = 0; i < 10; i++) {
        printf("idx:%d val:%d\n", i, arr1[i]);
    }

    // Declare a 10 elment array
    int arr2[10];

    // Fill the array with values
    for (int i = 0; i < 10; i++) {
        arr2[i] = i + 1;
    }

    for (int i = 0; i < 10; i++) {
        printf("%d ", arr2[i]);
    }
}

void two_dim_array(void)
{
    printf("\n\n-------------------------------------------------------------------------------\n");
    printf("- Two Dimensional Arrays                                                      -\n\n");

    // Declare and initialise a 10 elment, 2 dimensional array
    int arr1[5][5] = {
        { 1, 2, 3, 4, 5 },
        { 6, 7, 8, 9, 10 },
    };

    // Access array elements by iterating over the array
    for (int r = 0; r < 5; r++) {
        for (int c = 0; c < 5; c++) {
            printf("row:%d col:%d val:%d\n", r, c, arr1[r][c]);
        }
    }

    // Declare a 10 elment array
    int arr2[5][5];

    // Fill the array with values
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            arr2[i][j] = i + 1;
        }
    }

    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            printf("%d ", arr2[i][j]);
        }
    }
}
