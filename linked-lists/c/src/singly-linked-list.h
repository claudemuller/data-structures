#ifndef SINGLY_LINKED_LIST_H_
#define SINGLY_LINKED_LIST_H_

#include <stdbool.h>

#ifdef __GNUC__
#define UNUSED __attribute__((unused))
#else
#define UNUSED
#endif

#define ERR_ALLOC "Error allocating memory for node"

typedef struct node node_t;

typedef struct node {
    int val;
    node_t* next;
} node_t;

typedef struct {
    node_t* head;
} singly_linked_list_t;

typedef struct {
    node_t* node;
    char* err;
} result_t;

typedef bool predicate_fn(node_t*, node_t*, node_t*);

node_t* sl_traverse(singly_linked_list_t* list, predicate_fn fn, node_t* target);
result_t sl_insert_at(node_t* n, int v);
result_t sl_append(singly_linked_list_t* list, int v);
void* sl_remove(singly_linked_list_t* list, node_t* n);

#endif // !SINGLY_LINKED_LIST_H_
