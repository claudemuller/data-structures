#include "singly-linked-list.h"
#include <stdio.h>
#include <stdlib.h>

node_t* sl_traverse(singly_linked_list_t* list, predicate_fn fn, node_t* target)
{
    node_t* curr = list->head;
    node_t* last = NULL;

    while (curr != NULL) {
        bool res = fn(curr, last, target);
        last = curr;
        curr = curr->next;
        if (res) break;
    }

    return last;
}

result_t sl_insert_at(node_t* n, int v)
{
    node_t* new_node = malloc(sizeof(node_t));
    if (!new_node) {
        return (result_t) { .err = ERR_ALLOC };
    }
    new_node->val = v;
    new_node->next = n->next;

    n->next = new_node;

    return (result_t) { .node = new_node };
}

static bool last_node_pred(node_t* n1 UNUSED, node_t* n2 UNUSED, node_t* t UNUSED)
{
    return false;
}

result_t sl_append(singly_linked_list_t* list, int v)
{
    node_t* new_node = malloc(sizeof(node_t));
    if (!new_node) {
        return (result_t) { .err = ERR_ALLOC };
    }
    new_node->val = v;

    if (list->head == NULL) {
        list->head = new_node;
        return (result_t) { .node = new_node };
    }

    node_t* last_node = sl_traverse(list, last_node_pred, NULL);
    last_node->next = new_node;

    return (result_t) { .node = new_node };
}

static bool remove_pred(node_t* node, node_t* last, node_t* target)
{
    if (node->val == target->val) {
        last->next = target->next;
        return true;
    }
    return false;
}

void* sl_remove(singly_linked_list_t* list, node_t* n)
{
    if (list->head == NULL) return NULL;

    if (list->head->val == n->val) {
        list->head = list->head->next;
        return NULL;
    }

    sl_traverse(list, remove_pred, n);

    return NULL;
}
