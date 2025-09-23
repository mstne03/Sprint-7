import { describe, test, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useForm from '@/hooks/useForm'

type Form = {
    email: string;
    bio: string;
};

const initial: Form = { email: "", bio: "" };

describe("useForm", () => {
    test("tests helpers initializing with the given state", () => {
        const { result } = renderHook(() => useForm<Form>(initial))

        expect(result.current.formState).toEqual(initial);
        expect(result.current.email).toBe("");
        expect(result.current.bio).toBe("");
        expect(typeof result.current.onInputChange).toBe("function");
        expect(typeof result.current.onFieldChange).toBe("function");
        expect(typeof result.current.resetForm).toBe("function");
        expect(typeof result.current.setFormState).toBe("function");
    });

    test("checks if onFieldChange updates a value", () => {
        const { result } = renderHook(() => useForm<Form>(initial));

        act(() => {
            result.current.onFieldChange("email", "testing@email.com");
        });

        expect(result.current.formState.email).toBe("testing@email.com");
        expect(result.current.email).toBe("testing@email.com");
        expect(result.current.bio).toBe("");
    });

    test("onInputChange adapts to an input event", () => {
        const { result } = renderHook(() => useForm<Form>(initial));

        act(() => {
            result.current.onInputChange({
                target: { name: "bio", value: "I'll be back." },
            } as any);
        });

        expect(result.current.bio).toBe("I'll be back.");
        expect(result.current.formState).toEqual({
            email: "",
            bio: "I'll be back.",
        });
    });

    test("resetForm goes bakc to initial state", () => {
        const { result } = renderHook(() => useForm<Form>(initial));

        act(() => {
            result.current.onFieldChange("email", "a@b.c");
            result.current.onFieldChange("bio", "hello");
        });
        expect(result.current.email).toBe("a@b.c");
        expect(result.current.bio).toBe("hello");

        act(() => {
            result.current.resetForm();
        });

        expect(result.current.formState).toEqual(initial);
        expect(result.current.email).toBe("");
        expect(result.current.bio).toBe("");
    });

    test("setFormState allows a complete state reset", () => {
        const { result } = renderHook(() => useForm<Form>(initial));

        act(() => {
            result.current.setFormState({ email: "x@y.z", bio: "ok" })
        });

        expect(result.current.formState).toEqual({ email: "x@y.z", bio: "ok" });
        expect(result.current.email).toBe("x@y.z");
        expect(result.current.bio).toBe("ok");
    });

    test("onFieldChange maintains immutability (the previous object stays the same)", () => {
        const { result } = renderHook(() => useForm<Form>(initial));
        const prev = result.current.formState;

        act(() => {
        result.current.onFieldChange("email", "immut@ble.com");
        });

        expect(result.current.formState).not.toBe(prev);
        expect(prev.email).toBe(""); 
    });
})
