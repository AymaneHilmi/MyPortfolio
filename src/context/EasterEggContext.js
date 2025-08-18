import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const EasterEggContext = createContext();

const EggList = [
    { id: '#1', name: '#1 Confetti Egg ', tip: 'Try typing your favorite dev’s name...', level: 'Easy', cursor: 'egg#1' },
    { id: '#2', name: '#2 Snake Egg ', tip: 'Try to achieve the goal of 10 on the snake game', level: 'Medium', cursor: 'egg#2' },
    { id: '#3', name: '#3 ////////', tip: '/////////////', level: 'Medium', cursor: 'egg#3' },
    { id: '#4', name: '#4 ////////', tip: '/////////////', level: 'Hard', cursor: 'egg#4' },
    { id: '#5', name: '#5 ////////', tip: '/////////////', level: 'Hard', cursor: 'egg#5' },
    { id: '#6', name: '#6 ////////', tip: '/////////////', level: 'Hard', cursor: 'egg#6' },
    { id: '#7', name: '#7 ////////', tip: '/////////////', level: 'Hard', cursor: 'egg#7' },
];

export const useEasterEgg = () => useContext(EasterEggContext);

export const EasterEggProvider = ({ children }) => {
    const [foundEggs, setFoundEggs] = useState(() => {
        const saved = localStorage.getItem('foundEggs');
        return saved ? JSON.parse(saved) : [];
    });

    const [confettiActive, setConfettiActive] = useState(false);

    useEffect(() => {
        localStorage.setItem('foundEggs', JSON.stringify(foundEggs));
    }, [foundEggs]);



    const incrementEggs = (eggId) => {
        setFoundEggs((prev) => {
            if (prev.includes(eggId)) {
                toast(`Easter Egg ${eggId} already found!`, {
                    icon: 'ℹ️',
                    duration: 5000,
                    style: {
                        borderRadius: '12px',
                        background: '#f5f5f5',
                        color: '#1E1E1E',
                        border: '1px solid #d1d5db',
                        padding: '14px 16px',
                        fontWeight: 500,
                    },
                    iconTheme: {
                        primary: '#10B981',
                        secondary: '#E0F2F1',
                    },
                });
                // resetEggs();   For testing
                return prev;
            }

            // 🎉 Messages personnalisés selon l'ID
            const messages = {
                '#1': "Confetti mode activated!",
                '#2': "You're a real gamer 🕹️",
                '#3': "You found the dev's secret console 👀",
                '#4': "Clicking instincts on point!",
            };

            const message = messages[eggId] || `Easter Egg ${eggId} found!`;

            toast.success(message, {
                duration: 5000,
                style: {
                    borderRadius: '12px',
                    background: '#f5f5f5',
                    color: '#1E1E1E',
                    border: '1px solid #d1d5db',
                    padding: '14px 16px',
                    fontWeight: 500,
                },
                iconTheme: {
                    primary: '#10B981',
                    secondary: '#E0F2F1',
                },
            });
            // resetEggs();   For testing
            return [...prev, eggId];
        });
    };



    const resetEggs = () => {
        localStorage.removeItem('foundEggs');
        toast('🔄 Easter Eggs reset');
    }


    // --------------------------------
    //    Easter Egg #1 : Confettis              
    // --------------------------------
    useEffect(() => {
        let typedText = "";
        const correctText = "aymane";

        const handleKeydown = (event) => {
            typedText += event.key.toLowerCase();

            if (typedText === correctText) {
                incrementEggs('#1');
                setConfettiActive(true);
                setTimeout(() => {
                    setConfettiActive(false);
                }, 5000);
                typedText = "";
            }

            if (!correctText.startsWith(typedText)) {
                typedText = event.key.toLowerCase();
            }
        };

        window.addEventListener("keydown", handleKeydown);
        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <EasterEggContext.Provider
            value={{
                foundEggs,
                eggsFounded: foundEggs.length,
                incrementEggs,
                resetEggs,
                confettiActive,
                setConfettiActive,
                eggsTotal: EggList.length,
                EggList
            }}
        >
            {children}
        </EasterEggContext.Provider>
    );
};