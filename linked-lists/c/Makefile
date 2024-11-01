CC = gcc
DBG_BIN = gdb
ifeq ($(shell uname -s),Darwin)
	DBG_BIN = lldb
endif
CFLAGS = #-D_GNU_SOURCE
CFLAGS += -std=gnu11
CFLAGS += -Wall
CFLAGS += -Wextra
CFLAGS += -pedantic
CFLAGS += -Werror
CFLAGS += -Wmissing-declarations
ASANFLAGS = -fsanitize=address -fno-common -fno-omit-frame-pointer

SRC_FILES = ./src/*.c
TEST_DIR = ./tests
TEST_SRC = $(filter-out ./src/main.c, $(wildcard ./src/*.c)) $(TEST_DIR)/*.c

test:
	@$(CC) $(CFLAGS) $(LIBS) $(TEST_SRC) -o $(TEST_DIR)/tests $(LDFLAGS) && $(TEST_DIR)/tests

test-debug:
	$(CC) $(CFLAGS) -g $(LIBS) $(TEST_SRC) -o $(TEST_DIR)/tests $(LDFLAGS) && lldb $(TEST_DIR)/tests $(ARGS)

memcheck:
	$(CC) $(ASANFLAGS) $(CFLAGS) -g $(LIBS) $(SRC_FILES) -o $(BIN_DIR)/memcheck.out $(LDFLAGS)
	$(BIN_DIR)/memcheck.out
	@echo "Memory check passed"

valgrid:
	$(CC) $(CFLAGS) -g $(LIBS) $(SRC_FILES) -o $(BIN_DIR)/memcheck.out $(LDFLAGS)
	valgrind --leak-check=yes $(BIN_DIR)/memcheck.out

leakscheck:
	leaks -atExit -- $(BIN)

clean:
	rm -rf $(TEST_DIR)/tests*

gen-compilation-db:
	bear -- make build
