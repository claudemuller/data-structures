CC = gcc
DBG_BIN = lldb
CFLAGS = #-D_GNU_SOURCE
CFLAGS += -std=c99
CFLAGS += -Wall
CFLAGS += -Wextra
CFLAGS += -pedantic
CFLAGS += -Werror
CFLAGS += -Wextra
CFLAGS += -Wmissing-declarations
SRC_FILES = ./src/*.c
BIN_DIR = ./bin
TEST_DIR = ./tests
TEST_SRC = $(filter-out ./src/main.c, $(wildcard ./src/*.c)) $(TEST_DIR)/*.c

run: setup-bin
	$(CC) $(CFLAGS) $(LIBS) $(SRC_FILES) -o $(BIN_DIR)/main $(LDFLAGS) && $(BIN_DIR)/main

setup-bin:
	mkdir -p $(BIN_DIR)

test:
	$(CC) $(CFLAGS) $(LIBS) $(TEST_SRC) -o $(TEST_DIR)/tests $(LDFLAGS) && $(TEST_DIR)/tests

test-debug:
	$(CC) $(CFLAGS) -g $(LIBS) $(TEST_SRC) -o $(TEST_DIR)/tests $(LDFLAGS) && lldb $(TEST_DIR)/tests $(ARGS)

clean:
	rm -rf $(TEST_DIR)/tests* $(BIN_DIR)/*

gen-compilation-db:
	bear -- make build
