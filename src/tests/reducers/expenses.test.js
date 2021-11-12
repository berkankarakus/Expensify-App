import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses"; 

test("should set default state", () => {
    const state = expensesReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "ID"
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add an expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: 4,
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, action.expense ]);
});

test("should edit an expense", () => {
    const amount = 1000000;
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test("should not edit an expense if not found", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "ID"
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});