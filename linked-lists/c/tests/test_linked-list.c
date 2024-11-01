#include "../src/singly-linked-list.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int test_sl_append(void);
int test_sl_insert_at(void);
int test_sl_traverse(void);
int test_sl_remove(void);

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

int test_sl_insert_at(void)
{
    node_t n1 = { .val = 3 };
    singly_linked_list_t actual = { 0 };
    actual.head = &n1;

    sl_insert_at(&n1, 22);
    ASSERT(actual.head->val == 3);
    ASSERT(actual.head->next->val == 22);
    ASSERT(n1.next->val == 22);

    node_t n2 = { .val = 5 };
    actual.head = &n1;
    n1.next = &n2;

    sl_insert_at(&n1, 99);
    ASSERT(actual.head->val == 3);
    ASSERT(actual.head->next->val == 99);
    ASSERT(n1.next->val == 99);
    ASSERT(actual.head->next->next->val == 5);
    ASSERT(n1.next->next->val == 5);

    return 0;
}

static bool end_fn(node_t* node UNUSED, node_t* last UNUSED, node_t* target UNUSED)
{
    return false;
}

static bool find_fn(node_t* node, node_t* last UNUSED, node_t* target)
{
    return node->val == target->val;
}

int test_sl_traverse(void)
{
    node_t n4 = { .val = 4 };
    node_t n3 = {
        .val = 3,
        .next = &n4,
    };
    node_t n2 = {
        .val = 2,
        .next = &n3,
    };
    node_t n1 = {
        .val = 1,
        .next = &n2
    };
    singly_linked_list_t list = { 0 };
    list.head = &n1;

    node_t* actual = sl_traverse(&list, end_fn, &n3);
    ASSERT(actual == &n4);
    ASSERT(actual->val == 4);
    ASSERT(actual->next == NULL);

    actual = sl_traverse(&list, find_fn, &n1);
    ASSERT(actual == &n1);
    ASSERT(actual->val == 1);
    ASSERT(actual->next->val == 2);

    actual = sl_traverse(&list, find_fn, &n3);
    ASSERT(actual == &n3);
    ASSERT(actual->val == 3);
    ASSERT(actual->next->val == 4);

    return 0;
}

int test_sl_remove(void)
{
    node_t* n4 = malloc(sizeof(node_t));
    if (!n4) {
        printf("Error allocating memory for node\n");
        return 1;
    }
    n4->val = 4;
    singly_linked_list_t actual = { 0 };
    sl_remove(&actual, &n4);
    ASSERT(actual.head == NULL);
    ASSERT(n4 != NULL);

    actual.head = n4;
    sl_remove(&actual, &n4);
    ASSERT(actual.head == NULL);
    ASSERT(n4 == NULL);

    node_t* n3 = malloc(sizeof(node_t));
    if (!n3) {
        printf("Error allocating memory for node\n");
        return 1;
    }
    n3->val = 3;
    n3->next = n4;
    node_t n2 = {
        .val = 2,
        .next = n3,
    };
    node_t n1 = {
        .val = 1,
        .next = &n2
    };
    actual.head = &n1;

    sl_remove(&actual, &n3);
    ASSERT(n3 == NULL);
    ASSERT(actual.head == &n1);
    ASSERT(actual.head->next == &n2);
    ASSERT(actual.head->next->next == n4);

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

    printf("Running tests for 'sl_insert_at' function...\n");
    if (test_sl_insert_at() != 0) {
        printf("❌ Some tests for 'sl_insert_at' function failed.\n");
        failed_tests++;
    } else {
        printf("✅ All tests for 'sl_insert_at' function passed.\n");
    }

    printf("Running tests for 'sl_traverse' function...\n");
    if (test_sl_traverse() != 0) {
        printf("❌ Some tests for 'sl_traverse' function failed.\n");
        failed_tests++;
    } else {
        printf("✅ All tests for 'sl_traverse' function passed.\n");
    }

    printf("Running tests for 'sl_remove' function...\n");
    if (test_sl_remove() != 0) {
        printf("❌ Some tests for 'sl_remove' function failed.\n");
        failed_tests++;
    } else {
        printf("✅ All tests for 'sl_remove' function passed.\n");
    }

    if (failed_tests > 0) {
        printf("❌ %d failed tests.\n", failed_tests);
    } else {
        printf("✅ All tests passed successfully\n");
    }

    return 0;
}
