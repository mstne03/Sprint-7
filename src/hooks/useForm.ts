import { useState, type ChangeEvent } from 'react'

const useForm = <T extends Record<string, unknown>>(initialState: T) => {
    const [formState, setFormState] = useState<T>(initialState);

    const onFieldChange = <K extends keyof T>(name: K, value: T[K]) => {
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        onFieldChange(name as keyof T, value as T[keyof T]);
    };

    const resetForm = () => setFormState(initialState);

    return {
        ...formState,
        formState,
        onInputChange,
        onFieldChange,
        resetForm,
        setFormState,
    }
}

export default useForm
