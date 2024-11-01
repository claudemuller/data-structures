#include "../src/singly-linked-list.h"
#include <stdio.h>
#include <string.h>

int test_sl_append(void);

#define ASSERT(condition)                                                  \
    do {                                                                   \
        if (!(condition)) {                                                \
            printf("Assertion failed: %s, line %d\n", __FILE__, __LINE__); \
            return 1;                                                      \
        }                                                                  \
    } while (0)

int test_sl_append(void)
{
    singly_linked_list_t actual = { 0 };
    sl_append(&actual, 22);
    ASSERT(actual.head != NULL);
    ASSERT(actual.head->val == 22);

    node_t n2 = { .val = 5 };
    node_t n1 = {
        .val = 3,
        .next = &n2,
    };

    actual.head = &n1;
    sl_append(&actual, 22);
    ASSERT(actual.head->val == 3);
    ASSERT(actual.head->next == &n2);
    ASSERT(actual.head->next->val == 5);
    ASSERT(actual.head->next->next->val == 22);

    return 0;
}

int main(void)
{
    int failed_tests = 0;

    printf("Running tests for 'sl_append' function...\n");
    if (test_sl_append() != 0) {
        printf("❌ Some tests for 'sl_append' function failed.\n");
        failed_tests++;
    } else {
        printf("✅ All tests for 'sl_append' function passed.\n");
    }

    printf("✅ All tests passed successfully\n");

    return 0;
}
