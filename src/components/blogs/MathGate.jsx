"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MathGate({ children }) {
    const router = useRouter();

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [verified, setVerified] = useState(false);
    const [operator, setOperator] = useState("+");

    const [answer, setAnswer] = useState("");

    useEffect(() => {
        generateQuestion();
    }, []);

    const generateQuestion = () => {
        const a = Math.floor(Math.random() * 40) + 10;
        const b = Math.floor(Math.random() * 20) + 1;

        const op = Math.random() > 0.5 ? "+" : "-";

        setNum1(a);
        setNum2(b);
        setOperator(op);
    };

    const verify = () => {
        const correct =
            operator === "+"
                ? num1 + num2
                : num1 - num2;

        if (Number(answer) === correct) {
            setVerified(true);
        }
        else {
            router.push("/");

        }

    };
    if (verified) {
        return children;
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-10 rounded-xl shadow w-[420px]">

                <h2 className="text-3xl font-bold mb-3">
                    Verification
                </h2>

                <p className="text-gray-500 mb-8">
                    Solve the math problem to continue.
                </p>

                <div className="text-4xl font-bold text-center mb-8">

                    {num1} {operator} {num2} = ?

                </div>

                <input
                    type="number"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full border rounded-lg px-4 py-3 mb-6"
                    placeholder="Answer"
                />

                <button
                    onClick={verify}
                    className="w-full bg-black text-white py-3 rounded-lg"
                >
                    Verify
                </button>

            </div>

        </div>
    );
}