const { renderHook, act } = require("@testing-library/react")
import { useCounter } from "../../src/hooks/useCounter"
describe('Pruebas en  el useCounter', () => {
    test('debe de retornar lso valores por defecto', () => {

        const { result } = renderHook(() => useCounter(10))
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    })
    test("debe de retornar el valor de   100 en el counter", () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(100);
    })
    test("debe de incrementar el contador", () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter, increment, } = result.current;
        act(() => {
            increment();
            increment(2);
        })

        expect(result.current.counter).toBe(103)
    })
    test("debe de decrementar el contador", () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter, decrement, } = result.current;
        act(() => {
            decrement();
            decrement(2);
        })

        expect(result.current.counter).toBe(97)
    })
    test("debe de resetear el contador", () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter, reset, } = result.current;
        act(() => {
            reset();
            reset(2);
        })

        expect(result.current.counter).toBe(100)
    })
})